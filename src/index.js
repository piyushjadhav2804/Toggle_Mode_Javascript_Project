import "./styles.css";

var toggle = document.querySelectorAll("div");

toggle[2].addEventListener("click", function () {
  if (toggle[2].id === "circle") {
    toggle[1].id = "toggle-end";
    toggle[2].id = "circle-end";
    toggle[1].style.backgroundColor = "white";
    document.getElementById("h1").style.color = "white";
    document.body.style.backgroundColor = "black";
  } else {
    toggle[1].id = "toggle";
    toggle[2].id = "circle";
    document.getElementById("h1").style.color = "black";
    document.body.style.backgroundColor = "white";
  }
});
