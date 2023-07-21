import Ship from "./ship";

export default function Gameboard() {
    return {
        coords: [],
        missedAttacks: [],
        placeShip(length, x, y) {
            this.coords.push([Ship(length), x, y]);
        },
        receiveAttack(x, y) {
            this.coords.forEach(element => {
                if (element[1] == x && element[2] == y) {
                    element[0].hit();
                    element[0].isSunk();
                }
                else {
                    this.missedAttacks.push([x, y]);
                }
            });
        },
        allSunk() {
            let x = 0;
            this.coords.forEach(element => {
                if (element[0].sunk) {x++;}
            });
            if (x == this.coords.length) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}