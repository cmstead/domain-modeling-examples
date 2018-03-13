'use strict';

const suits = [
    'Hearts', 'Clubs', 'Diamonds', 'Spades'
];

const faceValues = [
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
];

function buildCard(suit, faceValue) {
    return {
        suit: suit,
        faceValue: faceValue
    };
}

function buildDeck() {
    let deck = [];

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < faceValues.length; j++) {
            deck.push(buildCard(suits[i], faceValues[j]));
        }
    }

    return deck;
}

module.exports = {
    buildDeck: buildDeck
}