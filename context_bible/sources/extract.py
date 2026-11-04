import json,re
want={'john':[(1,range(43,52)),(7,range(40,53)),(21,[2]),(1,[38,39])],'micah':[(5,[2])],'genesis':[(28,range(10,18)),(27,[35,36]),(32,[28])]}
names={'john':'John','micah':'Micah','genesis':'Genesis'}
out={'WEB':{},'KJV':{},'ASV':{}}
for b,specs in want.items():
    d=json.load(open(f'web_{b}.json'))
    acc={}
    for it in d:
        if 'value' in it and 'chapterNumber' in it:
            k=(it['chapterNumber'],it['verseNumber']); acc[k]=acc.get(k,'')+it['value']
    for c,vs in specs:
        for v in vs:
            t=re.sub(r'\s+',' ',acc[(c,v)]).strip()
            out['WEB'][f'{names[b]} {c}:{v}']=t
for tr in ['KJV','ASV']:
    d=json.load(open(f'{tr}.json'))
    bk={x['name']:x for x in d['books']}
    for b,specs in want.items():
        B=bk[names[b]]
        for c,vs in specs:
            ch=[x for x in B['chapters'] if x['chapter']==c][0]
            vm={x['verse']:x['text'] for x in ch['verses']}
            for v in vs: out[tr][f'{names[b]} {c}:{v}']=vm[v]
json.dump(out,open('texts.json','w'),indent=1,ensure_ascii=False)
for tr in out:
  for k,v in out[tr].items(): print(tr,k,'|',v)
