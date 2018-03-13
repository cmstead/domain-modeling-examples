'use strict';

const { prettyJson } = require('./utils/utils');
const deckOfCards = require('../examples/deckOfCards/deckOfCardsFullRefinement');

require('./utils/approvals-config');

describe('deckOfCardsCreation', function () {
    
    
    it('should create a deck of cards', function () {
        const finalDeck = deckOfCards.buildDeck();

        this.verify(prettyJson(finalDeck));
    });
    

});
