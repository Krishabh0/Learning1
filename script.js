//these is the user score 

let userScore = 0;
let compScore = 0;

//accessing all html into js
const choices = document.querySelectorAll(".choice")
const userScorepara = document.querySelector("#userScore")
const compScorepara = document.querySelector("#compScore")
//gameplay function to generate random 
const gamePlay = function(){
    //these is the arra jaha jum index ki value se random no se compare karke values == array ki string generate kar rahe hai.
const options = ["stone","paper","scissor"];
//math.floor fakt main value genrate kara sathi aani math.random no generate kara sathi 
const optIndx = Math.floor(Math.random() * 3) 
//return function options madhlya array chya value la optindex mhnje random no sobt compare kara sathi
return options[optIndx];

}   
const msg = document.querySelector("#msg");
// showWinner winner choose kara sathi jithe apn if else condition vaprlya ahet aani function madhe userwin,serchoice , compChoice he pass kele ahet jenekarun apn tyanna ithe access karu shkto

const showWinner =  function(userWin ,userchoice , compChoice){
    if(userWin){
        console.log("you win")
        msg.innerText = `you win your choice is  ${userchoice} and comp choice is ${compChoice}`;
        msg.style.backgroundColor = "green"
// useScore jo apn var declare kela ahe to ithe ++ kela ahe jenekarun tyachi value vadhnar aani userscorepara html la access kara sathi 
        userScore++;
        userScorepara.innerText = userScore;
    }
    else{
        console.log("you loose")
        msg.innerText = `you loose your choice is  ${userchoice} and comp choice is ${compChoice}`;
        msg.style.backgroundColor = "red"
        compScore++;
        compScorepara.innerText = compScore;
    }
}
// game draw function jar game draw zala tar tya sathi ha function apn bnvla tyat jar compchoice aani user choice eqal zale tr gamedraw function run houn jail
const gameDraw = function(){
    console.log("game is draw")
    msg.innerText = "game was draw play again";
    msg.style.backgroundColor = "black"
}

// main function playgame jith aapn condition dilya ahet kon kadhi jinknar
 const playGame = function(userchoice){

     console.log("your choice is clicked",userchoice);
     //compchoice pass kara sathi apn comp choice la random no gerate sobt equal kela ahe
     const compChoice = gamePlay();
     console.log("computer choice is ",compChoice)
     if(userchoice === compChoice){

         gameDraw();
     }else{
        let userWin = true;
        if(userchoice === "stone"){
//user ne agar stn and comp ne agar paper choose kiya to userWin har jayga mtlb userWin = false
          userWin =   compChoice === "pper" ? false : true;
        }
        else if (userchoice === "paper"){
           userWin =  compChoice === "scissor" ? false : true;
        }else{
          userWin =   compChoice === "stone" ? false : true;
        }
showWinner(userWin, userchoice , compChoice);
      
     }
 }

// choices ak for purn div ahe jya madhe traverse kara sathi apn for each loop lavla ahe ani choice he function mdhech declare zali ahe


choices.forEach(function(choice){
    choice.addEventListener("click",function(){
        //user choice mhnje apn jo div click karu to apli choice rahil
        const userchoice = choice.getAttribute("id");
     playGame(userchoice);
    })
})