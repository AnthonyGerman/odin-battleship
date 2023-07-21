import Gameboard from "./gameboard";
import createBoard from "./createboard";
import showAttack from "./showattack";
import showShips from "./showships";

const player = document.getElementById('player');
const ai = document.getElementById('ai');
const wintext = document.getElementById('wintext');

const playerg = Gameboard();
const aig = Gameboard();

playerg.placeShip(3, 2, 1);
playerg.placeShip(2, 6, 5);

aig.placeShip(1, 3, 2);
aig.placeShip(4, 1, 1);

window.addEventListener('storage', (event) => {
    showAttack(event.key, event.newValue, event.oldValue);
    aig.receiveAttack(event.key, event.newValue);
    if (aig.allSunk()) {wintext.textContent = 'Player wins'}
    let x = Math.floor(Math.random() * 11);
    let y = Math.floor(Math.random() * 11);
    showAttack(x, y, 'player');
    playerg.receiveAttack(x, y);

    if (playerg.allSunk()) {wintext.textContent = 'AI wins'}
    
});

createBoard(player, true);
createBoard(ai);

showShips(playerg.coords, player);
showShips(aig.coords, ai);


/*
window.addEventListener('storage', (event) => {
    showAttack(event.key, event.newValue, event.oldValue);
    aig.receiveAttack(event.key, event.newValue);
    if (aig.allSunk()) {wintext.textContent = 'Player wins'}

    playerg.receiveAttack(Math.floor(Math.random() * 11), Math.floor(Math.random() * 11));

    if (playerg.allSunk()) {wintext.textContent = 'AI wins'}
    
});
*/