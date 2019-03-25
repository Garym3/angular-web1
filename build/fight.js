"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fight = /** @class */ (function () {
    function Fight(firstPokemon, secondPokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
        this.winner = undefined;
        this.hasStarted = false;
    }
    Fight.prototype.checkPokemonsStats = function () {
        for (var key in this.firstPokemon) {
            if (key == undefined || key == null)
                return false;
        }
        for (var key in this.secondPokemon) {
            if (key == undefined || key == null)
                return false;
        }
        return true;
    };
    Fight.prototype.start = function () {
        if (this.hasStarted) {
            console.log("Fight has already started.");
            return false;
        }
        if (!this.checkPokemonsStats()) {
            console.log("Attack didn't occurred as the combattants don't meet stats requirements.");
            return false;
        }
        this.hasStarted = true;
        while (this.firstPokemon.health > 0 && this.secondPokemon.health > 0) {
            if (this.isWon())
                return true;
            this.attackRound();
        }
        return true;
    };
    Fight.prototype.attackRound = function () {
        this.firstAttack();
        if (this.isWon())
            return;
        this.riposte();
    };
    Fight.prototype.isWon = function () {
        if (this.firstPokemon.health <= 0) {
            this.winner = this.secondPokemon;
            return true;
        }
        else if (this.secondPokemon.health <= 0) {
            this.winner = this.firstPokemon;
            return true;
        }
        return false;
    };
    Fight.prototype.firstAttack = function () {
        if (!this.hasStarted)
            return;
        if (this.firstPokemon.speed >= this.secondPokemon.speed) {
            this.secondPokemon.health -= this.firstPokemon.attack;
            console.log(this.secondPokemon.name + " took " + this.firstPokemon.attack + " damage from " + this.firstPokemon.name + ".");
        }
        else {
            this.firstPokemon.health -= this.secondPokemon.attack;
            console.log(this.firstPokemon.name + " took " + this.secondPokemon.attack + " damage from " + this.secondPokemon.name + ".");
        }
    };
    Fight.prototype.riposte = function () {
        if (!this.hasStarted)
            return;
        if (this.firstPokemon.speed >= this.secondPokemon.speed) {
            this.firstPokemon.health -= this.secondPokemon.attack;
            console.log(this.firstPokemon.name + " took " + this.secondPokemon.attack + " damage from " + this.secondPokemon.name + ".");
        }
        else {
            this.secondPokemon.health -= this.firstPokemon.attack;
            console.log(this.secondPokemon.name + " took " + this.firstPokemon.attack + " damage from " + this.firstPokemon.name + ".");
        }
    };
    return Fight;
}());
exports.Fight = Fight;
