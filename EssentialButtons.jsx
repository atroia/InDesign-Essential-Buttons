/* --------------------------------------
Essential Buttons
by Aaron Troia (@atroia)
Modified Date: 10/6/25

Description: 
Buttons that run or open different scripts.
This script taught me onClick() and how to run other JS files from one JS file.
UI exported from scriptui.joonas.me
-------------------------------------- */

#targetengine "palette";

var d = app.activeDocument;

// Call scripts to run
var NoteNavigator = File("/Users/aartro/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/___UsedOften___/NoteNavigator.jsx");
var Stylighter = File("/Users/aartro/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/___UsedOften___/StyLighter14.jsx");
var Bookline = File("/Users/aartro/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/___UsedOften___/bookline.js");
var TextThreads = File("/Users/aartro/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/___UsedOften___/_Show Text Threads_.jsx");
var BaselineGrid = File("/Users/aartro/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/___UsedOften___/_Show Baseline Grid_.jsx");
var BaselineGrid2 = File("/Users/aartro/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/___UsedOften___/setUpBaselineGrid.jsx");
var Prefs = File("/Users/aartro/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/___UsedOften___/__Preferences__.jsx");
var Bleed = File("/Users/aartro/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/___UsedOften___/addBleed.jsx");
var Endnotes = File("/Users/aartro/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/___UsedOften___/_Word Import Static Endnotes_.jsx");
var Footnotes = File("/Users/aartro/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/___UsedOften___/_Footnote Options_.jsx");
var Variables = File("/Users/aartro/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/___UsedOften___/_Variables_.jsx");
var Ruler = File("/Users/aartro/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/___UsedOften___/_Points <--> Inches_.jsx");
var Cover1 = File("/Users/aartro/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/___UsedOften___/Export Book Cover > PS.jsx");
var Cover2 = File("/Users/aartro/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/___UsedOften___/Export PDF | IDML | JPG.jsx");
var firstChapter = File("/Users/aartro/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/___UsedOften___/_FirstChapter_.jsx");



// PALETTE
// =======
var palette = new Window("palette", undefined, undefined, {maximizeButton: false, minimizeButton:false, resizeable: false, independent: false, closeButton: false, borderless: true}); 
    palette.active = true;
    // palette.text = "Essentials"; 
    palette.orientation = "column"; 
    palette.alignChildren = ["center","top"]; 
    palette.spacing = 10; 
    palette.margins = 16; 


// SHOW
// ======
var panel1 = palette.add("panel", undefined, "Show"); 
    // panel1.text = "Show"; 
    panel1.orientation = "column"; 
    panel1.alignChildren = ["left","top"]; 
    panel1.spacing = 10; 
    panel1.margins = 10; 

var button1 = panel1.add("button",undefined, "Baseline Grid"); 
    button1.onClick = function() {
      // toggleBaselineGrid();
      $.evalFile(BaselineGrid);
    };

var button2 = panel1.add("button",undefined, "Text Threads"); 
    button2.onClick = function(){
      // showTextThreads();
      $.evalFile(TextThreads);
    };
    

// PREFERENCES
// ======
var panel2 = palette.add("panel",undefined, "Preferences"); 
    // panel2.text = "Preferences"; 
    panel2.orientation = "column"; 
    panel2.alignChildren = ["left","top"]; 
    panel2.spacing = 10; 
    panel2.margins = 10; 

var button3 = panel2.add("button",undefined, "Prefrences"); 
    button3.enabled = true;
    // button3.text = "Prefrences"; 
    button3.preferredSize.width = 106; 
    button3.onClick = function(){
      // prefs();
      $.evalFile(Prefs);
    };

var button4 = panel2.add("button",undefined, "Footnotes"); 
    // button4.text = "Footnotes"; 
    button4.preferredSize.width = 106; 
    button4.onClick = function(){
      // footnoteOptions();
      $.evalFile(Footnotes);
    };

var button5 = panel2.add("button",undefined, "Variables"); 
    // button5.text = "Variables"; 
    button5.preferredSize.width = 106; 
    button5.onClick = function(){
      // variables();
      $.evalFile(Variables);
    };

var button6 = panel2.add("button",undefined, "Word Import"); 
    // button6.text = "Word Import"; 
    button6.preferredSize.width = 106; 
    button6.onClick = function(){
      // importStaticEndnotes();
      $.evalFile(Endnotes);
    };

