/* --------------------------------------
Export First Chapter PDF
by Aaron Troia (@atroia)
Modified Date: 09/24/25

Description: 
Export a PDF page range, or just 10 pages.
For Publishing I use it for printing first chapters of books.
-------------------------------------- */

var d = app.activeDocument;
app.pdfExportPreferences.viewPDF = false;
var preset = app.pdfExportPresets.itemByName("First Chapter");
var lastPg;

// EXPORTCH1
// =========
var ExportCh1 = new Window("dialog"); 
    ExportCh1.text = "Export Chapter 1"; 
    ExportCh1.orientation = "column"; 
    ExportCh1.alignChildren = ["center","top"]; 
    ExportCh1.spacing = 10; 
    ExportCh1.margins = 16; 

// GROUP1
// ======
var group1 = ExportCh1.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

var pgStartRange = group1.add("statictext", undefined, undefined, {name: "pgStartRange"}); 
    pgStartRange.text = "Chapter Start:"; 

var pgStart = group1.add('edittext {properties: {name: "pgStart"}}'); 
    pgStart.preferredSize.width = 101; 
    pgStart.alignment = ["left","center"]; 

// GROUP2
// ======
var group2 = ExportCh1.add("group", undefined, {name: "group2"}); 
    group2.orientation = "row"; 
    group2.alignChildren = ["left","center"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

var pgEndRange = group2.add("statictext", undefined, undefined, {name: "pgEndRange"}); 
    pgEndRange.text = "Chapter End:"; 

var pgEnd = group2.add('edittext {properties: {name: "pgEnd"}}'); 
    pgEnd.enabled = true;
    pgEnd.preferredSize.width = 101; 
    pgEnd.alignment = ["left","center"]; 

// GROUP3
// ======
var group3 = ExportCh1.add("group", undefined, {name: "group3"}); 
    group3.orientation = "row"; 
    group3.alignChildren = ["left","center"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

var tenPgs = group3.add("checkbox", undefined, undefined, {name: "tenPgs"}); 
    tenPgs.text = "Only Print 10 pages"; 
    tenPgs.onClick = function(){
        if(this.value == true) {
          pgEnd.enabled = false;
          pgEnd.refresh();
        } else if(this.value == false) {
          pgEnd.enabled = true;
          pgEnd.refresh();
        }
    }

// GROUP4
// ======
var group4 = ExportCh1.add("group", undefined, {name: "group4"}); 
    group4.orientation = "row"; 
    group4.alignChildren = ["left","center"]; 
    group4.spacing = 10; 
    group4.margins = 0; 

var btnCancel = group4.add("button", undefined, undefined, {name: "btnCancel"}); 
    btnCancel.text = "Cancel"; 

var btnOK = group4.add("button", undefined, undefined, {name: "btnOK"}); 
    btnOK.text = "Ok"; 
    btnOK.onClick = function(){
      exportPDF();
      exit();
    };

ExportCh1.show();



function exportPDF() {
  if (!(preset.isValid)) {
    alert(
      "One of the presets does not exist. Please check spelling carefully."
    );
    exit();
  }

  if (d.saved) {
    var thePath = String(d.fullName).replace(/\..+$/, "") + ".pdf";
    thePath = String(new File(thePath)); //.saveDlg()
    if (thePath == null) {
      alert ("You pressed Cancel!");
      exit();
    }
  } else {
    thePath = String(new File()); //.saveDlg()
    if (thePath == null){
      alert ("You pressed Cancel!");
      exit();
    }
  }

  thePath = thePath.replace(/\.pdf$/, "");
  thePath2 = thePath.replace(/(\d+b|\.pdf$)/, "");
  CHAPTER = thePath2 + "_ch1.pdf"; // Spreads PDF

  try {
    if (pgStart.text != 0 || pgStart.text == null) {
        if (tenPgs.value == true){
            // if you want to change the range, change lastPg added number
            lastPg = Number(pgStart.text) + 10; // pgStart needs to be converted to a Number to do addition
            app.pdfExportPreferences.pageRange = pgStart.text + "-" + lastPg;
            app.activeDocument.layers.item("Bookline").visible = false; // turn off Bookine layer (if it is visible) for single page export
            pdfExport(CHAPTER, preset);
            progressBar(lastPg);
            alert("Your first Chapter PDF is finished.");
        } else if (tenPgs.value == false) {
            app.pdfExportPreferences.pageRange = pgStart.text + "-" + pgEnd.text;
            app.activeDocument.layers.item("Bookline").visible = false; // turn off Bookine layer (if it is visible) for single page export
            pdfExport(CHAPTER, preset);
            progressBar(pgEnd.text);
            alert("Your first Chapter PDF is finished.");
        }
    } else {
        alert("Your start page number is blank.");
        exit();
    }
  } catch (errExport) {
    // alert('ERROR: The PDF file is either selected or open.');
    alert(errExport.description);
  }
}

function pdfExport(ext, pre){
  d.asynchronousExportFile(ExportFormat.PDF_TYPE, new File(ext), false, pre);
}


function progressBar(stop) {
  var w = new Window ('palette');
  var docLength;
  if (stop == lastPg) {
    docLength = (lastPg - pgStart.text) - 1;
  } else if (stop == pgEnd.text) {
    docLength = (pgEnd.text - pgStart.text) - 1;
  }
  w.pbar = w.add ('progressbar', undefined, 0, docLength);
  w.pbar.preferredSize.width = 300;
  w.show();
  for (var i = 0; i < docLength.length; i++){
    w.pbar.value = i+1;
    $.sleep(20); // Do something useful here
  }
}