
let head = document.querySelector(".head");
let boxes = document.querySelectorAll(".box");
let turnO = true;
let show = document.querySelectorAll(".show");

// Winning patterns for Tic-Tac-Toe
const winPatterns = [
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
        if (box.dataset.disabled === "true") return; // Prevent re-click

        box.style.backgroundColor = "rgb(10, 10, 50)";
        box.style.boxShadow = "none";
        box.innerText = turnO ? "O" : "X";
        turnO = !turnO;
        box.dataset.disabled = "true"; // Mark box as clicked
        checkWinner();
    });
});

// Disable all boxes
const disableBoxes = () => {
    boxes.forEach(box => box.dataset.disabled = "true");
};

// Enable all boxes for a new game
const enableBoxes = () => {
    boxes.forEach(box => {
        box.dataset.disabled = "false";
        box.innerText = "";
        box.style.backgroundColor = "";
        box.style.boxShadow = "";
    });
};
let results = document.querySelector(".results")
// Show the winner message
const showWinner = (winner) => {
    disableBoxes();
    console.log("Winner is:", winner);
    results.innerText = `${winner} is win`;
    // Display winner message if needed, e.g., msgContainer.innerText = `${winner} wins!`;
};

// Check for a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            showWinner(boxes[a].innerText);
            return;
        }
    }
};

// Reset the game
const resetGame = () => {
    turnO = true;
    enableBoxes();
    // Hide any winner message if needed, e.g., msgContainer.classList.add("hide");
};

// Example reset button if needed
let restart = document.querySelector(".play-again")
restart.addEventListener("click", resetGame);
results.style.color="red"
results.style.display="relative"
results.style.flexWrap="wrap"
results.style.backgroundColor="black"
results.style.fontSize="42px"
results.style.width="60%"
results.style.marginLeft="20%"
results.style.borderRadius="5%"
