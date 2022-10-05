//生成div
for (let i = 1; i <= 15; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  document.querySelector(".container").appendChild(box);
}

//隨機生成顏色
let btn = document.querySelector("button");
let randomColorBlock = document.querySelectorAll(".box");

function randomColorCode() {
  let chars, colorLength, color;
  chars = "0123456789abcdef";
  colorLength = 6;
  color = "";

  for (let i = 0; i < colorLength; i++) {
    let randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }

  return "#" + color;
}

function addColor() {
  randomColorBlock.forEach((e) => {
    let newColor = randomColorCode();
    e.style.backgroundColor = newColor;
    e.innerHTML = newColor;
  });
}
