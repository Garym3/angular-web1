"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("../pokemon");
var fight_1 = require("../fight");
test('Pokemon should have a name', function () {
    var pokemon = new pokemon_1.Pokemon("Pikachu", 100, 90, 50, 40, 50, 50);
    expect(pokemon.name !== undefined && pokemon.name.length > 0).toBe(true);
});
test('Pokemon should not have a name', function () {
    var pokemon = new pokemon_1.Pokemon("", 100, 90, 50, 40, 50, 50);
    expect(pokemon.name === undefined || pokemon.name.length <= 0).toBe(true);
});
test('Fight should start', function () {
    var pickachu = new pokemon_1.Pokemon("Pikachu", 100, 90, 50, 40, 50, 50);
    var bulbizar = new pokemon_1.Pokemon("Bulbizar", 100, 45, 65, 49, 65, 45);
    var fight = new fight_1.Fight(pickachu, bulbizar);
    fight.start();
    expect(fight.hasStarted).toBe(true);
});
test('Fight should not start', function () {
    var pickachu = new pokemon_1.Pokemon("Pikachu", 100, 90, 50, 40, 50, 50);
    var bulbizar = new pokemon_1.Pokemon("Bulbizar", 100, 45, 65, 49, 65, undefined);
    var fight = new fight_1.Fight(pickachu, bulbizar);
    fight.start();
    expect(fight.hasStarted).toBe(false);
});
test('Pikachu should have lost', function () {
    var pickachu = new pokemon_1.Pokemon("Pikachu", 100, 90, 50, 40, 50, 50);
    var charizard = new pokemon_1.Pokemon("Charizard", 100, 100, 109, 78, 85, 109);
    var fight = new fight_1.Fight(pickachu, charizard);
    fight.firstAttack();
    fight.winner = fight.secondPokemon;
    var isOver = fight.start();
    expect(isOver).toBe(true);
    expect(fight.winner === charizard).toBe(true);
});
