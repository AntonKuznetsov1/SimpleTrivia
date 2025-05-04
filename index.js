let questions = [
    "What is Capital of Canada?",
    "What is most popular name?",
    "What is the biggest ocean?",
    "What year did Titanic sink?",
    "Where is the highest mountain?"
];

let button1 = ["Toronto", "Muhammed", "American", "2003", "India"];
let button2 = ["Vancouver", "Liam", "North", "1678", "Nepal"];
let button3 = ["Ottawa", "Maria", "Indian", "1912", "USA"];
let button4 = ["Ontario", "Maks", "Pacific", "1913", "Austria"];

let rightSequence = [3, 1, 4, 3, 2]; 
let turn = 0;

function isRight(answer, question, rightSequence) {
    console.log("Answer clicked:", answer);
    console.log("Current question index:", question);
    console.log("Expected correct answer:", rightSequence[question]);

    if (turn >= questions.length) {
        document.getElementById("output").innerHTML = "Trivia completed!";
        return;
    }

    if (answer === rightSequence[question]) {
        document.getElementById("output").innerHTML = "You're right!";
        
        if (turn + 1 < questions.length) { 
            turn++; 
            document.getElementById("question").innerHTML = questions[turn];
            document.getElementById("1").innerHTML = button1[turn];
            document.getElementById("2").innerHTML = button2[turn];
            document.getElementById("3").innerHTML = button3[turn];
            document.getElementById("4").innerHTML = button4[turn];
        } else {
            document.getElementById("output").innerHTML = "Trivia completed!";
            disableButtons();
        }
    } else {
        document.getElementById("output").innerHTML = "Try again!";
    }

    console.log("Turn after update:", turn);
}
function disableButtons() {
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
}
