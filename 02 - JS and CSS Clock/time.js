

function move() {
    const now = new Date();
    let handList = document.querySelectorAll('.hand');
    let hour = handList[0];
    let min = handList[1];
    let second = handList[2];
    

    let hourTime = now.getHours();
    let minTime = now.getMinutes();
    let secTime = now.getSeconds();

   

    let hourDeg = (hourTime-12)*30;
    let minDeg = minTime*6;
    let secDeg = secTime*6;

    let currentTransform = hour.style.transform; // "rotate(30deg)"
    hour.style.transform = `rotate(${90 + hourDeg}deg)`;
    min.style.transform = `rotate(${90 + minDeg}deg)`;
    second.style.transform = `rotate(${90 + secDeg}deg)`;
    // hour.classList.replace()
    
}

setInterval(move, 1000);
move();
