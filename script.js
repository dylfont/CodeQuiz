var startSection = document.getElementById("startSection")
var questionSection = document.getElementById("questionSection")
var gameoverSection = document.getElementById("gameoverSection")
var startBTN = document.getElementById("startBTN")
var timer = document.getElementById("timer")
var time = 60
var gameTimer;
var index = 0

var allQuestions=[
    {
        question:"guess the number", 
        answer1:"12",
        answer2:"8",
        answer3:"5",
        answer4:"6",
        correctAnswer:"8"
    },
    {
        question:"guess the number again", 
        answer1:"13",
        answer2:"9",
        answer3:"6",
        answer4:"7",
        correctAnswer:"7"
    },
    {
        question:"guess the number again", 
        answer1:"13",
        answer2:"9",
        answer3:"6",
        answer4:"3",
        correctAnswer:"3"
    }
]

function startGame(){
    gameTimer = setInterval(function(){
    time=time -1
    timer.textContent=time
    },1000)
    startSection.classList.add("hide")
    questionSection.classList.remove("hide")
    displayAnswer()
}

function displayAnswer(){
  var current = allQuestions[index] 
  var question = document.getElementById('question')
  question.textContent=current.question

  var answer1=document.getElementById("answer1")
  answer1.textContent=current.answer1
  answer1.addEventListener("click",checkAnswer)

  var answer2=document.getElementById("answer2")
  answer2.textContent=current.answer2
  answer2.addEventListener("click",checkAnswer)

  var answer3=document.getElementById("answer3")
  answer3.textContent=current.answer3
  answer3.addEventListener("click",checkAnswer)

  var answer4=document.getElementById("answer4")
  answer4.textContent=current.answer4
  answer4.addEventListener("click",checkAnswer)
}

function checkAnswer(event){
    var current = allQuestions[index]
    var choice = event.target.textContent
    console.log(choice)
    if(current.correctAnswer===choice){
        console.log("correct")
    }else{
        console.log("incorrect")
        time=time -10
        timer.textContent=time
    }
    index=index +1
    if(index===allQuestions.length){
        gameOver()
    }else{
        displayAnswer() 
    }
    
}


function gameOver(){
    clearInterval(gameTimer)
    gameoverSection.classList.remove("hide")
    questionSection.classList.add("hide")
}




startBTN.addEventListener("click",startGame)