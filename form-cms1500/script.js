let printable = null;
let currentData = null;
let currentLib = null;
let showLabels = false;


function changeOptions() {
  if (!currentData) { return; }
  const withBackground = document.getElementById('background-show').checked;
  const form = withBackground ? 'form-all.pdf' : 'form-fore.pdf';
  showLabels = document.getElementById('labels').checked;
  loadAndFillPdf(currentLib, form, currentData);;
}

function printPdf(pdfBuffer) {
  pdfBuffer = pdfBuffer || printable;
  if (!pdfBuffer) {
    alert('Nothing to print yet');
    return;
  }

  // Step 1: Create a Blob from the buffer
  const pdfBlob = new Blob([pdfBuffer], { type: 'application/pdf' });

  // Step 2: Generate a URL for the Blob
  const pdfUrl = URL.createObjectURL(pdfBlob);

  // Step 3: Open the PDF in a new window or iframe
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';  // Hide the iframe
  iframe.src = pdfUrl;

  // Append iframe to the body
  document.body.appendChild(iframe);

  // Step 4: Wait for the iframe to load the PDF, then trigger the print dialog
  iframe.onload = function() {
    iframe.contentWindow.print();  // Trigger print dialog
  };
}


async function loadAndFillPdf(pdfjsLib, pdfPath, gristData) {
  const settings = {};
  for (const gd of gristData) {
    settings[gd.Identifier] = gd;
  }
  try {
    // Fetch the PDF file and convert it to an ArrayBuffer
    const response = await fetch(pdfPath);
    if (!response.ok) {
      throw new Error(`Failed to load PDF: ${response.statusText}`);
    }
    const pdfBuffer = await response.arrayBuffer();
    const pdfDoc = await PDFLib.PDFDocument.load(pdfBuffer);
    const form = pdfDoc.getForm();
    for (const f of document.allFields) {
      const field1 = form.getField(f.FieldName);
      const fieldName = f.FieldName;
      const gd1 = settings[f.FieldName];
      if (field1 instanceof PDFLib.PDFTextField) {
        if (showLabels) {
          try {
            field1.setText(fieldName);
          } catch (e) {
            field1.setText('!');
            console.log("!!!!", fieldName);
          }
        } else {
          if (gd1) {
            field1.setText(gd1.Text);
          }
        }
      } else if (field1 instanceof PDFLib.PDFCheckBox) {
        const options = f.FieldStateOption.length - 1;
        let choice = -1;
        if (gd1 && gd1.Option_Number !== null) {
          choice = gd1.Option_Number;
        }
        if (options > 0) {
          if (choice === -1) {
            field1.uncheck();
          } else {
            field1.check(choice);
          }
        } else {
          field1.uncheck();
        }
      } else if (field1 instanceof PDFLib.PDFRadioGroup) {
        throw new Error('unsupported radio group');
        // field1.select(f.FieldStateOption[f.FieldStateOption-1]);
      } else if (field1 instanceof PDFLib.PDFButton) {
        // ignore buttons
      } else {
        console.log(`${fieldName} is of unknown type.`);
      }
    }
    const outBuffer = await pdfDoc.save();

    printable = outBuffer;

    const blob = new Blob([outBuffer], { type: 'application/pdf' });
    const pdfUrl = window.URL.createObjectURL(blob);

    // Use PDF.js to render the PDF
    const pdfViewer = document.getElementById('pdfViewer');

    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.7.76/build/pdf.worker.mjs';
    const loadingTask = pdfjsLib.getDocument(pdfUrl).promise;
    const pdf = await loadingTask;
    
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    pdfViewer.innerHTML = '';
    pdfViewer.appendChild(canvas);
      
    // Render PDF page into canvas context
    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);
  } catch (error) {
    console.error('Error processing the PDF:', error);
  }
}

function fly(pdfjsLib) {
  // Usage example
  const names = document.allFields.map(f => f.name);
  function fieldVal(f) {
    switch (f.FieldType) {
    case 'Text':
      return 'meep';
    case 'Button':
      return f.FieldStateOption?.[0] || '??';
    default:
        return '??';
    }
  }
  const fill = Object.fromEntries(
    document.allFields.map(f => [f.FieldName, [fieldVal(f)]])
  );
  grist.onRecords((data) => {
    currentData = data;
    currentLib = pdfjsLib;
    changeOptions();
  });
  grist.ready();
}

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


ready(() => {  
  document.getElementById('print-button').addEventListener('click', function() {
    printPdf();
  });
  // Add event listeners to the checkboxes
  document.getElementById('background-show').addEventListener('change', function() {
    changeOptions();
  });
  document.getElementById('labels').addEventListener('change', function() {
    changeOptions();
  });
});

