
function updateClock(){
    const date = new Date();
    let hours = date.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);
    
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;
}

updateClock();

setInterval(updateClock,1000);