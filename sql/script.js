async function run(sql) {
  const tokenInfo = await grist.docApi.getAccessToken({readOnly: true});
  console.log(tokenInfo);
  const url = tokenInfo.baseUrl + `/sql?auth=${tokenInfo.token}`;
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sql
    }),
  });
  const result2 = await result.json();
  if (result2.error) {
    throw new Error(result2.error);
  }
  console.log(result2);
  makeTable(result2.records);
}

function makeTable(data) {
  const tableHeadersRow = document.getElementById('table-headers');
  const tableBody = document.getElementById('table-body');
  tableHeadersRow.innerHTML = "";
  tableBody.innerHTML = "";

  // Extract the headers from the first object in the data array
  const firstItem = data[0];
  const headers = Object.keys(firstItem.fields);

  // Create table headers dynamically
  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    tableHeadersRow.appendChild(th);
  });

  // Populate the table body
  data.forEach(item => {
    const fields = item.fields;
    const row = document.createElement('tr');
    
    headers.forEach(header => {
      const cell = document.createElement('td');
      cell.textContent = fields[header];
      row.appendChild(cell);
    });
    
    tableBody.appendChild(row);
  });
}


const settings = {};

async function runEvent() {
  const sql = document.getElementById('query').value;
  if (settings.sql !== sql) {
    await grist.widgetApi.setOption('sql', sql);
    settings.sql = sql;
  }
  runInBackground(sql);
}

function init() {
  document.getElementById('run').addEventListener('click', runEvent);
  document.getElementById('texty').addEventListener('keydown', async (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      // Ctrl + Enter is pressed
      e.preventDefault();
      await runEvent();
    }
  });
  const isMacOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const tip = isMacOS ? "⌘-Enter" : "Ctrl-Enter";
  document.getElementById('run').innerText += " (" + tip + ")";
}

grist.ready({
  requiredAccess: 'full'
});

grist.onOptions((options) => {
  console.log("Options", {options});
  const sql = options?.sql;
  if (sql) {
    settings.sql = sql;
    document.getElementById('query').value = sql;
    runInBackground(sql);
  }
});

function runInBackground(sql) {
  run(sql).catch(e => {
    console.error(e);
    makeTable([{
      fields: {
        error: String(e),
      }
    }]);
  });
}

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(init);
