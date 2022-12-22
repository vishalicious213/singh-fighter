let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let singhs = [
    {name: "ella", img: "face.jpg"},
    {name: "kara", img: "face.jpg"},
    {name: "vish", img: "face.jpg"},
]

let stageEl = document.getElementById("stage")
let player1El = document.getElementById("player-1")
let player2El = document.getElementById("player-2")
let player1Pic = document.getElementById("player-1-img").src
let player2Pic = document.getElementById("player-2-img")
let fightButton = document.getElementById("fightButton")

function displayImage(src1, src2) {
    let img1 = document.createElement("img")
    let img2 = document.createElement("img")
    img1.src = src1
    img2.src = src2
    img1.classList.add("image")
    img2.classList.add("image")
    // document.body.appendChild(img)
    player1El.appendChild(img1)
    player2El.appendChild(img2)
}

fightButton.addEventListener("click", function() {
    let player1 = Math.floor(Math.random() * singhs.length)
    let player2 = Math.floor(Math.random() * singhs.length)
    // stageEl.textContent = `${singhs[player1].name} vs ${singhs[player2].name}`
    player1El.textContent = `${singhs[player1].name}`
    player2El.textContent = `${singhs[player2].name}`
    player1Pic = `./img/face.jpg`
    displayImage('/img/face.jpg', '/img/face.jpg')
})
