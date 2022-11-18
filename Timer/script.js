const timerText = document.getElementById("timer");
const btn = document.getElementById("btn");

let count = 0;

btn.onclick = increment;


function increment(){
    setInterval(function(){
        count += 1;
        timerText.textContent = count;
    }, 1000);
}


