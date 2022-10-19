// Imports

import { checkMethods } from "./checks.js";
import { animationMethods } from "./animations.js";
import { randomMethods } from "./randomInt.js";
import { canvasMethods } from "./canvas.js";

// Canvas Variables

const canvas = document.querySelector(".snow__canvas"),
      ctx = canvas.getContext("2d");

// Animation Variables

let coordinatesList = [];

let settings = {
    isAnimation: true,
    startAnimation: 0,
    animation: null,
};

// Window size Varibles

const windowWidth = document.documentElement.offsetWidth,
      windowHeight = document.documentElement.offsetHeight;

// Key List

let functionsArray = [

    {
        key: "Enter",
        func: () => animationMethods.startAnimation(settings, () => snowAnimation(coordinatesList), createSnow),
    },

    {
        key: "Backspace",
        func: () => animationMethods.endAnimation(settings),
    },

    {
        key: "Space",
        func: () => canvasMethods.clear(coordinatesList, canvas),
    },

];

// Canvas Settings

canvas.width = windowWidth;
canvas.height = windowHeight;

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
      
// Functions

function snowAnimation(array) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    checkMethods.checkArray(array, windowHeight);

    array.forEach(item => {
        drawSnow({ x: item.x, y: ++item.y, size: 3 });
    });

    if (settings.isAnimation) {
        requestAnimationFrame(() => snowAnimation(coordinatesList));
    }

}

function createSnow() {

    const randomX = randomMethods.randomInt(0, windowWidth);

    drawSnow({ x: randomX, y: 0, size: 3 });

    coordinatesList.push({ x: randomX, y: 0 });

}

function drawSnow(option) {

    ctx.beginPath();
    ctx.arc(option.x, option.y, option.size, 0, 360);
    ctx.stroke();
    ctx.fill();

}
    
// Event Listeners

document.addEventListener("keydown", event => {

    const key = event.code;
    checkMethods.checkKey(key, functionsArray);
    
});
