let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;

const winPatterns=[
          [0,1,2],
          [0,3,6],
          [0,4,8],
          [1,4,7],
          [2,5,8],
          [3,4,5],
          [6,7,8]
];
const resetGame=()=>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide")
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO){
         box.innerText="O";
         turnO=false;
       }else{
        box.innerText="X";
        turnO=true;
       } 
       box.disabled=true;

       checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(Winner)=>{
    msg.innerText=`Congratulations,Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );
        let position1=boxes[pattern[0]].innerText;
        let position2=boxes[pattern[1]].innerText;
        let position3=boxes[pattern[2]].innerText;
        
        if(position1!=""&& position2!=""&& position3!=""){
            if(position1===position2 && position2===position3){
                showWinner(position1);
            }
        }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);