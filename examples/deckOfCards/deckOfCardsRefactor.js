'use strict';

const setCombinator = require('./setCombinator');

const suits = [
    'Hearts', 'Clubs', 'Diamonds', 'Spades'
];

const values = [
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
];

const suit = 'suit';
const value = 'value';

const cardTupleDefinition = [suit, value];

function getPropertyIndex(propertyName) {
    return cardTupleDefinition.indexOf(propertyName);
}

function getCardProperty(propertyName) {
    return function (cardTuple) {
        const propertyIndex = getPropertyIndex(propertyName);
        return cardTuple[propertyIndex];
    }
}

const getSuit = getCardProperty(suit);
const getValue = getCardProperty(value);

function buildCard(cardTuple) {
    return {
        suit: getSuit(cardTuple),
        value: getValue(cardTuple)
    };
}

function buildDeck() {
    return setCombinator
        .combineValues(suits, values)
        .map(buildCard);
}

module.exports = {
    buildDeck: buildDeck
}