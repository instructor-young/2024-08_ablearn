const pikachu = document.getElementById("pikachu");
const distanceUnit = 30;

document.addEventListener("keydown", (e) => {
  const key = e.code;

  if (key.includes("Arrow")) {
    const direction = key.replace("Arrow", "").toLowerCase();
    move(direction);
  } else if (key === "Space") {
    jump();
  }
});

function move(direction) {
  const currentTop = Number(pikachu.style.top.replace("px", ""));
  const currentLeft = Number(pikachu.style.left.replace("px", ""));

  if (direction === "up" && currentTop > 0) {
    pikachu.style.top = currentTop - distanceUnit + "px";
  } else if (direction === "down" && currentTop < 270) {
    pikachu.style.top = currentTop + distanceUnit + "px";
  } else if (direction === "left" && currentLeft > 0) {
    pikachu.style.left = currentLeft - distanceUnit + "px";
    pikachu.style.transform = "rotateY(180deg)";
  } else if (direction === "right" && currentLeft < 270) {
    pikachu.style.left = currentLeft + distanceUnit + "px";
    pikachu.style.transform = "rotateY(0deg)";
  }
}

function jump() {
  const currentTop = Number(pikachu.style.top.replace("px", ""));
  if (currentTop === 0) return;

  pikachu.style.top = currentTop - 15 + "px";

  setTimeout(() => {
    pikachu.style.top = currentTop + "px";
  }, 200);
}
