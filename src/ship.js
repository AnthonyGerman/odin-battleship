export default function Ship(length) {
    return {
        length: length,
        timesHit: 0,
        sunk: false,
        hit() {this.timesHit += 1},
        isSunk() {if (this.timesHit >= this.length) {this.sunk = true}}
    }
}
