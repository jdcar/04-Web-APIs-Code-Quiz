/* GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score */

// Element question is created so it can be replaced with each new question
var question = document.getElementById("question")
// Element question-number is created so it can be replaced with each new question
var questionNumber = document.getElementById("question-number")
console.log(questionNumber)

// var multipleChoice = 
document.getElementById("multiple-choice").setAttribute("style", "display:none")



// var question = document.body.children[1].children[1].children[0];
// console.log(question)
// startButton() {
function timer() {

    // Removes the start button after it is pushed
    document.getElementById("start-button").setAttribute("style", "display:none")

    // Start the timer at 60 and decrement 
    // https://gist.github.com/adhithyan15/4350689
    function countdown(seconds) {
        var seconds = 61;
        function decrementTimer() {
            var counter = document.getElementById("clock");
            seconds--;
            counter.innerHTML = String(seconds);
            if (seconds == -1) {
                counter.innerHTML = "Time's up!";
            }
            else if (seconds > -1) {
                setTimeout(decrementTimer, 1000);
            } else {
                if (seconds > 0) {
                    countdown(seconds - 1);
                }
            }
        }
        decrementTimer();
    }
    countdown(1);


    // 
    question.innerText = "";
    questionNumber.innerText = "";
    questions();


}
// }


var questionArray =
    ["This is question one",
        "This is question two",
        "This is question three",
        "This is question four",
        "This is question five"
    ]



function questions() {

    var questionZeroTitle = document.createTextNode("Question 1")
    questionNumber.appendChild(questionZeroTitle)

    var question0 = document.createTextNode(questionArray[0])
    question.appendChild(question0);

    document.getElementById("multiple-choice").setAttribute("style", "display:block")

    


    // for (var i = 0; i < questionArray.length; i++)
    // // Add the question to the HTML
    //     var question1 = document.createTextNode(questionArray[i]);
    //     question.appendChild(question1);

    // Delete previous question with the following:
    // question.innerText = "";
    // call question 2
}

// function questionTwo() {

//     // Add the question to the HTML
//     var question2 = document.createTextNode(questionArray[1]);
//     question.appendChild(question2);

//     // Delete previous question with the following:
//     // question.innerText = "";    
//     // call question 3
// }






// Add listener even to start timer() when the button is pushed
// Function timer() is triggeredin startButton
document.getElementById("start-button").addEventListener("click", timer);





// This starts running the program

// Score is something like the seconds * the number of correct answers