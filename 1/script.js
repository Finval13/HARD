"use strict";

class Counter {
  constructor(minusSelector, plusSelector, countSelector) {
    this.minusButton = document.querySelector(minusSelector);
    this.plusButton = document.querySelector(plusSelector);
    this.countElement = document.querySelector(countSelector);
    this.count = 1;
  }

  init() {
    this.updateCount();

    this.plusButton.addEventListener("click", () => {
      this.count++;
      this.updateCount();
    });

    this.minusButton.addEventListener("click", () => {
      if (this.count > 1) {
        this.count--;
        this.updateCount();
      }
    });
  }

  updateCount() {
    this.countElement.textContent = this.count;
  }
}

const counter = new Counter(".arrowMinus", ".arrowPlus", ".count");
counter.init();
