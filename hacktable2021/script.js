var item = document.querySelectorAll(".item");
var item1 = document.querySelector(".item");
var toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  if (item1.classList.contains("active")) {
    for (var i = 0; i < item.length; i++) {
      item[i].classList.remove("active");
    }
  } else {
    for (var i = 0; i < item.length; i++) {
      item[i].classList.add("active");
    }
  }
});
