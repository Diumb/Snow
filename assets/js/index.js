// Canvas Variables

const canvas = document.querySelector(".snow__canvas"),
      ctx = canvas.getContext("2d");

// Animation Variables

let cordArray = [];

let settings = {
    isAnimation: true,
    startAnimation: 0,
    animation: null,
};

// Canvas Settings

canvas.width = document.documentElement.offsetWidth;
canvas.height = document.documentElement.offsetHeight;

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
      
// Functions

function randomInt(min, max) {
    return Math.round(min + Math.random() * (max - min));
}

function snowAnimation(array) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    array.forEach(item => {
        drawSnow({ x: item.x, y: ++item.y, size: 3 });
    });

    checkArray(array);

    if (settings.isAnimation) {
        requestAnimationFrame(() => snowAnimation(cordArray));
    }
}

function createSnow() {
    let windowWidth = document.documentElement.offsetWidth,
        randomX = randomInt(0, windowWidth);

    drawSnow({ x: randomX, y: 0, size: 3 });

    cordArray.push({ x: randomX, y: 0 });
}

function drawSnow(option) {
    ctx.beginPath();
    ctx.arc(option.x, option.y, option.size, 0, 360);
    ctx.stroke();
    ctx.fill();
}

function startAnimation() {
    settings.animation = setInterval(createSnow, 300);
    settings.isAnimation = true;
    snowAnimation(cordArray);
}

function endAnimation() {
    clearInterval(settings.animation);
    settings.isAnimation = false;
}

function checkKey(key) {
    switch (key) {
        case ("Enter"):
            startAnimation();
        break;
        
        case ("Backspace"):
            endAnimation();
         break;
    }
} 

function checkArray(array) {
    const windowHeight = document.documentElement.offsetHeight;

    array.forEach((item, index) => {
        if (item.y > windowHeight) {
            array.splice(index, 1);
        }
    });
}
    
// Event Listeners

document.addEventListener("keydown", event => {
    const key = event.code;
    checkKey(key);
});


