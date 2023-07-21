export default function createBoard(div, player = false) {
    while (div.firstChild) {
        div.removeChild(div.firstChild)
    }

    let x = 0;
    while (x < 10) {
        let row = div.appendChild(document.createElement('div'));
        row.setAttribute('class', 'row');
        row.setAttribute('id', x);
        let y = 0;
        while (y < 10) {
            let square = row.appendChild(document.createElement('div'));
            square.setAttribute('class', 'square');
            square.setAttribute('id', y);
            if (!player) {
                square.addEventListener('click', () => {
                    window.dispatchEvent(new StorageEvent('storage', {
                        key: parseInt(square.id) + 1,
                        newValue: parseInt(row.id) + 1,
                        oldValue: div.id
                    }));
                });
            }
            y++;
        }
        x++;
    }
}