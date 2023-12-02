"use strict";
/*
    data modifiers
        public
        private
        protected
*/
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
const p1 = new Character("Ryu", 10, 98);
console.log(p1);
p1.attack();
