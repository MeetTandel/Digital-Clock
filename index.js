// DOM Manipulation
const currentTimeDiv = document.querySelector("#screen");
const currentDateDiv = document.querySelector("#date");

// set current time
function currentTime(){
    let currTime = new Date().toLocaleTimeString('en-IT', {hour12: false});
    currentTimeDiv.innerText = `${currTime}`;
} 
let increment = setInterval(currentTime, 1000);

//start time when start button is pressed
function startButton(){
    increment = setInterval(currentTime, 1000);
}

//stop the time when stop button is pressed
function stopButton(){
    clearInterval(increment);
}

//display the date
let today = new Date();
let date = `${today.getDate()} / ${today.getMonth() + 1} / ${today.getFullYear()}`;
currentDateDiv.innerText = `${date}`;
