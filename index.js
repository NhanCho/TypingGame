let Words =['the','bruh','yeah','ok','yes','lmao','button','dog','why','WHAT'];
let random = Math.floor((Math.random()*Words.length));

let timerHTML=document.getElementById('time_Set');
let timerStop=document.getElementById('btn_Stop');
let timerRestart=document.getElementById('btn_Restart');
let placeWords = document.getElementById('place_Word');
let scoreBoard = document.getElementById('number_Score');
let Input = document.getElementById('input_Word');

let randomWord = Words[random];
placeWords.innerHTML = randomWord;
let Score = 0;



function addScore(){
    randomWord = Words[Math.floor((Math.random()*Words.length))];
    placeWords.innerHTML = randomWord;
    scoreBoard.innerHTML = "" + Score;
    Input.value ="";
    // timerHTML.innerHTML=10;
}
function subScore(){
    randomWord = Words[Math.floor((Math.random()*Words.length))];
    placeWords.innerHTML = randomWord;
    scoreBoard.innerHTML = Score;
    Input.value ="";
}

setInterval(Timer,1000);
function Timer(){
    if (timerHTML.innerHTML <= 0){ //het tg thi reset
        alert("Het thoi gian");
        timeReset();
    } else {
        //Chưa hết thì vẫn đếm ngược
        timerHTML.innerHTML = parseInt(timerHTML.innerHTML) - 1;
    }
}

function timeReset(){
    Score=0;
    addScore();
    timerHTML.innerHTML=10;
}
timerRestart.addEventListener('click',timeReset);

Input.addEventListener('keyup',(event)=>{
    if (event.key==='Enter'){
        if(Input.value!=randomWord){
            Score--;
            if(Score<=0){
                Score=0;
            }
           subScore();
        }
        else {
            Score++;
            addScore();
        }
    }
});
// console.log(timerInterval)
// console.log(Score);
