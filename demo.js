    let guessNumber = document.getElementById("gussNumber");
    let message = document.getElementById("result")
    let randomNumber = Math.floor(Math.random()*10)+1;
    let score = document.getElementById("score");
   let totalScore = 10;

function number(){

    let enteredNumber = guessNumber.value

    if(randomNumber == enteredNumber){
        console.log("Right")
        result.innerHTML = "Right"
        result.style.color = "green"
        alert("You are Win!" + " Your score is: " + totalScore)
        totalScore += 1;

        
       
       

    }
    else{
        console.log("Wrong")
        result.innerHTML = "Wrong"
        result.style.color = "red"
       totalScore -= 1;
         score.innerHTML = "score: " + totalScore;

        

    }
    

     
}