var button7 = panel2.add("button",undefined, "Ruler (pts/In)"); 
    button7.onClick = function(){
      // swapUnits();
      $.evalFile(Ruler);
    };

var bleed = panel2.add("button",undefined, "Add Bleed"); 
    bleed.preferredSize.width = 106; 
    bleed.onClick = function(){
      // swapUnits();
      $.evalFile(Bleed);
    };


// SCRIPTS
// ======
var panel3 = palette.add("panel",undefined, "Scripts"); 
    panel3.text = "Scripts"; 
    panel3.orientation = "column"; 
    panel3.alignChildren = ["left","top"]; 
    panel3.spacing = 10; 
    panel3.margins = 10;


var button8 = panel3.add("button",undefined, "Bookline"); 
    button8.preferredSize.width = 106;
    button8.onClick = function(){
      toggleBookline();
      button8.refresh();
    }; 

var button10 = panel3.add("button",undefined, "NoteNav"); 
    button10.preferredSize.width = 106; 
    button10.onClick = function(){
      $.evalFile(NoteNavigator);
    };

var button11 = panel3.add("button",undefined, "Stylighter"); 
    button11.preferredSize.width = 106; 
    button11.onClick = function(){
      $.evalFile(Stylighter);
    };

var button9 = panel3.add("button",undefined, "Baseline Grid"); 
    button9.preferredSize.width = 106; 
    button9.onClick = function() {
      $.evalFile(BaselineGrid2);
    };


// Export
// ======
var panel5 = palette.add("panel",undefined, "Export"); 
    panel5.orientation = "column"; 
    panel5.alignChildren = ["center","top"]; 
    panel5.spacing = 10; 
    panel5.margins = 10;

var export2 = panel5.add("button",undefined, "PDFs + IDML"); 
    export2.preferredSize.width = 106; 
    export2.onClick = function() {
      $.evalFile(Cover2);
    };

var export1 = panel5.add("button",undefined, "Book Cover"); 
    export1.preferredSize.width = 106; 
    export1.onClick = function() {
      $.evalFile(Cover1);
    };

var export3 = panel5.add("button",undefined, "First Chapter"); 
    export3.preferredSize.width = 106; 
    export3.onClick = function() {
      $.evalFile(firstChapter);
    };


// CANCEL
// ======
var panel4 = palette.add("panel",undefined, undefined, {borderStyle:'none', borderless: true}); 
    panel4.orientation = "column"; 
    // panel4.borderStyle = 'none';
    panel4.alignChildren = ["center","top"]; 
    panel4.spacing = 10; 
    panel4.margins = 0;

var btnCancel = panel4.add("button", undefined, "Close"); 
    btnCancel.preferredSize.width = 106; 
    btnCancel.text = "Close"; 
    btnCancel.onClick = function(){
      // exit();
      palette.close();
    };
   


main();


function main(){
  try{
    if (app.documents.length == 0) {
      alert("No documents are open.");
    } else {
      while (ScriptUI.environment.keyboardState.keyName == "Escape"){ palette.close()};
      showPalette();
    }
  } catch(e){
    alert(e);
  }
}


function showPalette(){
  isDone = false;
  palette.onClose = function(){
      return isDone = true;
  };
  palette.show();
  while (isDone === false) {
      try{
          app.refresh();
      } catch(e){
          isDone = true;
      };
  }
}

function toggleAdobeFonts(){
  app.fontSyncPreferences.autoActivateFont = false;
}


function toggleBookline(){
  if (d.layers.item("Bookline").isValid == true) { // IF BOOKLINE EXISTS, TOGGLE LAYER
      if (d.layers.item("Bookline").visible == true) {
        d.layers.item("Bookline").visible = false;
        alert("Bookline is Off");
        exit();
      } else if (d.layers.item("Bookline").visible == false) {
        d.layers.item("Bookline").visible = true;
        alert("Bookline is On");
        exit();
      }
   } else if (app.activeDocument.layers.item("Bookline").isValid == false) {
      // bookline();
      $.evalFile(Bookline);
   }
}

function writetofile(){
  //Define path and file name
  var path = '~/Documents/';
  var filename = 'filename.txt';

  //Create File object
  var file = new File(path + filename);

  file.encoding = 'UTF-8';
  file.open('w');
  file.write('data here');
  file.close();
}

//https://indiscripts.com/post/2018/12/note-on-scriptui-mouse-events
