let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let singhs = [
    {name: "ella", img: "face.jpg"},
    {name: "kara", img: "face.jpg"},
    {name: "vish", img: "face.jpg"},
]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let player1pic = document.getElementById("player-1-img")
let player2pic = document.getElementById("player-2-img")
let player1name = document.getElementById("player-1-name")
let player2name = document.getElementById("player-2-name")

fightButton.addEventListener("click", function() {
    let player1 = Math.floor(Math.random() * singhs.length)
    let player2 = Math.floor(Math.random() * singhs.length)

    player1pic.src = '/img/face.jpg'
    player2pic.src = '/img/face.jpg'
    player1name.textContent = `${singhs[player1].name}`
    player2name.textContent = `${singhs[player2].name}`
})
