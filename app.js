// selecting element
const hexnumber = document.querySelector("#hex-num");
const btn = document.querySelector(".btn");

// hex color characters
let hex = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

btn.addEventListener("click", () => {
  let hexOne = "#";
  for (let i = 0; i < 6; i++) {
    hexOne += hex[random()];
    document.body.style.backgroundColor = hexOne;
    hexnumber.textContent = hexOne;
  }
});

// random number generator

const random = () => {
  return Math.floor(Math.random() * hex.length);
};
