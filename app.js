let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".emoji");
let userSc=document.querySelector(".userScore");
let compSc=document.querySelector(".compScore");
let msg=document.querySelector("#msg");

const compGen =() =>{
    const option=["rock", "paper", "scissors"];
    const num=Math.floor(Math.random()*3);
    return option[num];
}

const playGame =(userChoice) =>{
    // console.log(userChoice);
    const compChoice=compGen();
    if(userChoice===compChoice){
        userScore=userScore+0;
        compScore=compScore+0;
    }
    else if((userChoice=="rock" && compChoice=="paper") || (userChoice=="paper" && compChoice=="scissors") || (userChoice=="scissors" && compChoice=="rock")){
        compScore=compScore+1;
    }
    else if((compChoice=="rock" && userChoice=="paper") || (compChoice=="paper" && userChoice=="scissors") || (compChoice=="scissors" && userChoice=="rock")){
        userScore=userScore+1;
    }
    userSc.innerHTML=`Your Score : ${userScore}`;
    compSc.innerHTML= `Computer Score : ${compScore}`;
    if(userScore>compScore){
        msg.innerHTML="You Win!"
        msg.style.backgroundColor="green";
    }
    else if(userScore<compScore){
        msg.innerHTML="You Lost!";
        msg.style.backgroundColor="red";
    }
    else{
        msg.innerHTML="Match is Draw!"
        msg.style.backgroundColor="yellow";
    }
}

for(let i=0;i<choices.length;i++){
    choices[i].addEventListener("click", ()=>{
        const choiceid=choices[i].getAttribute("id");
        // console.log(choiceid);
        playGame(choiceid);
    })
}