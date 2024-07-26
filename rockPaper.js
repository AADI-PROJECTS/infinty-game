let userscore=0;
let computerscore=0;

const userchoice=document.querySelectorAll(".box");
const winner=document.querySelector("#value");
const count=document.querySelector("#num1");
const count2=document.querySelector("#num2");

const randvalue=()=>{
    const option=["rock","paper","scissors"];
    const genvalue=Math.floor(Math.random()*3);
    return option[genvalue];
}
const drawgame =()=>
{
    winner.innerText="GAME WAS DRAW!(¬_¬ )";
    winner.style.backgroundColor="black";
}
const showwinner =(whowin)=>{
  if(whowin){
    userscore++;
    count.innerText=userscore;
    winner.innerText="YOU  WIN!🎆";
    winner.style.backgroundColor="green";
  }
  else{
    computerscore++;
    count2.innerText=computerscore;
    winner.innerText="SYSTEM  WIN!🤖";
    winner.style.backgroundColor="red";
  }
}
const computer =((userchoose) =>{ 
    const computerchoose=randvalue();  
 if(userchoose === computerchoose){
    //draw game 
    drawgame();
 }
 else {
    let whowin=true;
    if(userchoose ==="rock"){
        //se paper
        whowin=computerchoose === "paper" ?  false:true;
    }
    else if(userchoose === "paper"){
        //rock se
        whowin=computerchoose === "scissors" ? false:true;
    }
    else {
        whowin=computerchoose === "rock" ? false:true;
    }
    showwinner(whowin);
 }
  
});

userchoice.forEach((box)=>{
    box.addEventListener("click",() => {
     const userchoose=box.getAttribute("id");
      computer(userchoose);
    });
});