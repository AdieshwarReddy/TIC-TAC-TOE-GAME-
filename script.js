console.log("Welcome To  Tic Tac Toe : ")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.wav")
let turn = "X"
let isgameover = false

// ── Session Score Tracking ───────────────────────────
let scores = {
    X: parseInt(sessionStorage.getItem("scoreX") || "0"),
    O: parseInt(sessionStorage.getItem("scoreO") || "0"),
    D: parseInt(sessionStorage.getItem("scoreD") || "0"),
}

// Render scores from session on page load
const updateScoreDisplay = (bumpId) => {
    document.getElementById("scoreX").innerText = scores.X;
    document.getElementById("scoreO").innerText = scores.O;
    document.getElementById("scoreD").innerText = scores.D;
    // Bump animation on the updated score
    if (bumpId) {
        const el = document.getElementById(bumpId);
        el.classList.remove("bump");
        void el.offsetWidth; // reflow to restart animation
        el.classList.add("bump");
        el.addEventListener("animationend", () => el.classList.remove("bump"), { once: true });
    }
}
updateScoreDisplay();

// ── Helper: save scores to session ──────────────────
const saveScores = () => {
    sessionStorage.setItem("scoreX", scores.X);
    sessionStorage.setItem("scoreO", scores.O);
    sessionStorage.setItem("scoreD", scores.D);
}

// ── Function to change the turn ─────────────────────
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// ── Check if all boxes are filled (for draw) ────────
const isBoardFull = () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    return Array.from(boxtexts).every(cell => cell.innerText !== "");
}

// ── Highlight the winning cells ─────────────────────
const highlightWinners = (indices) => {
    let boxes = document.getElementsByClassName("box");
    indices.forEach(i => boxes[i].classList.add("winner"));
}

// ── Function to check for a win ─────────────────────
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    let winFound = false;
    wins.forEach(e => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            let winner = boxtext[e[0]].innerText;
            document.querySelector('.info').innerText = winner + " Won! 🎉"
            document.querySelector('.info').classList.remove("draw");
            isgameover = true
            winFound = true;

            // Highlight winning cells
            highlightWinners(e);

            // Update session score
            scores[winner === "X" ? "X" : "O"]++;
            saveScores();
            updateScoreDisplay();

            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "356px";
            gameover.play();
        }
    })

    // ── Draw detection ───────────────────────────────
    if (!winFound && !isgameover && isBoardFull()) {
        isgameover = true;
        let infoEl = document.querySelector('.info');
        infoEl.innerText = "It's a Draw! 🤝";
        infoEl.classList.add("draw");

        // Update session draw count
        scores.D++;
        saveScores();
        updateScoreDisplay();

        // Pulse all boxes to indicate draw
        let allBoxes = document.getElementsByClassName("box");
        Array.from(allBoxes).forEach(b => b.classList.add("draw-flash"));

        gameover.play();
    }
}

// ── Game Logic ───────────────────────────────────────
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isgameover) {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// ── Reset current game (scores are preserved) ────────
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    })

    // Remove highlight classes
    let allBoxes = document.getElementsByClassName("box");
    Array.from(allBoxes).forEach(b => {
        b.classList.remove("winner");
        b.classList.remove("draw-flash");
    });

    // Remove draw class from info
    document.querySelector('.info').classList.remove("draw");

    turn = "X"
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
