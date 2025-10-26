let userscore=0;
let compscore=0;

let userpara=document.querySelector("#my-score");
let comppara=document.querySelector("#comp-score");
let pics=document.querySelectorAll(".pic");
let para=document.querySelector("#msg");

let genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    let arridx=Math.floor(Math.random()*3);
    return options[arridx];
};

let gamedraw=()=>{
    para.innerText="game is draw..play again";
    para.style.backgroundColor="blue";
};


function playgame(userChoice) {
    let compchoice = genCompChoice();
    if(userChoice===compchoice)
    {
        gamedraw();
        return;
    }
    let userwin=true;

        if(userChoice==="rock")
         userwin= compchoice==="paper"?false:true;
        else if(userChoice==="paper")
         userwin= compchoice==="scissors"?false:true;
        else
         userwin= compchoice==="rock"?false:true;
    

    if(userwin)
    {
        userscore++;
        userpara.innerText=userscore;
        para.innerText= ` congo!  you win :) your ${userChoice} beats ${compchoice} `;
        para.style.backgroundColor="green";
    }
    else{
        compscore++;
        comppara.innerText=compscore;
        para.innerText=`oops!  you lose :( ${compchoice} beats your ${userChoice}`;
        para.style.backgroundColor="red"
    }
    
};

pics.forEach((pic) =>{
    pic.addEventListener("click",()=>{
        let userChoice=pic.getAttribute("id");
        playgame(userChoice);
    });
});
