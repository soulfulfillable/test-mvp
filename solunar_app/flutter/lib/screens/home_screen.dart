import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';

import '../core/ads.dart';
import '../core/astro.dart';
import '../core/format.dart';
import '../core/places.dart';
import '../core/solunar.dart';
import '../core/store.dart';
import '../core/theme.dart';
import '../core/zone.dart';
import 'calendar_screen.dart';
import 'places_screen.dart';
import 'score_screen.dart';
import 'settings_screen.dart';
import 'widgets.dart';

/// The one main screen. The dial is the hero; everything else is a quiet grouped list.
class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> with WidgetsBindingObserver {
  Timer? _tick;

  /// Local date picked in the week strip or the 30-day calendar; null = today.
  DateTime? _picked;
  String? _locationError;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    // Countdowns move every minute; a 20 s tick keeps them within the minute.
    _tick = Timer.periodic(const Duration(seconds: 20), (_) {
      if (mounted) setState(() {});
    });
    WidgetsBinding.instance.addPostFrameCallback((_) => AppStore.i.resume());
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _tick?.cancel();
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      AppStore.i.resume();
      if (mounted) setState(() {});
    }
  }

  void _pick(DateTime? wallDay) {
    HapticFeedback.selectionClick();
    setState(() => _picked = wallDay);
  }

  Future<void> _useLocation() async {
    setState(() => _locationError = null);
    final r = await AppStore.i.useMyLocation();
    if (mounted) setState(() => _locationError = r.ok ? null : r.message);
  }

  Future<void> _openPlaces() async {
    await Navigator.of(context).push(CupertinoPageRoute<void>(builder: (_) => const PlacesScreen()));
    if (mounted) setState(() => _picked = null);
  }

  void _openSettings() => Navigator.of(context).push(CupertinoPageRoute<void>(builder: (_) => const SettingsScreen()));

  void _openScore(SolunarDay day) =>
      Navigator.of(context).push(CupertinoPageRoute<void>(builder: (_) => ScoreScreen(day: day)));

  Future<void> _openCalendar() async {
    if (!AppStore.i.calendarOpen) {
      final ok = await unlockCalendarFlow(context);
      if (!ok || !mounted) return;
    }
    final picked = await Navigator.of(context)
        .push<DateTime>(CupertinoPageRoute(builder: (_) => const CalendarScreen()));
    if (picked != null && mounted) _pick(picked);
  }

  Future<void> _toggleFavorite(Place p) async {
    final store = AppStore.i;
    if (store.isFavorite(p)) {
      await store.removeFavorite(p);
      return;
    }
    String? name;
    if (p.isGps) {
      name = await _askName(p);
      if (name == null) return;
    }
    await store.addFavorite(p, name: name);
    HapticFeedback.lightImpact();
  }

  Future<String?> _askName(Place p) {
    final near = p.detail?.replaceFirst(RegExp(r'^(near|in) '), '');
    final ctl = TextEditingController(text: near == null ? 'My spot' : 'Spot near ${near.split(',').first}');
    return showCupertinoDialog<String>(
      context: context,
      builder: (ctx) => CupertinoAlertDialog(
        title: const Text('Save This Spot'),
        content: Padding(
          padding: const EdgeInsets.only(top: 10),
          child: CupertinoTextField(
            key: const Key('fav-name'),
            controller: ctl,
            autofocus: true,
            maxLength: 40,
            placeholder: 'Name, e.g. Deer stand',
            textCapitalization: TextCapitalization.sentences,
            onSubmitted: (v) => Navigator.of(ctx).pop(v),
          ),
        ),
        actions: [
          CupertinoDialogAction(
            key: const Key('fav-cancel'),
            onPressed: () => Navigator.of(ctx).pop(),
            child: const Text('Cancel'),
          ),
          CupertinoDialogAction(
            key: const Key('fav-save'),
            isDefaultAction: true,
            onPressed: () => Navigator.of(ctx).pop(ctl.text),
            child: const Text('Save'),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) =>
      ListenableBuilder(listenable: AppStore.i, builder: (context, _) => _build(context));

  Widget _build(BuildContext context) {
    final store = AppStore.i;
    final place = store.place!;
    final now = store.clock();
    final days = store.days();
    final today = days.first;
    var picked = _picked;
    if (picked != null && !picked.isAfter(today.wallDay)) picked = null; // midnight passed
    final day = picked == null
        ? today
        : days.firstWhere((d) => d.wallDay == picked, orElse: () => SolunarDay(place, picked!));
    final isToday = identical(day, today);
    final hunt = store.huntMode;
    final fav = store.isFavorite(place);
    final legal = day.legalLight(store.beforeSunrise, store.afterSunset);
    final status = isToday ? NowStatus.at(now, days.take(3).toList()) : null;

    final sections = <Widget>[
      _LegalSection(
        day: day,
        legal: legal,
        before: store.beforeSunrise,
        after: store.afterSunset,
        onChange: _openSettings,
      ),
      _PeriodsSection(day: day, now: isToday ? now : null),
      _SunMoonSection(day: day),
      CupertinoListSection.insetGrouped(
        children: [
          ListRow(
            button: true,
            child: CupertinoListTile(
              key: const Key('how-scored'),
              title: const Text('How Is This Scored?'),
              subtitle: Text('${day.score.total} out of 100'),
              trailing: const CupertinoListTileChevron(),
              onTap: () => _openScore(day),
            ),
          ),
          ListRow(
            button: true,
            child: CupertinoListTile(
              key: const Key('open-calendar'),
              title: const Text('30-Day Calendar'),
              subtitle: Text(
                store.calendarOpen ? 'Open — plan the best days' : 'A short video opens it for 24 h',
                key: const Key('calendar-hint'),
              ),
              trailing: store.calendarOpen
                  ? const CupertinoListTileChevron()
                  : Icon(CupertinoIcons.play_circle, color: dyn(context, accent)),
              onTap: _openCalendar,
            ),
          ),
        ],
      ),
    ];
    // Hunting view puts shooting light first; fishing view puts the periods first.
    if (!hunt) sections.insert(0, sections.removeAt(1));

    return CupertinoPageScaffold(
      child: Column(
        children: [
          Expanded(
            child: KeyedSubtree(
              // A fresh list per day/place opens at the top. (Jumping an existing list to the top in the
              // same frame that drops rows made it correct its offset from stale positions — robot test.)
              key: ValueKey('${place.key}|${place.name}|${day.wallDay}'),
              child: CustomScrollView(
                key: const Key('home-list'),
                slivers: [
                  CupertinoSliverNavigationBar(
                    largeTitle: Text(place.name, key: const Key('place-name')),
                    // Its own collapsed title (otherwise the bar reuses the large title widget, key and all).
                    middle: Text(place.name),
                    alwaysShowMiddle: false,
                    border: null,
                    trailing: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        if (store.locating) const CupertinoActivityIndicator(),
                        _navButton(
                          'fav-toggle',
                          fav ? 'Remove from saved places' : 'Save place',
                          fav ? CupertinoIcons.star_fill : CupertinoIcons.star,
                          () => _toggleFavorite(place),
                        ),
                        _navButton('place-button', 'Change place', CupertinoIcons.map_pin_ellipse, _openPlaces),
                        _navButton('settings', 'Settings', CupertinoIcons.slider_horizontal_3, _openSettings),
                      ],
                    ),
                  ),
                  SliverToBoxAdapter(
                    child: _Header(
                      place: place,
                      zone: day.zone,
                      now: now,
                      guessed: store.placeGuessed,
                      locating: store.locating,
                      error: _locationError,
                      onUseLocation: _useLocation,
                    ),
                  ),
                  SliverToBoxAdapter(
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(16, 12, 16, 4),
                      child: SizedBox(
                        width: double.infinity,
                        child: CupertinoSlidingSegmentedControl<bool>(
                          key: const Key('mode'),
                          groupValue: hunt,
                          children: const {false: Text('Fishing'), true: Text('Hunting')},
                          onValueChanged: (v) {
                            if (v == null) return;
                            HapticFeedback.selectionClick();
                            store.setHuntMode(v);
                          },
                        ),
                      ),
                    ),
                  ),
                  SliverToBoxAdapter(
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(8, 10, 8, 0),
                      child: WeekStrip(
                        days: days.take(7).toList(),
                        selected: day.wallDay,
                        onPick: (d) => _pick(d == today.wallDay ? null : d),
                      ),
                    ),
                  ),
                  SliverToBoxAdapter(
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(24, 8, 24, 0),
                      child: Center(
                        child: ConstrainedBox(
                          constraints: const BoxConstraints(maxWidth: 360),
                          child: SolunarDial(
                            day: day,
                            now: isToday ? now : null,
                            legal: hunt ? legal : null,
                            center: hunt
                                ? _HuntCenter(day: day, legal: legal, isToday: isToday, now: now, tomorrow: days[1])
                                : _FishCenter(day: day, todayWall: today.wallDay),
                          ),
                        ),
                      ),
                    ),
                  ),
                  SliverToBoxAdapter(
                    child: _StatusLine(status: status, zone: day.zone, now: now, day: day, todayWall: today.wallDay),
                  ),
                  SliverList.list(
                    children: [
                      ...sections,
                      Padding(
                        padding: const EdgeInsets.fromLTRB(32, 4, 32, 24),
                        child: SectionFooter(
                          'Worked out on your phone from the positions of the sun and moon — no signal needed. '
                          'Solunar times are a guide, not a promise: weather, water and pressure matter too.',
                          textKey: const Key('footer'),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
          SafeArea(top: false, child: Ads.i.banner()),
        ],
      ),
    );
  }

  Widget _navButton(String key, String label, IconData icon, VoidCallback onTap) => Semantics(
    button: true,
    label: label,
    onTap: onTap,
    excludeSemantics: true,
    child: CupertinoButton(
      key: Key(key),
      padding: EdgeInsets.zero,
      minimumSize: const Size(40, 44),
      onPressed: onTap,
      child: Icon(icon, size: 24),
    ),
  );
}

/// "in Austin, TX · CDT" under the large title, plus the first-launch nudge to use the real location.
class _Header extends StatelessWidget {
  const _Header({
    required this.place,
    required this.zone,
    required this.now,
    required this.guessed,
    required this.locating,
    required this.error,
    required this.onUseLocation,
  });
  final Place place;
  final PlaceZone zone;
  final DateTime now;
  final bool guessed;
  final bool locating;
  final String? error;
  final VoidCallback onUseLocation;

  @override
  Widget build(BuildContext context) {
    final secondary = dyn(context, CupertinoColors.secondaryLabel);
    final detail = [
      if (guessed) 'Biggest town in your time zone' else if (place.detail != null) place.detail!,
      'Times in ${zone.abbreviation(now)}',
    ].join(' · ');
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 0, 16, 0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            detail,
            key: const Key('place-detail'),
            maxLines: 2,
            style: TextStyle(fontSize: kSmall, color: secondary),
          ),
          if (guessed) ...[
            const SizedBox(height: 10),
            PrimaryButton(
              key: const Key('use-location'),
              label: locating ? 'Finding Your Location…' : 'Use My Location',
              icon: CupertinoIcons.location_fill,
              onPressed: locating ? null : onUseLocation,
            ),
          ],
          if (error != null) ...[
            const SizedBox(height: 8),
            Text(
              error!,
              key: const Key('location-error'),
              style: TextStyle(fontSize: kSmall, color: dyn(context, CupertinoColors.systemRed)),
            ),
          ],
        ],
      ),
    );
  }
}

/// Fishing view: the day's score inside the dial.
class _FishCenter extends StatelessWidget {
  const _FishCenter({required this.day, required this.todayWall});
  final SolunarDay day;
  final DateTime todayWall;

  @override
  Widget build(BuildContext context) {
    final base = textOf(context);
    final secondary = dyn(context, CupertinoColors.secondaryLabel);
    final rel = relativeDay(day.wallDay, todayWall);
    return Semantics(
      label: '$rel. Solunar score ${day.score.total} out of 100, ${day.score.rating.label}. ${day.phase.phase.label}',
      excludeSemantics: true,
      child: FittedBox(
        fit: BoxFit.scaleDown,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              rel == 'Today' || rel == 'Tomorrow' ? '$rel · ${monthDay(day.wallDay)}' : rel,
              key: const Key('day-title'),
              style: base.copyWith(fontSize: kSmall, color: secondary),
            ),
            Text(
              '${day.score.total}',
              key: const Key('score-number'),
              style: base.copyWith(
                fontSize: 72,
                height: 1.05,
                fontWeight: FontWeight.w600,
                letterSpacing: -2,
                fontFeatures: tabular,
              ),
            ),
            Text(
              '${day.score.rating.label} day',
              key: const Key('score-rating'),
              style: base.copyWith(fontSize: kBody, fontWeight: FontWeight.w600, color: dyn(context, accent)),
            ),
            const SizedBox(height: 6),
            Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                MoonIcon(illumination: day.phase.illumination, waxing: day.phase.waxing, size: 14),
                const SizedBox(width: 6),
                Text(
                  day.phase.phase.label,
                  key: const Key('day-phase'),
                  style: base.copyWith(fontSize: kSmall, color: secondary),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

/// Hunting view: the shooting-light countdown inside the dial.
class _HuntCenter extends StatelessWidget {
  const _HuntCenter({
    required this.day,
    required this.legal,
    required this.isToday,
    required this.now,
    required this.tomorrow,
  });
  final SolunarDay day;
  final LegalLight? legal;
  final bool isToday;
  final DateTime now;
  final SolunarDay tomorrow;

  @override
  Widget build(BuildContext context) {
    final base = textOf(context);
    final secondary = dyn(context, CupertinoColors.secondaryLabel);
    final z = day.zone;
    final l = legal;
    String label;
    String big;
    String? sub;
    if (l == null) {
      label = 'Shooting light';
      big = day.sun.alwaysUp ? 'Sun up all day' : 'No sunrise';
    } else if (!isToday) {
      label = dayLabel(day.wallDay);
      big = clock(l.start, z);
      sub = 'to ${clock(l.end, z)}';
    } else if (now.isBefore(l.start)) {
      label = 'Shooting light starts in';
      big = duration(l.start.difference(now));
      sub = span(l.start, l.end, z);
    } else if (now.isBefore(l.end)) {
      label = 'Shooting light ends in';
      big = duration(l.end.difference(now));
      sub = span(l.start, l.end, z);
    } else {
      final t = tomorrow.legalLight(AppStore.i.beforeSunrise, AppStore.i.afterSunset);
      label = 'Ended ${clock(l.end, z)} · tomorrow';
      big = t == null ? 'Done' : clock(t.start, z);
      sub = t == null ? null : 'in ${duration(t.start.difference(now))}';
    }
    return Semantics(
      label: '$label $big${sub == null ? '' : ', $sub'}',
      excludeSemantics: true,
      child: FittedBox(
        fit: BoxFit.scaleDown,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              label,
              key: const Key('legal-label'),
              style: base.copyWith(fontSize: kSmall, color: secondary),
            ),
            Text(
              big,
              key: const Key('legal-big'),
              style: base.copyWith(
                fontSize: 52,
                height: 1.1,
                fontWeight: FontWeight.w600,
                letterSpacing: -1.5,
                fontFeatures: tabular,
              ),
            ),
            if (sub != null)
              Text(
                sub,
                key: const Key('legal-sub'),
                style: base.copyWith(fontSize: kBody, fontWeight: FontWeight.w600, color: dyn(context, accent)),
              ),
          ],
        ),
      ),
    );
  }
}

/// "Major period now · 34m left" / "Next: Minor period 1:23 PM · in 1h 23m" under the dial (today only).
class _StatusLine extends StatelessWidget {
  const _StatusLine({
    required this.status,
    required this.zone,
    required this.now,
    required this.day,
    required this.todayWall,
  });
  final NowStatus? status;
  final PlaceZone zone;
  final DateTime now;
  final SolunarDay day;
  final DateTime todayWall;

  @override
  Widget build(BuildContext context) {
    final s = status;
    final cur = s?.current, next = s?.next;
    final secondary = dyn(context, CupertinoColors.secondaryLabel);
    if (cur == null && next == null) {
      // Another day: say which one (the dial has no "now" dot then).
      return Padding(
        padding: const EdgeInsets.fromLTRB(16, 4, 16, 8),
        child: Text(
          s == null ? relativeDay(day.wallDay, todayWall) : '',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: kSmall, color: secondary),
        ),
      );
    }
    final p = cur ?? next!;
    final title = cur != null ? '${p.kind.label} period now' : 'Next: ${p.kind.label} period';
    final line = cur != null
        ? 'until ${clock(p.end, zone)} · ${duration(p.end.difference(now))} left'
        : '${span(p.start, p.end, zone)} · in ${duration(p.start.difference(now))}';
    return Padding(
      key: const Key('now-card'),
      padding: const EdgeInsets.fromLTRB(16, 4, 16, 8),
      child: Column(
        children: [
          Text(
            title,
            key: const Key('now-title'),
            style: TextStyle(fontSize: kBody, fontWeight: FontWeight.w600, color: dyn(context, accent)),
          ),
          Text(
            line,
            key: const Key('now-line'),
            style: TextStyle(fontSize: kSmall, color: secondary),
          ),
        ],
      ),
    );
  }
}

class _PeriodsSection extends StatelessWidget {
  const _PeriodsSection({required this.day, this.now});
  final SolunarDay day;
  final DateTime? now;

  @override
  Widget build(BuildContext context) {
    final z = day.zone;
    final a = dyn(context, accent);
    return CupertinoListSection.insetGrouped(
      header: const SectionHeader('Solunar periods'),
      footer: const SectionFooter(
        'Major: moon overhead or underfoot, ±1 hour. Minor: moonrise or moonset, ±30 minutes.',
      ),
      children: [
        if (day.periods.isEmpty)
          const ListRow(child: CupertinoListTile(title: Text('No moonrise, moonset or moon overhead today'))),
        for (final (i, p) in day.periods.indexed)
          ListRow(
            child: CupertinoListTile(
              key: Key('period-$i'),
              // Same marks as the dial: wide bar for Major, thin for Minor.
              leading: Center(
                child: Container(
                  width: p.kind == PeriodKind.major ? 7 : 3,
                  height: 28,
                  decoration: BoxDecoration(color: a, borderRadius: BorderRadius.circular(2)),
                ),
              ),
              leadingSize: 12,
              title: Text(span(p.start, p.end, z), style: const TextStyle(fontFeatures: tabular)),
              subtitle: Text('${p.kind.label} · ${p.event.kind.label} ${clock(p.center, z)}'),
              additionalInfo: now != null && p.contains(now!)
                  ? Text(
                      'Now',
                      style: TextStyle(color: a, fontWeight: FontWeight.w600),
                    )
                  : null,
            ),
          ),
      ],
    );
  }
}

class _LegalSection extends StatelessWidget {
  const _LegalSection({
    required this.day,
    required this.legal,
    required this.before,
    required this.after,
    required this.onChange,
  });
  final SolunarDay day;
  final LegalLight? legal;
  final int before;
  final int after;
  final VoidCallback onChange;

  @override
  Widget build(BuildContext context) {
    final z = day.zone;
    final l = legal;
    String m(int x) => '$x min';
    return CupertinoListSection.insetGrouped(
      header: const SectionHeader('Legal shooting light'),
      footer: SectionFooter(
        '${m(before)} before sunrise to ${m(after)} after sunset. Rules differ by state and species — check your regulations.',
        textKey: const Key('legal-rule'),
      ),
      children: [
        ListRow(
          child: CupertinoListTile(
            key: const Key('legal-start'),
            title: const Text('Starts'),
            additionalInfo: Text(l == null ? '—' : clock(l.start, z), style: const TextStyle(fontFeatures: tabular)),
          ),
        ),
        ListRow(
          child: CupertinoListTile(
            key: const Key('legal-end'),
            title: const Text('Ends'),
            additionalInfo: Text(l == null ? '—' : clock(l.end, z), style: const TextStyle(fontFeatures: tabular)),
          ),
        ),
        ListRow(
          button: true,
          child: CupertinoListTile(
            key: const Key('legal-change'),
            title: const Text('Adjust for Your State'),
            subtitle: Text('$before min before · $after min after'),
            trailing: const CupertinoListTileChevron(),
            onTap: onChange,
          ),
        ),
      ],
    );
  }
}

class _SunMoonSection extends StatelessWidget {
  const _SunMoonSection({required this.day});
  final SolunarDay day;

  @override
  Widget build(BuildContext context) {
    final z = day.zone;
    String t(DateTime? x) => x == null ? '—' : clock(x, z);
    final mid = day.start.add(const Duration(hours: 12));
    final nextFull = z.dayOf(nextPrincipalPhase(MoonPhase.fullMoon, mid));
    final nextNew = z.dayOf(nextPrincipalPhase(MoonPhase.newMoon, mid));
    Widget row(String k, String title, String value) => ListRow(
      child: CupertinoListTile(
        title: Text(title),
        additionalInfo: Text(
          value,
          key: Key(k),
          style: const TextStyle(fontFeatures: tabular),
        ),
      ),
    );
    return CupertinoListSection.insetGrouped(
      header: const SectionHeader('Sun & moon'),
      children: [
        row('sunrise', 'Sunrise', t(day.sun.sunrise)),
        row('sunset', 'Sunset', t(day.sun.sunset)),
        row('moonrise', 'Moonrise', t(day.event(MoonEventKind.rise)?.time)),
        row('moonset', 'Moonset', t(day.event(MoonEventKind.set)?.time)),
        ListRow(
          child: CupertinoListTile(
            leading: MoonIcon(illumination: day.phase.illumination, waxing: day.phase.waxing, size: 22),
            title: Text(day.phase.phase.label),
            additionalInfo: Text('${(day.phase.illumination * 100).round()}% lit', key: const Key('moon-lit')),
          ),
        ),
        row('next-full', 'Next Full Moon', monthDay(nextFull)),
        row('next-new', 'Next New Moon', monthDay(nextNew)),
      ],
    );
  }
}
