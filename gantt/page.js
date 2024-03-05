"use strict";

/**
digraph G {
  rankdir=LR;

  A [shape=box label="Whatever"];
  B [shape=box];
  C [shape=box];
  D [shape=box];
  E [shape=box];
  F [shape=box];

  { rank=same; B; C; D; }

  A -> B;
  A -> C;
  B -> D;
  C -> E;
  D -> F;
}
*/

function getId(rec) {
  return 'N' + rec.id;
}

function renderDigraph(state) {
  const txts = [];
  txts.push('digraph G {');
  txts.push('rankdir=LR;');
  const labelToId = {};
  const ranks = {};
  for (const rec of state.records) {
    // Lame encoding
    const label = JSON.stringify(String(rec.Name));
    txts.push(getId(rec) + ` [shape=box label=${label}];`);
    labelToId[String(rec.Name)] = getId(rec);
    if (rec.Rank) {
      if (!ranks[rec.Rank]) {
        ranks[rec.Rank] = [];
      }
      ranks[rec.Rank].push(getId(rec));
    }
  }
  for (const rec of state.records) {
    const reqs = rec.Requirements;
    if (!reqs) { continue; }
    for (const req of reqs) {
      const id = labelToId[req];
      if (!id) { continue; }
      txts.push(id + ' -> ' + getId(rec) + ';');
    }
  }
  for (const rank of Object.keys(ranks)) {
    const lst = ranks[rank].join('; ');
    txts.push(`{ rank=same; ${lst}; }`);
  }
  txts.push('}');
  const txt = txts.join('\n');
  Viz.instance().then(viz => {
    const elem = document.getElementById('gantt');
    elem.textContent = '';
    elem.appendChild(viz.renderSVGElement(txt));
  });
}

grist.onRecords(data => {
  const records = grist.mapColumnNames(data) || data;
  console.log(records);
  renderDigraph({records});
});

grist.ready({
  columns: [
    "Name",
    "Requirements",
    {
      name: "Rank",
      optional: true
    }
  ],
});
