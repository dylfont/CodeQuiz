var startSection = document.getElementById("startSection")
var questionSection = document.getElementById("questionSection")
var gameoverSection = document.getElementById("gameoverSection")
var startBTN = document.getElementById("startBTN")
var saveBTN = document.getElementById("saveBTN")
var timer = document.getElementById("timer")
var time = 60
var gameTimer;
var index = 0

var allQuestions=[
    {
        question:"Which operator is used to assign a value to a variable?", 
        answer1:"=",
        answer2:"*",
        answer3:"x",
        answer4:"#",
        correctAnswer:"="
    },
    {
        question:"Which event occurs when the user clicks on an HTML element?", 
        answer1:"onchange",
        answer2:"onmouseover",
        answer3:"onmouseclick",
        answer4:"onclick",
        correctAnswer:"onclick"
    },
    {
        question:"Inside which HTML element do we put the JavaScript?", 
        answer1:"<javascript>",
        answer2:"<scripting>",
        answer3:"<script>",
        answer4:"<js>",
        correctAnswer:"<script>"
    },
    {
        question:"How to write an IF statement in JavaScript?", 
        answer1:"if i==5 then",
        answer2:"if i=5 then",
        answer3:"if i=5",
        answer4:"if (i==5)",
        correctAnswer:"if (i==5)"
    },
    {
        question:"How does a FOR loop start?", 
        answer1:"for (i<=5;i++)",
        answer2:"for (i=0; i<=5)",
        answer3:"for (i=0; i<=5; i++)",
        answer4:"for i=1 to 5",
        correctAnswer:"for (i=0; i<=5; i++)"
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

function saveInitials(){
    var initials = document.getElementById("initials").value
    var score = initials + " " + time 
    localStorage.setItem("high_score",score)
    gameoverSection.classList.add("hide")
    startSection.classList.remove("hide")
    time = 60
}



saveBTN.addEventListener("click",saveInitials)
startBTN.addEventListener("click",startGame)