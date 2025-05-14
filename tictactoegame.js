let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let msg1 = document.querySelector(".msga");

let turnO = true; //player 1, player 2
let c = 0;
//2D array is used
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turnO = true;
    enablebox();
    msgcontainer.classList.add("hide");
};

const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        c++;
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            box.disabled = true;
            box.style.color = "black";
        } else {
            box.innerText = "X";
            turnO = true;
            box.disabled = true;
            box.style.color = "#2A2A72";
        }
        checkdraw();
        checkwinner();

    });
});

const checkdraw = () => {
    if (c == 9) {
        msg1.classList.remove("hidea");
    }
}

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
};



const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                disablebox();
            }
        }
    }
};


newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);