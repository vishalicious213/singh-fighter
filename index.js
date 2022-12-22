let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let singhs = [
    {name: "ella", img: "face.jpg"},
    {name: "kara", img: "face.jpg"},
    {name: "vish", img: "face.jpg"},
]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let player1 = Math.floor(Math.random() * singhs.length)
    let player2 = Math.floor(Math.random() * singhs.length)
    stageEl.textContent = `${singhs[player1].name} vs ${singhs[player2].name}`
})
