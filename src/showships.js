export default function showShips(ships, board) {
    ships.forEach(element => {
        let row = board.children[element[2] - 1];
        let square = row.children[element[1] - 1];
        square.classList.add('shown');
    });
}