let Words = [
  "I love you so much",
  "What is this ?",
  "Yeah I know him",
  "Ok let's go",
  "Yes I am",
  "Lmao you are so funny",
  "Click that button",
  "Dog",
  "Why",
  "WHAT",
];
let random = Math.floor(Math.random() * Words.length);

let timerHTML = document.getElementById("time_Set");
// let timerStop = document.getElementById("btn_Stop");
let startButton = document.getElementById("btn_Start");
let noti = document.getElementById("notification");
let timerRestart = document.getElementById("btn_Restart");
let placeWords = document.getElementById("place_Word");
let scoreBoard = document.getElementById("number_Score");
let Input = document.getElementById("input_Word");

let randomWord = Words[random];
placeWords.innerHTML = randomWord;
let Score = 0;
startButton = 0;

function startGame(){
  startButton = setInterval(Timer, 1000);
}
startButton.addEventListener("click", Timer);

function addScore() {
  randomWord = Words[Math.floor(Math.random() * Words.length)];
  placeWords.innerHTML = randomWord;
  scoreBoard.innerHTML = "" + Score;
  Input.value = "";
  if (timerHTML.innerHTML <= 0){
    stopScore();
  }
}

function stopScore() {
  placeWords.innerHTML = "";
  scoreBoard.innerHTML = "" + Score;
  
}

function subScore() {
  randomWord = Words[Math.floor(Math.random() * Words.length)];
  placeWords.innerHTML = randomWord;
  scoreBoard.innerHTML = Score;
  Input.value = "";
  if (timerHTML.innerHTML <= 0){
    stopScore();
  }
}


function Timer() {
  startGame();
  
  if (timerHTML.innerHTML <= 0) {
    //het tg thi reset
    timeStop();
  } else {
    //Chưa hết thì vẫn đếm ngược
    timerHTML.innerHTML = parseInt(timerHTML.innerHTML) - 1;
  }
}

function timeStop() {
  clearInterval(Timer)
  timerHTML.innerHTML = 0;
  noti.innerHTML = "HET THOI GIAN!";
  Input.value = "";
  window.addEventListener('keydown', event => {
    console.log(`User pressed: ${event.key}`);
    event.preventDefault(key);
    return false;
  });
  document.getElementById('input_Word').readOnly = true;
  placeWords.innerHTML="";
}

function timeReset() {
  Score = 0
  scoreBoard.innerHTML = "" + Score;
  noti.innerHTML = "";
  document.getElementById('input_Word').readOnly = false;
  document.getElementById('place_Word').disabled = false;
  randomWord = Words[Math.floor(Math.random() * Words.length)];
  placeWords.innerHTML = randomWord;
  timerHTML.innerHTML = 10;
}
timerRestart.addEventListener("click", timeReset);

Input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (Input.value != randomWord) {
      Score--;
      if(timerHTML.innerHTML<=0){
       return Score;
      }
      else if (Score <= 0) {
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
