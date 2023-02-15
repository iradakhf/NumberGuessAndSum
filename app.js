
const randomlyGeneratedNumber = function generateRandomAnswer(){
    let randomLetterIndex = Math.floor(Math.random() * 100);
    return randomLetterIndex;
  }
var score = 0;

document.getElementById("NumberToGuess").innerHTML = randomlyGeneratedNumber();

var random = randomlyGeneratedNumber();
$(".A").on("click", function(){
    var buttonNumber  =  parseInt(this.dataset.deyer)
    score += buttonNumber;
    if(score<random){
        alert("score is : " + score)
    }
    else if(score==random){
        alert("You won")
    }
    else{
        alert("you lost")
        score=0;
    }
    
     
})