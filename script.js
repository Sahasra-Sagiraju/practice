"use strict";

const links = document.querySelectorAll("link[title]");
console.log(links);

const activateCorrespondingStyleSheet = (styleSheetName) => {
  links.forEach((link) => {
    link.disabled = true;
    if (link.getAttribute("title") === styleSheetName) {
      link.disabled = false;
    }
  });
};

const selectStyleSheet = document.querySelector("select");
selectStyleSheet.addEventListener("change", () => {
  if (selectStyleSheet.value !== "default") {
    activateCorrespondingStyleSheet(selectStyleSheet.value);
  }
});
