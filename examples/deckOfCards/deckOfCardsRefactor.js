'use strict';

const arrayCombinator = require('../utils/arrayCombinator');

const suits = [
    'Hearts', 'Clubs', 'Diamonds', 'Spades'
];

const values = [
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
];

const cardTupleDefinition = ['suit', 'faceValue'];

const [suit, faceValue] = cardTupleDefinition;


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
const getFaceValue = getCardProperty(faceValue);

function buildCard(cardTuple) {
    return {
        suit: getSuit(cardTuple),
        faceValue: getFaceValue(cardTuple)
    };
}

function buildDeck() {
    return arrayCombinator
        .combineValues(suits, values)
        .map(buildCard);
}

module.exports = {
    buildDeck: buildDeck
}