//counter variable 
let count = 0;

//assigning buttons to variables
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

//assigning counter to a variable
let counter = document.getElementById("counter");

//increase counter func
increaseBtn.onclick = function(){
    count++;
    document.getElementById("counter").textContent = count;
}

//decrease counter func
decreaseBtn.onclick = function(){
    count--;
    document.getElementById("counter").textContent = count;
}

//reset counter func
resetBtn.onclick = function(){
    count = 0;
    document.getElementById("counter").textContent = count;
}


