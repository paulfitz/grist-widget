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
  txts.push('newrank=true;');
  const labelToId = {};
  const ranks = {};
  const groups = {};
  const clusters = {};
  for (const rec of state.records) {
    if (rec.Rank) {
      if (!ranks[rec.Rank]) {
        ranks[rec.Rank] = [];
      }
      ranks[rec.Rank].push(getId(rec));
    }
    if (rec.Group) {
      if (!groups[rec.Group]) {
        groups[rec.Group] = [];
      }
      groups[rec.Group].push(getId(rec));
    }
    if (rec.Cluster) {
      if (!clusters[rec.Cluster]) {
        clusters[rec.Cluster] = [];
      }
      clusters[rec.Cluster].push(getId(rec));
    }
  }
  for (const rec of state.records) {
    // Lame encoding
    const label = JSON.stringify(String(rec.Name));
    const group = rec.Group ? JSON.stringify(String(rec.Group)) : '';
    txts.push(getId(rec) + ` [shape=box label=${label}` +
              (group ? ` group=${group}` : '') +
             '];');
    labelToId[String(rec.Name)] = getId(rec);
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
    const rankType = ['source', 'sink'].includes(rank) ? rank : 'same';
    txts.push(`{ rank=${rankType}; ${lst}; }`);
  }
  let i = 0;
  for (const cluster of Object.keys(clusters)) {
    const lst = clusters[cluster].join('; ');
    const label = JSON.stringify(cluster);
    txts.push(`subgraph cluster_${i} { ${lst};` +
              (cluster.startsWith('#') ? '' : ` label=${label}`) +
              ' }');
    i++;
  }
  txts.push('}');
  const txt = txts.join('\n');
  console.log(txt);
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
    },
    {
      name: "Group",
      optional: true
    },
    {
      name: "Cluster",
      optional: true
    }
  ],
});
