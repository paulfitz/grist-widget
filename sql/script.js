/**
 * Run a query.
 */
async function query(sql) {
  const tokenInfo = await grist.docApi.getAccessToken({readOnly: true});
  const url = tokenInfo.baseUrl + `/sql?auth=${tokenInfo.token}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sql
    }),
  });
  return response.json();
}

/**
 * Show the results of a query.
 */
function renderResponse(result) {
  if (result.error) {
    throw new Error(result.error);
  }
  makeTable(result.records);
}

/**
 * Update table to show the provided data.
 * Expect data to be records from /sql endpoint.
 */
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

/**
 * Handle the "run" button or keyboard shortcut.
 * Take SQL query from UI. Update settings if needed.
 * Run query and render.
 * Errors are rendered as mini-tables (blush).
 */
async function run(settings) {
  const sql = document.getElementById('query').value;
  if (settings.sql !== sql) {
    await grist.widgetApi.setOption('sql', sql);
    settings.sql = sql;
  }
  try {
    const result = await query(sql);
    renderResponse(result);
  } catch (e) {
    console.error(e);
    makeTable([{
      fields: {
        error: String(e),
      }
    }]);
  }
}

/**
 * Initialize the page.
 */
function init() {
  const settings = {};
  const doSql = () => run(settings);

  // Add handler for button.
  document.getElementById('run').addEventListener('click', doSql);

  // Add keyboard shortcut.
  document.getElementById('textarea-container').addEventListener('keydown', async (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      // Ctrl + Enter is pressed
      e.preventDefault();
      await doSql();
    }
  });

  // Add tip for the keyboard shortcut.
  const isMacOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const tip = isMacOS ? "⌘-Enter" : "Ctrl-Enter";
  document.getElementById('run').innerText += " (" + tip + ")";

  // Set up Grist.
  grist.ready({
    requiredAccess: 'full'
  });
  grist.onOptions(async (options) => {
    const sql = options?.sql;
    if (sql) {
      settings.sql = sql;
      document.getElementById('query').value = sql;
      await doSql();
    }
  });
}

/**
 * Call init once page is loaded.
 */
function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(init);
