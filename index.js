let Words = [
  "the",
  "bruh",
  "yeah",
  "ok",
  "yes",
  "lmao",
  "button",
  "dog",
  "why",
  "WHAT",
  "HELLO",
  "HOW ARE YOU"
];
let random = Math.floor(Math.random() * Words.length);
let word1 = [
  "Tab",
  "Caps lock",
  "Shift",
  "Q",
  "A",
  "Z",
  "Y",
  "H",
  "N",
  "U",
  "J",
  "M",
];
let word2 = ["W", "S", "X", "E", "D", "C", "I", "K", ",", "O", "L", "."];
let word3 = [
  "R",
  "F",
  "V",
  "T",
  "G",
  "B",
  "P",
  ";",
  "]",
  "[",
  "/",
  "Enter",
  "'",
];

let timerHTML = document.getElementById("time_Set");
// let timerStop = document.getElementById("btn_Stop");
let timerRestart = document.getElementById("btn_Restart");
let placeWords = document.getElementById("place_Word");
let scoreBoard = document.getElementById("number_Score");
let Input = document.getElementById("input_Word");
let highScoreBoard = document.getElementById("high_Score");

let randomWord = Words[random];
placeWords.innerHTML = randomWord;
let Score = 0;
let highScore = 0;
let maxScore = 0;

function addScore() {
  randomWord = Words[Math.floor(Math.random() * Words.length)];
  placeWords.innerHTML = randomWord;
  scoreBoard.innerHTML = "" + Score;
  Input.value = "";
  highScoreBoard.innerHTML = "" + maxScore;
  // timerHTML.innerHTML=10;
}
function subScore() {
  randomWord = Words[Math.floor(Math.random() * Words.length)];
  placeWords.innerHTML = randomWord;
  scoreBoard.innerHTML = Score;
  Input.value = "";
}

setInterval(Timer, 1300);
function Timer() {
  if (timerHTML.innerHTML <= 0) {
    //het tg thi reset
    // alert("Het thoi gian");
    timeStop();
  } else {
    //Chưa hết thì vẫn đếm ngược
    timerHTML.innerHTML = parseInt(timerHTML.innerHTML) - 1;
  }
}

function timeStop() {
  clearInterval(Timer);
  modal.classList.remove("hide");
  timerHTML.innerHTML = 0;
  document.getElementById("input_Word").readOnly = true;
}

function timeReset() {
  Score = 0;
  document.getElementById("input_Word").readOnly = false;
  addScore();
  timerHTML.innerHTML = 20;
}
timerRestart.addEventListener("click", timeReset);

Input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (Input.value != randomWord) {
      Score--;
      if (Score <= 0) {
        Score = 0;
      }
      subScore();
    } else {
      Score++;
      highScore = Score;
      maxScore = (Score >= highScore) ? Score : highScore;
      addScore();
    }
  }
});

function handleKeyDown(key) {
  //Tao tempKey voi key duoc bien doi thanh chu viet hoa
  const tempKey = key.toUpperCase();
  //META la nut window
  if (
    tempKey === " " ||
    tempKey === "CONTROL" ||
    tempKey === "ALT" ||
    tempKey === "META"
  ) {
    return; //Ne cac truong hop bam nut dac biet
  }
  //lay trang thai cua tempKey (da duoc in hoa)
  let keyElement = document.getElementById(tempKey);
  console.log(keyElement);
  const key_text = keyElement.textContent;
  console.log(key_text);

  //add class Click
  if (word1.includes(key_text)) keyElement.classList.add("Click1");

  if (word2.includes(key_text)) keyElement.classList.add("Click2");

  if (word3.includes(key_text)) keyElement.classList.add("Click3");

  //bo class Click
  const handleKeyUp = () => {
    if (word1.includes(key_text)) keyElement.classList.remove("Click1");

    if (word2.includes(key_text)) keyElement.classList.remove("Click2");

    if (word3.includes(key_text)) keyElement.classList.remove("Click3");
    window.removeEventListener("keyup", handleKeyUp);
  };

  window.addEventListener("keyup", handleKeyUp);
}

window.addEventListener("keydown", ({ key }) => {
  handleKeyDown(key);
});

let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".modal_footer button");

function toggleModal() {
  modal.classList.toggle("hide");
}

btnClose.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) {
    toggleModal();
    timeReset();
  }
});
