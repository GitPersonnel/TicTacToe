const statut = document.querySelector('.player')
const TILES = document.querySelectorAll('.tile')
let activePlayer = "X"
let Game = ["","","","","","","","",""]
let win = false
statut.innerText = "c'est à "+activePlayer+" de jouer"

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function updateGame(TILE){
    if(!TILE.classList.contains('X') && !TILE.classList.contains('O') && win == false){
        let number = TILE.dataset.number
        TILE.classList.add(activePlayer)
        Game[number] = activePlayer
        winningConditions.forEach(winning => {
            if(Game[winning[0]] == Game[winning[1]] && Game[winning[0]] == Game[winning[2]] && Game[winning[0]] != ""){
                console.log("win", activePlayer);
                win = true
                document.querySelector('.win').innerText = activePlayer +" à gagné !"
            }
        
        });
        activePlayer == "X" ? activePlayer = "O" : activePlayer = "X"
        statut.innerText = "c'est à "+activePlayer+" de jouer"
    }

}

TILES.forEach(TILE => {
    TILE.addEventListener('click',()=>{
       updateGame(TILE)
    })
    TILE.addEventListener('touchend',()=>{
        updateGame(TILE)
     })
});
