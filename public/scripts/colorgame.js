var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

var numSquares = 6;
var colors = [];
var pickedColor;

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

// Create Squares function
function setupSquares() {
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "PLAY AGAIN?";
            }
            else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}

// Button listener function
function setupModeButtons() {
    // Easy Hard buttons event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

// Reset button
resetButton.addEventListener("click", function () {
    reset();
});

// Reset function
function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    resetButton.textContent = "NEW COLORS";
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// Change color of squares function
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

// Pick random color function
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Applies random color RGB function to the color of the squares
function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

// function that generates random RGB
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}