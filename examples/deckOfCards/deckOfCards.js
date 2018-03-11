'use strict';

const suits = [
    'Hearts', 'Clubs', 'Diamonds', 'Spades'
];

const values = [
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
];

function buildCard(suit, value) {
    return {
        suit: suit,
        value: value
    };
}

function buildDeck() {
    let deck = [];

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(buildCard(suits[i], values[j]));
        }
    }

    return deck;
}

module.exports = {
    buildDeck: buildDeck
}