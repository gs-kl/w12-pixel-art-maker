var cells = document.querySelectorAll("#grid .row div");
var paletteCells = document.querySelectorAll("#palette .row div");
var colorDisplays = document.querySelectorAll(".color-display");


var backgroundColor = "white";
var paintbrushColor = "white";





var paintbrushColorDisplay = document.querySelector("#paintbrush-color");
var backgroundColorDisplay = document.querySelector("#background-color");

var colorDisplaySelected = paintbrushColorDisplay;





paintbrushColorDisplay.onclick = selectPaintbrushColorDisplay;
backgroundColorDisplay.onclick = selectBackgroundColorDisplay;



function selectPaintbrushColorDisplay(){
  if (this.className.indexOf("selected") === -1){
    this.className = this.className + " selected";
    colorDisplaySelected = paintbrushColorDisplay;
    unselect(backgroundColorDisplay);
  }
}

function selectBackgroundColorDisplay(){
  if (this.className.indexOf("selected") === -1){
    this.className = this.className + " selected";
    colorDisplaySelected = backgroundColorDisplay;
    unselect(paintbrushColorDisplay);
  }
}

function unselect(colorDisplay){
  if (colorDisplay.className.indexOf("selected") !== -1){
    colorDisplay.className = colorDisplay.className.replace("selected", "");
  }
}




for (var i = 0; i < cells.length; i++){
  cells[i].onclick = colorCell;
}


function colorCell(){
  if (colorDisplaySelected === paintbrushColorDisplay){
    if (((this.className).indexOf("colored")) === -1) {
      this.className = this.className + " colored";
      this.style.backgroundColor = paintbrushColor;
    } else if (this.style.backgroundColor !== paintbrushColor){
      this.style.backgroundColor = paintbrushColor;
    } else {
      var currentClasses = this.className;
      var newCurrentClasses = currentClasses.replace("colored", "");
      this.className = newCurrentClasses;
      this.style.backgroundColor = backgroundColor;
    }
  }
}


function fillPalette(){
  var colors = ["white", "black", "red", "yellow", "blue", "coral", "purple", "chocolate", "green"];
  for (var i = 0; i < paletteCells.length; i++){
    paletteCells[i].style.backgroundColor = colors[i];
    paletteCells[i].onclick = function(){
      if (colorDisplaySelected === paintbrushColorDisplay){
        paintbrushColor = this.style.backgroundColor;
        paintbrushColorDisplay.style.backgroundColor = this.style.backgroundColor;
      } else {
        backgroundColor = this.style.backgroundColor;
        backgroundColorDisplay.style.backgroundColor = this.style.backgroundColor;
        for (var i = 0; i < cells.length; i++){
          if (cells[i].className.indexOf("colored") === -1){
            cells[i].style.backgroundColor = backgroundColor;
          }
        }
      }
    }
  }
}





fillPalette();
