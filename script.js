var cells = document.querySelectorAll("#grid .row div");
var paletteCells = document.querySelectorAll("#palette .row div");

var gridBackgroundColor = "white";
var paintbrushColor = "black";


for (var i = 0; i < cells.length; i++){
  cells[i].onclick = colorCell;
}


function colorCell(){
  if (((this.className).indexOf("colored")) !== -1){
    var currentClasses = this.className;
    var newCurrentClasses = currentClasses.replace("colored", "");
    this.className = newCurrentClasses;
    this.style.backgroundColor = gridBackgroundColor;
  } else {
    this.className = this.className + " colored";
    this.style.backgroundColor = paintbrushColor;
  }
}


function fillPalette(){
  var colors = ["white", "black", "red", "yellow", "blue", "coral", "purple", "chocolate", "green"];
  for (var i = 0; i < paletteCells.length; i++){
    paletteCells[i].style.backgroundColor = colors[i];
    paletteCells[i].onclick = function(){
      paintbrushColor = this.style.backgroundColor;
    }
  }
}

fillPalette();
