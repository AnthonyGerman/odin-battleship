export default function showAttack(x, y, board) {
    const div = document.getElementById(board);
    const row = div.children[y - 1];
    const square = row.children[x - 1];
    square.textContent = 'X';
}