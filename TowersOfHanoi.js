/*
Rules:
1. Only one disk can be moved at a time.
2. Can only move top discs from a stack.
3. Cannot place larger discs on smaller disks.

Basic problem:
3 Destinations
1 stack of 3 discs
  =
 ===
=====
Stack 1     Stack 2     Stack 3

Approach:

Represent each stack as a data structure.

Represent each disc with a weight.
If we have n discs, weights are from 1 - n.
Higher weight discs cannot be placed on lower weight discs.
*/

const SOURCE = 0;
const DESTINATION = 1;
const AUX = 2;

class Disc {
    constructor(weight) {
        this.weight = weight;
    }
}

class Tower {
    constructor(stack = []) {
        this.stack = stack;
    }

    push(disc) {
        this.stack.push(disc)
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        let top = this.stack[this.stack.length - 1];
        if (top)
            return top;
        else
            return null;
    }

    height() {
        return this.stack.length;
    }

    contains(disc) {
        return this.stack.findIndex(element => disc == element)
    }
}

class TowersOfHanoi {
    constructor(numDiscs = 3) {
        this.numDiscs = numDiscs;
        this.numTowers = 3;

        this.discs = [];
        for (let i = this.numDiscs; i > 0; i--) {
            this.discs.push(new Disc(i))
        }

        this.initialTowerIndex = 0;
        this.leftTower = new Tower([...this.discs])
        this.middleTower = new Tower()
        this.rightTower = new Tower()
        this.towers = [this.leftTower, this.middleTower, this.rightTower]

        this.numMoves = 0;
    }

    moveDisc(source, dest) {
        if (!source.stack.length) return false;
        let sourceDisc = source.peek();
        let destDisc = dest.peek();
        if (!sourceDisc) return false;
        if (!destDisc || source.peek().weight < dest.peek().weight) {
            dest.push(source.pop());
            this.numMoves++;
            this.draw();
            this.checkIfWon();
            return true;
        }
        else
            return false;
    }

    checkIfWon(){
        if(this.towers[DESTINATION].height() === this.numDiscs){
            console.log('You win! Total moves: ' + this.numMoves);
        }
    }

    // Draw out current state
    draw() {
        for (let i = this.numDiscs - 1; i >= 0; i--) {
            let line = '';
            for (let j = 0; j < this.numTowers; j++) {
                let disc = this.towers[j].stack[i]
                if (disc) {
                    for(let k = 0; k < disc.weight; k++){
                        line += '*'
                    }
                    for(let k = 0; k < this.numDiscs - disc.weight; k++){
                        line += ' ';
                    }
                    line += ' ';
                }
                else {
                    for(let k = 0; k < this.numDiscs; k++ ){
                        line += ' ';
                    }
                    line += ' ';
                }
            }
            console.log(line);
        }
    }

    solve(numDiscs = this.numDiscs, source = SOURCE, dest = DESTINATION, aux = AUX) {
        if( numDiscs === 1)
            this.moveDisc(this.towers[source], this.towers[dest]);
        else {
            this.solve(numDiscs - 1, source, aux, dest)
            this.moveDisc(this.towers[source], this.towers[dest]);
            this.solve(numDiscs - 1, aux, dest, source);
        }

    }
}

var game = new TowersOfHanoi(2);
game.draw();
game.solve();
// game.draw()

// 1 disc, 1 move
// 2 disc, 3 move
// 3 discs, 7 moves
// 4 discs, 15 moves
// 1 => 1, 2 => 3, 3 => 7
// 2^n - 1