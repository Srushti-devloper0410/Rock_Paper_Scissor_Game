let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    
    msg.innerText = "Game was Draw..Try again!"
    msg.style.backgroundColor="#081b31"
};

const showWinner = (userWin, choiceId, compChoice) =>{
    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${choiceId} beats ${compChoice}`
        msg.style.backgroundColor="green";
       
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${choiceId}`
        msg.style.backgroundColor="red";
        
    }
};

const playGame = (choiceId)=>{
    
    const compChoice= genComputerChoice();
    
     if(choiceId === compChoice){
    drawGame();
}else{
    let userWin = true;
    if(choiceId === "rock"){
       userWin = compChoice === "paper" ? false : true;
    }else if(choiceId === "paper"){
        userWin = compChoice === "scissor" ? false : true;
    }else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, choiceId , compChoice);
}
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const choiceId = choice.getAttribute("id");
        
        playGame(choiceId);
    });
});