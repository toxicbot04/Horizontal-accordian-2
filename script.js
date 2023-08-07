document.addEventListener("DOMContentLoaded", function () {
 const boxes = document.querySelectorAll(".box");
 boxes.forEach(function (box) {
  const img = box.querySelector("img");
  img.addEventListener("click", function () {
   boxes.forEach(function (otherBox) {
    if (otherBox !== box) {
     otherBox.classList.remove("open");
    }
   });
   box.classList.toggle("open");
  });
 });
});
