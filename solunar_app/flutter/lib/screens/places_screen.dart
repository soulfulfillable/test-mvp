import 'package:flutter/cupertino.dart';

import '../core/format.dart';
import '../core/places.dart';
import '../core/store.dart';
import '../core/theme.dart';
import '../core/zone.dart';
import 'widgets.dart';

/// Pick a place: my location, a saved spot, or any US/Canadian town (offline search).
class PlacesScreen extends StatefulWidget {
  const PlacesScreen({super.key});

  @override
  State<PlacesScreen> createState() => _PlacesScreenState();
}

class _PlacesScreenState extends State<PlacesScreen> {
  final _query = TextEditingController();
  String? _error;

  @override
  void dispose() {
    _query.dispose();
    super.dispose();
  }

  Future<void> _useLocation() async {
    setState(() => _error = null);
    final r = await AppStore.i.useMyLocation();
    if (!mounted) return;
    if (r.ok) {
      Navigator.of(context).pop();
    } else {
      setState(() => _error = r.message);
    }
  }

  Future<void> _choose(Place p) async {
    await AppStore.i.selectPlace(p);
    if (mounted) Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) =>
      ListenableBuilder(listenable: AppStore.i, builder: (context, _) => _build(context));

  Widget _build(BuildContext context) {
    final store = AppStore.i;
    final q = _query.text.trim();
    final results = q.isEmpty ? const <Town>[] : store.db.search(q);
    final here = store.place;
    final secondary = dyn(context, CupertinoColors.secondaryLabel);
    return CupertinoPageScaffold(
      navigationBar: const CupertinoNavigationBar(middle: Text('Places'), leading: BackLink(), border: null),
      child: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 8, 8, 4),
              child: Row(
                children: [
                  Expanded(
                    child: CupertinoSearchTextField(
                      key: const Key('place-search'),
                      controller: _query,
                      placeholder: 'Search a town, e.g. Austin, TX',
                      autocorrect: false,
                      // The built-in clear button appears inside the field on the first letter, and on the web
                      // preview that rebuilds the input and drops focus after one letter (web check caught it).
                      // So the clear button sits outside the field instead.
                      suffixMode: OverlayVisibilityMode.never,
                      onChanged: (_) => setState(() {}),
                    ),
                  ),
                  Semantics(
                    button: true,
                    label: 'Clear search',
                    enabled: q.isNotEmpty,
                    onTap: q.isEmpty ? null : () => setState(_query.clear),
                    excludeSemantics: true,
                    child: CupertinoButton(
                      key: const Key('search-clear'),
                      padding: EdgeInsets.zero,
                      minimumSize: const Size(40, 40),
                      onPressed: q.isEmpty ? null : () => setState(_query.clear),
                      child: Icon(
                        CupertinoIcons.xmark_circle_fill,
                        color: q.isEmpty
                            ? dyn(context, CupertinoColors.quaternaryLabel)
                            : dyn(context, CupertinoColors.secondaryLabel),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Expanded(
              child: ListView(
                key: const Key('places-list'),
                keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
                children: [
                  if (q.isEmpty) ...[
                    CupertinoListSection.insetGrouped(
                      footer: _error == null
                          ? null
                          : Text(
                              _error!,
                              key: const Key('places-error'),
                              style: TextStyle(fontSize: kSmall, color: dyn(context, CupertinoColors.systemRed)),
                            ),
                      children: [
                        ListRow(
                          button: true,
                          child: CupertinoListTile(
                            key: const Key('places-gps'),
                            leading: store.locating
                                ? const CupertinoActivityIndicator()
                                : Icon(CupertinoIcons.location_fill, color: dyn(context, accent)),
                            title: Text(store.locating ? 'Finding Your Location…' : 'Use My Location'),
                            subtitle: const Text('Times for exactly where you are'),
                            trailing: here?.isGps == true
                                ? Icon(CupertinoIcons.checkmark, color: dyn(context, accent))
                                : null,
                            onTap: store.locating ? null : _useLocation,
                          ),
                        ),
                      ],
                    ),
                    CupertinoListSection.insetGrouped(
                      header: const SectionHeader('Saved places'),
                      footer: SectionFooter(
                        store.favorites.isEmpty
                            ? 'Tap the star on the main screen to save a spot — your lake, lease or deer stand.'
                            : 'Search ${thousands(store.db.towns.length)} US and Canadian towns — works offline.',
                        textKey: Key(store.favorites.isEmpty ? 'no-favorites' : 'town-count'),
                      ),
                      children: [
                        if (store.favorites.isEmpty)
                          ListRow(
                            child: CupertinoListTile(
                              title: Text('No saved places yet', style: TextStyle(color: secondary)),
                            ),
                          ),
                        for (final (i, f) in store.favorites.indexed)
                          ListRow(
                            button: true,
                            hasButtons: true,
                            child: CupertinoListTile(
                              key: Key('fav-$i'),
                              leading: Icon(CupertinoIcons.star_fill, color: dyn(context, accent), size: 20),
                              title: Text(f.name),
                              subtitle: Text([?f.detail, PlaceZone(f.tz).abbreviation(store.clock())].join(' · ')),
                              additionalInfo: here != null && !here.isGps && here.sameSpot(f)
                                  ? Icon(CupertinoIcons.checkmark, color: dyn(context, accent))
                                  : null,
                              trailing: Semantics(
                                button: true,
                                label: 'Remove ${f.name}',
                                onTap: () => store.removeFavorite(f),
                                excludeSemantics: true,
                                child: CupertinoButton(
                                  key: Key('fav-del-$i'),
                                  padding: EdgeInsets.zero,
                                  minimumSize: const Size(44, 44),
                                  onPressed: () => store.removeFavorite(f),
                                  child: Icon(
                                    CupertinoIcons.minus_circle_fill,
                                    color: dyn(context, CupertinoColors.systemRed),
                                  ),
                                ),
                              ),
                              onTap: () => _choose(f),
                            ),
                          ),
                      ],
                    ),
                  ] else ...[
                    if (results.isEmpty)
                      Padding(
                        padding: const EdgeInsets.fromLTRB(32, 24, 32, 0),
                        child: Text(
                          'No town named “$q”. Try the nearest bigger town, or use your location.',
                          key: const Key('no-results'),
                          textAlign: TextAlign.center,
                          style: TextStyle(color: secondary),
                        ),
                      )
                    else
                      CupertinoListSection.insetGrouped(
                        children: [
                          for (final (i, t) in results.indexed)
                            ListRow(
                              button: true,
                              child: CupertinoListTile(
                                key: Key('town-$i'),
                                title: Text(t.label),
                                additionalInfo: here == null
                                    ? null
                                    : Text(miles(milesBetween(here.lat, here.lng, t.lat, t.lng))),
                                onTap: () => _choose(t.toPlace()),
                              ),
                            ),
                        ],
                      ),
                  ],
                  const SizedBox(height: 24),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
