/* Credit to Alastair Campbell for providing the basis of this script */


// Link up the cards

function linkBoxes() {
    var boxes = document.querySelectorAll("article.card");
  
    boxes.forEach(function (box) {
      var link = box.querySelector("a");
      if (link) {
        var url = link.getAttribute("href");
        box.addEventListener("click", function () {
          location.href = url;
          link.preventDefault;
        });
        box.classList.add("linkify");
        link.addEventListener("focus", function () {
          box.classList.add("isfocused");
        });
        link.addEventListener("blur", function () {
          box.classList.remove("isfocused");
        });
      }
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    if ("querySelector" in document) {
      linkBoxes();
    }
  });
  