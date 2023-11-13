"use strict";
const colorPalette = document.getElementById("colorPalette");

const textToChange = document.getElementById("textToChange");

colorPalette.addEventListener("click", (event) => {
  if (event.target.classList.contains("color-cell")) {
    const selectedColor = event.target.getAttribute("data-color");
    textToChange.style.color = selectedColor;
  }
});
