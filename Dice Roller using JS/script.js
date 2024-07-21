
function rollDice(){

    const diceNum = document.getElementById("diceNum").value;
    const rollDice = document.getElementById("rollDice");
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i=0; i<diceNum ;i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Dice_images/${value}.png">`);
    }

    diceResult.textContent = "Dice: " + values.join(", ");
    diceImages.innerHTML = images.join(" ");
}