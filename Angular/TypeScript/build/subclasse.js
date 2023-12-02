"use strict";
class Character1 {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
// Character: superclass
// Magician: subclass
class Magician extends Character1 {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p2 = new Magician("Mago", 9, 30, 100);
