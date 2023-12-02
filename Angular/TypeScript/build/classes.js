"use strict";
class Character {
    constructor(strength, skill) {
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
const p1 = new Character(10, 98);
console.log(p1);
p1.attack();
