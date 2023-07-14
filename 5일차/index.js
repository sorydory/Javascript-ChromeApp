const bd = document.querySelector("body");
const title = document.querySelector("body h1");

title.style.color = "white";

function handleResize() {
  const size = window.innerWidth;

  if (size >= 700) {
    bd.style.backgroundColor = "orange";
  } else if (size < 700 && size > 400) {
    bd.style.backgroundColor = "purple";
  } else {
    bd.style.backgroundColor = "skyblue";
  }
}

window.addEventListener("resize", handleResize);
