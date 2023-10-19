// Iteration 2: Generate 2 random number and display it on the screen
// math.random low 0 high<1

var num1;
var num2;

let num1_box = document.getElementById("number1");
let num2_box = document.getElementById("number2");

num1_box.textContent = num1;
num2_box.textContent = num2;

function generateRandomNumber() {
  num1 = Math.floor(Math.random() * 100);
  num2 = Math.floor(Math.random() * 100);

  num1_box.textContent = num1;
  num2_box.textContent = num2;
}
generateRandomNumber();
// Iteration 3: Make the options button functional
let score = 0;

let greater_than = document.getElementById("greater-than");
let equal_to = document.getElementById("equal-to");
let lesser_than = document.getElementById("lesser-than");

function update() {
  score++;
  clearInterval(interval);
  localStorage.setItem("score", score);
  startInterval();
}

greater_than.onclick = () => {
  if (num1 > num2) {
    update();
  } else {
    window.open("./gameover.html", "_self");
  }
  generateRandomNumber();
};
equal_to.onclick = () => {
  if (num1 == num2) {
    update();
  } else {
    window.open("./gameover.html", "_self");
  }
  generateRandomNumber();
};
lesser_than.onclick = () => {
  if (num1 < num2) {
    update();
  } else {
    window.open("./gameover.html", "_self");
  }
  generateRandomNumber();
};
// Iteration 4: Build a timer for the game
let time;
let timer_box = document.getElementById("timer");
timer_box.textContent = time;

let interval;
function startInterval() {
  time = 10;
  timer_box.textContent = time;
  interval = setInterval(() => {
    time--;
    timer_box.textContent = time;

    if (time == 0) {
      clearInterval(interval);
      (location.href = "./gameover.html"), "_self";
    }
  }, 1000);
}
startInterval();
localStorage.setItem("score", score);
