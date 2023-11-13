"use strict";

function addColorBlock() {
  var colorBlock = document.createElement("div");
  colorBlock.className = "color-block";

  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  colorBlock.style.backgroundColor = randomColor;

  var block__color = document.querySelector(".block__color");
  block__color.appendChild(colorBlock);

  colorBlock.onclick = function () {
    block__color.removeChild(colorBlock);
  };
}
