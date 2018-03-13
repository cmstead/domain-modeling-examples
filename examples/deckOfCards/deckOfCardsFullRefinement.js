'use strict';

const { combineValues } = require('../utils/arrayCombinator');
const { buildTupleModel } = require('../utils/tupleModelBuilder');

const { getSuit, getFaceValue } = buildTupleModel(['suit', 'faceValue']);

const suits = [
    'Hearts', 'Clubs', 'Diamonds', 'Spades'
];

const faceValues = [
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
];

function buildCard(cardTuple) {
    return {
        suit: getSuit(cardTuple),
        faceValue: getFaceValue(cardTuple)
    };
}

function buildDeck() {
    const cardTuples = combineValues(suits, faceValues);
    
    return cardTuples.map(buildCard);
}

module.exports = {
    buildDeck: buildDeck
}