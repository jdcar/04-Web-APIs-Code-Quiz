// Jamie Carlstone
// December 3, 2020
// 04-Web APIs

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

// Starts the score at 0
var score = 0;
// Starts the counter at 60
var counter = document.getElementById("clock");
var seconds = 61;

function timer() {

    // Removes the start button after it is pushed
    document.getElementById("start-button").setAttribute("style", "display:none")
    // Adds the radio buttons
    document.getElementById("multiple-choice").setAttribute("style", "display:block")


    // Start the timer at 60 and decrement 
    // https://gist.github.com/adhithyan15/4350689
    // function countdown(seconds) {


    function decrementTimer() {
        var counter = document.getElementById("clock");
        seconds--;
        counter.innerHTML = String(seconds);
        if (seconds == -1) {
            counter.innerHTML = "Time's up!";
            document.getElementById("multiple-choice").setAttribute("style", "display:none")
            document.getElementById("question").setAttribute("style", "display:none")
            document.getElementById("name-entry").setAttribute("style", "display:block")
        }
        else if (seconds > -1) {
            setTimeout(decrementTimer, 1000);
        }
        else {
            if (seconds > 0) {
                countdown(seconds - 1);
            }
        }
    }
    decrementTimer();
    // }
    // countdown();
    // 
    question.innerText = "";
    questionNumber.innerText = "";
    // Start button is click, timer begins, and questions begin to appear when calling function questions()
    questions();
}
// Questions are listed in an array
var questionArray =
    ["Which for loop is formatted correctly?",
        "What is the Document Object Model (DOM)?",
        "How could you acces an HTML tag that looks like this?: <div id = 'start-button'>",
        "How would you access 'dogs' in this array?: var animals = ['dogs', 'cats', 'birds', 'mice'];",
        "What does API stand for?"
    ]
// Multiple choice options are listed in arrays
var optionAMultipleChoice =
    ["for (var i == 0; i < 10; i++) {...}", "A web API", "document.getElementByID('start-button')", "animals[1]", "Application Programming Index"];
var optionBMultipleChoice =
    ["var (for i = 0; i < 10; i++) {...}", "A programming language", "document.querySelector('.start-button')", "dogs.[0]", "Application Programming Interface"];
var optionCMultipleChoice =
    ["for (var i = 0, i < 10, i++) {...}", "The company that owns Javascript", "document.querySelector('start-button')", "animals[0]", "Array Program Interface"];
var optionDMultipleChoice =
    ["for (var i = 0; i < 10; i++) {...}", "Media queries for iPhones", "document.getElementById('start-button')", "animals.1", "Array Programming Interface"];
// Correct answers are listed in an array
var correct = [optionAMultipleChoice[0], optionBMultipleChoice[4], optionCMultipleChoice[3], optionDMultipleChoice[0], optionDMultipleChoice[2]]

// i represents the question number
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

    } else {
        alert("Game is over! Click OK to see your score.")
        document.getElementById("multiple-choice").setAttribute("style", "display:none")
        var scoreCard = document.createTextNode("Score")
        questionNumber.appendChild(scoreCard)
        document.getElementById("name-entry").setAttribute("style", "display:block")
        counter.setAttribute("style", "display:none")
        var timeLabel = document.getElementById("time-label")
        timeLabel.setAttribute("style", "display:none")
    }
}

// var nameStorage = localStorage.getItem("name")
// var scoreStorage = localStorage.getItem("score")
// var userNameSpan = document.getElementById("name-saved")
// var userScoreSpan = document.getElementById("score-saved")

// Renders the latest score
function renderLastScoreInLeaderboard() {

    var userStorage = JSON.parse(localStorage.getItem("user"))
    var leaderBoard = document.getElementById("entry")
    var item = document.createElement("div")
    item.textContent = userStorage.name + " - " + userStorage.score;

    leaderBoard.append(item)

}
// scoreButton saves the score with the user initials
var scoreButton = document.getElementById("score-button")
scoreButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Add the name and score to the local storage
    var nameInput = document.querySelector(".form-control")
    // score is already a variable @ score
    user = {
        name: nameInput.value.trim(),
        score: score
    };


    localStorage.setItem("user", JSON.stringify(user));
    renderLastScoreInLeaderboard();
    // restart();

});


var submit = document.getElementById("submit-button");

submit.addEventListener("click", submitButton, function
    (event) {
    event.preventDefault();

});

// Submit button after selection is made
function submitButton() {
    var answer = document.querySelector('input[name = "answer"]:checked').value

    // Checks whether the correct answer was checked for each question
    var questionN = document.getElementById("question-number").innerText

    if (questionN == "Question 1" && answer == "option-4") {
        score = score + 10;

    } else if (questionN == "Question 2" && answer == "option-1") {
        score = score + 10;

    } else if (questionN == "Question 3" && answer == "option-4") {
        score = score + 10;

    } else if (questionN == "Question 4" && answer == "option-3") {
        score = score + 10;

    } else if (questionN == "Question 5" && answer == "option-2") {
        score = score + 10;

    } else {
        // Five seconds are docked if the answer is wrong
        seconds -= 5;


    }

    var keepScore = document.getElementById("score")

    keepScore.innerText = String(score);

    // Clears question data for next question
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
// var startGame = document.getElementById("start-button").addEventListener("click", timer);
function startGame() {

    document.getElementById("start-button").addEventListener("click", timer);

}

startGame();
renderLastScoreInLeaderboard();

