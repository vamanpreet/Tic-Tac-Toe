let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container"); 
let msg = document.querySelector('#msg') ;


let turnO = true;         // Player 1-O and Player 2-X


const winPattern = [                // Possible Winning moves
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
            box.style.color = "green";
        } else {
            box.innerText = "X";
            turnO = true;
            box.style.color = "blue";
        }
        box.disabled = true;
        checkWin();
    });
});


const checkWin = () => {
    for(let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    count = 0;
    msgContainer.classList.add("hide");
};





newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);