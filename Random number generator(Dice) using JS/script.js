document.addEventListener('DOMContentLoaded',function(){

    const diceButton = document.getElementById("myBtn");
    const diceResult = document.getElementById("result");
    let rotation = 0;

    diceButton.addEventListener('click',function(){
        
        diceResult.textContent = Math.floor(Math.random()*6) + 1;
        rotation += 360;
        diceButton.style.transform = `rotate(${rotation}deg)`;
    });
});


