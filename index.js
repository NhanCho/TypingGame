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
];
let random = Math.floor(Math.random() * Words.length);

let timerHTML = document.getElementById("time_Set");
// let timerStop = document.getElementById("btn_Stop");
let noti = document.getElementById("notification");
let timerRestart = document.getElementById("btn_Restart");
let placeWords = document.getElementById("place_Word");
let scoreBoard = document.getElementById("number_Score");
let Input = document.getElementById("input_Word");

let randomWord = Words[random];
placeWords.innerHTML = randomWord;
let Score = 0;

function addScore() {
  randomWord = Words[Math.floor(Math.random() * Words.length)];
  placeWords.innerHTML = randomWord;
  scoreBoard.innerHTML = "" + Score;
  Input.value = "";
  // timerHTML.innerHTML=10;
}
function subScore() {
  randomWord = Words[Math.floor(Math.random() * Words.length)];
  placeWords.innerHTML = randomWord;
  scoreBoard.innerHTML = Score;
  Input.value = "";
}

setInterval(Timer, 1000);
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
  clearInterval(Timer)
  timerHTML.innerHTML = 0;
  noti.innerHTML = "HET THOI GIAN!"
  document.getElementById('input_Word').readOnly = true;
}

function timeReset() {
  Score = 0;
  noti.innerHTML = ""
  document.getElementById('input_Word').readOnly = false;
  addScore();
  timerHTML.innerHTML = 10;
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
      addScore();
    }
  }
});

function handleKeyDown(key) {
  //Tao tempKey voi key duoc bien doi thanh chu viet hoa
  const tempKey = key.toUpperCase();
  //META la nut window
  if (tempKey === " " || tempKey === "CONTROL" || tempKey === "ALT" || tempKey === "META") {
    return; //Ne cac truong hop bam nut dac biet
  }
  //lay trang thai cua tempKey (da duoc in hoa)
  let keyElement = document.getElementById(tempKey);
  console.log(keyElement);
  //add class Click
  keyElement.classList.add("Click");
  //bo class Click
  const handleKeyUp = () => {

    keyElement.classList.remove("Click");
    window.removeEventListener("keyup", handleKeyUp);
  };
  window.addEventListener("keyup", handleKeyUp);
}
window.addEventListener("keydown", ({ key }) => {
  handleKeyDown(key);
});
// console.log(timerInterval)
// console.log(Score);
