let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let singhs = [
    {name: "ella", img: "face.jpg"},
    {name: "kara", img: "face.jpg"},
    {name: "vish", img: "face.jpg"},
]

let stageEl = document.getElementById("stage")
let player1El = document.getElementById("player-1")
let player2El = document.getElementById("player-2")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let player1 = Math.floor(Math.random() * singhs.length)
    let player2 = Math.floor(Math.random() * singhs.length)
    // stageEl.textContent = `${singhs[player1].name} vs ${singhs[player2].name}`
    player1El.textContent = `${singhs[player1].name}`
    player2El.textContent = `${singhs[player2].name}`
    // player1El.src = `./img/face.jpg`
})
