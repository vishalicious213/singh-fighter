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

function displayImage(src1, src2, p1Name, p2Name) {
    let img1 = document.createElement("img")
    let img2 = document.createElement("img")
    let name1 = document.createElement("p")
    let name2 = document.createElement("p")

    img1.src = src1
    img2.src = src2
    img1.classList.add("image")
    img2.classList.add("image")
    name1.textContent = p1Name
    name2.textContent = p2Name
    
    player1El.appendChild(img1)
    player2El.appendChild(img2)
    player1El.appendChild(name1)
    player2El.appendChild(name2)
}

fightButton.addEventListener("click", function() {
    let player1 = Math.floor(Math.random() * singhs.length)
    let player2 = Math.floor(Math.random() * singhs.length)
    let p1Name = `${singhs[player1].name}`
    let p2Name = `${singhs[player2].name}`
    // stageEl.textContent = `${singhs[player1].name} vs ${singhs[player2].name}`
    // player1El.textContent = `${singhs[player1].name}`
    // player2El.textContent = `${singhs[player2].name}`
    displayImage('/img/face.jpg', '/img/face.jpg', p1Name, p2Name)
})
