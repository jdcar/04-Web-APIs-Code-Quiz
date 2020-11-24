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
// Element multiple-choice is created so it can be replaced with new answer options
// On landing page this does not appear until button is pushed
document.getElementById("multiple-choice").setAttribute("style", "display:none")

var multipleChoiceA = document.getElementById("answer-1")
var multipleChoiceB = document.getElementById("answer-2")
var multipleChoiceC = document.getElementById("answer-3")
var multipleChoiceD = document.getElementById("answer-4")


// Score is correctAnswers * time left
var score = 0;


function timer() {

    // Removes the start button after it is pushed
    document.getElementById("start-button").setAttribute("style", "display:none")
    // Adds the radio buttons
    document.getElementById("multiple-choice").setAttribute("style", "display:block")


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
    // Start button is click, timer begins, and questions begin to appear when calling function questions()
    questions();

}

var questionArray =
    ["This is question one",
        "This is question two",
        "This is question three",
        "This is question four",
        "This is question five"
    ]

var optionAMultipleChoice =
    ["1A - Incorrect", "2A - Correct", "3A - Incorrect", "4A - Incorrect", "5A - Incorrect"];
var optionBMultipleChoice =
    ["1B - Incorrect", "2B - Incorrect", "3B - Incorrect", "4B - Incorrect", "5B - Correct"];
var optionCMultipleChoice =
    ["1C - Incorrect", "2C - Incorrect", "3C - Incorrect", "4C - Correct", "5C - Incorrect"];
var optionDMultipleChoice =
    ["1D - Correct", "2D - Incorrect", "3D - Correct", "4D - Incorrect", "5D - Incorrect"];

var correct = [optionAMultipleChoice[0], optionBMultipleChoice[4], optionCMultipleChoice[3], optionDMultipleChoice[0], optionDMultipleChoice[2]]

var i = 0;


function questions() {

    if (i <= 4) {
        var questionZeroTitle = document.createTextNode("Question " + (i + 1))
        questionNumber.appendChild(questionZeroTitle)
        
        var question0 = document.createTextNode(questionArray[i])
        question.appendChild(question0);

        var optionA = document.createTextNode(optionAMultipleChoice[i])
        multipleChoiceA.appendChild(optionA)

        var optionB = document.createTextNode(optionBMultipleChoice[i])
        multipleChoiceB.appendChild(optionB)

        var optionC = document.createTextNode(optionCMultipleChoice[i])
        multipleChoiceC.appendChild(optionC)

        var optionD = document.createTextNode(optionDMultipleChoice[i])
        multipleChoiceD.appendChild(optionD)

        // console.log(questionZeroTitle)
    } else {
        alert("Game is over! Click OK to see your score.")
        document.getElementById("multiple-choice").setAttribute("style", "display:none")
        var scoreCard = document.createTextNode("Score")
        questionNumber.appendChild(scoreCard)
    }
    // document.getElementById("submit-button").addEventListener("click", submitButton)

    var submit = document.getElementById("submit-button");

    submit.addEventListener("click", submitButton, function
        () {
        // event.preventDefault();

    });
}
// return question0;


function submitButton() {
    var answer = document.querySelector('input[name = "answer"]:checked').value
    // var answerHTML = document.querySelector('input[name = "answer"]:checked').innerHTML

    var questionN = document.getElementById("question-number").innerText
    console.log("This is " + questionN)

    // for (var m = 0; m < correct.length; m++)
    if (questionN == "Question 1" && answer == "option-4"){
        console.log("correct")
        
    } else if (questionN == "Question 2" && answer == "option-1"){
        console.log("correct")
    } else if (questionN == "Question 3" && answer == "option-4"){
        console.log("correct")
    } else if (questionN == "Question 4" && answer == "option-3"){
        console.log("correct")
    } else if (questionN == "Question 5" && answer == "option-2"){
        console.log("correct")
    } else {
        console.log("Incorrect")
    }

    question.innerText = "";
    questionNumber.innerText = "";
    multipleChoiceA.innerText = "";
    multipleChoiceB.innerText = "";
    multipleChoiceC.innerText = "";
    multipleChoiceD.innerText = "";
    i++;
    questions();

}

// Program starts when Start Button is clicked and timer function begins 
document.getElementById("start-button").addEventListener("click", timer);





// This starts running the program

// Score is something like the seconds * the number of correct answers