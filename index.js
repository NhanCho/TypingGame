let Words = [
  "I love you so much",
  "What is this?",
  "Yeah I know him",
  "Ok let's go",
  "Yes I am",
  "You are so funny",
  "Click that button",
  "Dog",
  "Why are we here",
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
let timeStart = document.getElementById("btn_Start");
let placeWords = document.getElementById("place_Word");
let scoreBoard = document.getElementById("number_Score");
let Input = document.getElementById("input_Word");
let highScoreBoard = document.getElementById("high_Score");
let enterKey = document.getElementById("ENTER");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".modal_footer button");
let result = document.getElementById("result");

let randomWord = Words[random];
placeWords.innerHTML = randomWord;
let Score = 0;
let highScore = 0;
let maxScore = 0;

function startGame() {
  // timeStart = setInterval(Timer, 1000);
}
// timeStart.addEventListener("click", startGame);

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

startGame();
function Timer() {
  // document.timeStart.style.display ="none";
  if (timerHTML.innerHTML <= 0) {
    //het tg thi reset
    timeStop();
  } else {
    //Chưa hết thì vẫn đếm ngược
    timerHTML.innerHTML = parseInt(timerHTML.innerHTML) - 1;
  }
}

function timeStop() {
  clearInterval(Timer);
  result.innerHTML = "Điểm của bạn là: " + Score;
  modal.classList.remove("hide");
  Input.value = "";
  timerHTML.innerHTML = 0;
  document.getElementById("input_Word").readOnly = true;
  document.getElementById("ENTER").disabled = true;
}

function timeReset() {
  Score = 0;
  
  document.getElementById("input_Word").readOnly = false;
  addScore();
  timerHTML.innerHTML = 10;
}
timerRestart.addEventListener("click", timeReset);

Input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (Input.value != randomWord) {
      Score--;
      if (timerHTML.innerHTML <= 0) {
        return Score;
      } else if (Score <= 0) {
        Score = 0;
      }
      subScore();
    }else{
      Score++;
      highScore = Score;
      maxScore = Score >= highScore ? Score : highScore;
      addScore();
    }
  }
  return maxScore;
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

function toggleModal() {
  modal.classList.toggle("hide");
}

btnClose.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) {
    toggleModal();
    timeReset();
  }
});
