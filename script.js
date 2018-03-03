var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	for(var i =0;i < modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("active");
			modeButtons[1].classList.remove("active");
			this.classList.add("active");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		})
	}	
	for (var i = 0;i < squares.length;i++){
		// Add click listeners to squares
		squares[i].addEventListener("click",function() {
			// Grab the color of clicked square and compare it with the picked color
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent="Correct!";
				h1.style.backgroundColor = clickedColor;
				changeColors(clickedColor);
				resetButton.textContent = "Play again?";	
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		})
	}
	reset();
}



resetButton.addEventListener("click",function(){
	reset();
})

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0;i < squares.length;i++){
	//change each one to picked Color
	if(colors[i]){
		squares[i].style.display="block";
		squares[i].style.backgroundColor = colors[i];
	}else{
		squares[i].style.display = "none";
	}}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent="";
	resetButton.textContent = "New Colors";	
}



function changeColors(color) {
	//loop through all squares
	for (var i = 0;i < colors.length;i++){
	//change each one to picked Color
	squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	 return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num){
	//Make an array
	var color = [];
	// add random colors to that array
	for (var i = 0; i<num;i++){
		// get random color and push into the array
		color.push(randomColor());
	}
	// return the array
	return color;
}

function randomColor(){
	// pick a red from 0-255
	var red = Math.floor(Math.random() * 256);
	// pick a green from 0-255
	var green = Math.floor(Math.random() * 256);
	// pick a blue from 0-255
	var blue = Math.floor(Math.random() * 256);
	// return the color to generateRandomColors function
	return "rgb("+red+", "+green+", "+blue+")";
}
