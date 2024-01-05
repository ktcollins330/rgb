let numSquares = 6
let colors = createColorArray(numSquares)
let squares = document.querySelectorAll(".square")
let correctColor = setCorrectColor()
let colorDisplay = document.querySelector("#colorDisplay")
let msgDisplay = document.querySelector("#message")
let h1 = document.querySelector("h1")
let resetButton = document.querySelector("#reset")
let easyBtn = document.querySelector("#easyBtn")
let hardBtn = document.querySelector("#hardBtn")


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    numSquares = 3
    msgDisplay.textContent = ""
    h1.style.backgroundColor = "#ffd60a"
    colors = createColorArray(numSquares)
    correctColor = setCorrectColor()
    colorDisplay.textContent = correctColor;
    for (let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = "none";
        }
    }
})


hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected")
    hardBtn.classList.add("selected")
    numSquares = 6
    msgDisplay.textContent = ""
    h1.style.backgroundColor = "#ffd60a"
    colors = createColorArray(numSquares)
    correctColor = setCorrectColor()
    colorDisplay.textContent = correctColor;
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
        squares[i].style.display = "block";

    }
})


colorDisplay.textContent = correctColor;

resetButton.addEventListener("click", function(){
    colors = createColorArray(numSquares)
    correctColor = setCorrectColor()
    colorDisplay.textContent = correctColor;
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor = "#ffd60a"
    msgDisplay.textContent = ""
    this.textContent = "New Colors"
})


for (let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i]
    squares[i].addEventListener('click', function(){
        let clickedColor = this.style.backgroundColor
        if (clickedColor === correctColor){
            msgDisplay.textContent = "Correct!"
            changeColors(clickedColor)
            h1.style.backgroundColor = clickedColor
            resetButton.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "#2b2d42"
            msgDisplay.textContent = "Try Again"
        }
    })
}

function changeColors(color){
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function setCorrectColor(){
    let random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function createColorArray(num){
    let arr = []
    for (let i = 0; i < num; i++){
        arr.push(createRandColorsForArr())
    }
    return arr
}

function createRandColorsForArr(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}





//pre-code notes for structuring this bad boy


//numSquares
//colors
//correctColor
//colorDisplay
//squares
//msgDisplay
//h1
//resetBtn
//easyBtn
//hardBtn

//color display message text content should be the correct color

//for loop to add init colors to squares
//add click listeners to all the squares
    //grab color of clicked square
//compare selected color to correct color
//if they match: 
    //change message to "correct!"
    //change h1 to correctColor
    //change reset button to "play again?"
    //all sqaures change to correcTColor
//else:
    //change square color to match background color
    //change message to "try again!"

//easyBtn event listener
    //add class "selected" for easyBtn
    //remove class "selected" for hardBtn
    //change numSquares to 3
    //message  display should be empty
    //change h1 to correct yellow thing
    //make 'colors' a new array with 3 as numsq
    //establish a new correctColor
    //colorDisplay text should be correctColor
    //weird loop to ensure bottom 3 cant be right

//hardBtn event listener
    //remove 'selected' class from easybtn
    //add 'selected' class for hardBtn
    //numsquares 6
    //message  display should be empty
    //h1 background back to yellow dude
    //set colors (use create color array)
    //set new correct color
    //color display text should be correctcolor
    //loop over squares:
        // change all squares to style.display = block
        //change all squares to background color = colors[i]

//resetBtn event listener:
    //new colors - create array()
    //set new correctColor
    //color text display = correct color
    //loop over squares, change to colors[i]
    //set h1 to yellow boy
    //message  display should be empty
    //this.textcontent change to "new colors"

//functions
    //make function createColorArray(num)
        //let empty arr
        //for loop over 'num' abd push createRandColorsArr() into arr
        //return array
    //createRandColorsForArr()
        //math.floor for r g and b
        //return weird ass string
    //setCorrectColor()
        //get random number between 1 and colors.length
        //return 'random' of 'colors'