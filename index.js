// let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let singhs = [
    {name: "alma", img: "/img/alma.jpg"},
    {name: "amigo", img: "/img/amigo.jpg"},
    {name: "asher", img: "/img/asher.jpg"},
    // {name: "chris", img: "/img/z.jpg"},
    {name: "cody", img: "/img/cody.jpg"},
    {name: "dan", img: "/img/dan.jpg"},
    {name: "ella", img: "/img/ella.jpg"},
    {name: "godzilla", img: "/img/godzilla.jpg"},
    {name: "godzuki", img: "/img/godzuki.jpg"},
    // {name: "joanne", img: "/img/z.jpg"},
    {name: "kara", img: "/img/kara.jpg"},
    // {name: "liz", img: "/img/z.jpg"},
    // {name: "magic", img: "/img/z.jpg"},
    {name: "markie", img: "/img/markie.jpg"},
    {name: "mika", img: "/img/mika.jpg"},
    {name: "nani", img: "/img/nani.jpg"},
    // {name: "otter", img: "/img/z.jpg"},
    {name: "oxy", img: "/img/oxy.jpg"},
    {name: "papa", img: "/img/papa.jpg"},
    // {name: "pola", img: "/img/z.jpg"},
    {name: "reeree", img: "/img/reeree.jpg"},
    // {name: "richie", img: "/img/z.jpg"},
    {name: "sam", img: "/img/sam.jpg"},
    {name: "sebbie", img: "/img/sebbie.jpg"},
    {name: "selah", img: "/img/selah.jpg"},
    {name: "subi", img: "/img/subi.jpg"},
    // {name: "suri", img: "/img/z.jpg"},
    {name: "vash", img: "/img/vash.jpg"},
    {name: "vish", img: "/img/vish.jpg"},
    // {name: "weiwei", img: "/img/z.jpg"},
    // {name: "xan", img: "/img/z.jpg"},
    {name: "Z", img: "/img/z.jpg"},
    {name: "ziggy", img: "/img/ziggy.jpg"},
]

let fightButton = document.getElementById("fightButton")
let player1pic = document.getElementById("player-1-img")
let player2pic = document.getElementById("player-2-img")
let player1name = document.getElementById("player-1-name")
let player2name = document.getElementById("player-2-name")

function rollNum() {
    return Math.floor(Math.random() * singhs.length)
}

fightButton.addEventListener("click", function() {
    let player1 = rollNum()
    let player2 = rollNum()

    while (player1 === player2) {
        player2 = rollNum()
    }

    player1pic.src = `${singhs[player1].img}`
    player2pic.src = `${singhs[player2].img}`
    player1name.textContent = `${singhs[player1].name}`
    player2name.textContent = `${singhs[player2].name}`
})
