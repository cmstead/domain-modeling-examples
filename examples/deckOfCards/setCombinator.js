(function () {
    'use strict';

    const buildCombination =
        (currentList, values) =>
            values.map((value) => currentList.concat([value]));

    const buildPartialCombination =
        (newSet) =>
            (setCombination, value) =>
                setCombination.concat(buildCombination(value, newSet));

    const combineSets =
        (currentSet, newSet) =>
            currentSet.reduce(buildPartialCombination(newSet), []);

    const combineValues =
        (...args) =>
            args.reduce(combineSets, [[]]);

    const setCombinator = {
        combineValues: combineValues
    };

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = setCombinator;
    } else {
        window.setCombinator = setCombinator;
    }
})();