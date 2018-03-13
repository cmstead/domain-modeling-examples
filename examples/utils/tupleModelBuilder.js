'use strict';

function toTitleCase(value) {
    return value.charAt(0).toUpperCase() + value.substr(1);
}

function buildTupleModel(tupleDefinition) {
    let localTupleDefinition = [];

    const getPropertyIndex =
        (propertyName) =>
            localTupleDefinition.indexOf(propertyName);

    const getValueByDefinitionProperty =
        (property) =>
            (tuple) =>
                tuple[getPropertyIndex(property)];

    let resultApi = {};

    tupleDefinition.forEach(function (tupleKey) {
        const apiKey = `get${toTitleCase(tupleKey)}`;
        const tupleProperty = Symbol(tupleKey);

        localTupleDefinition.push(tupleProperty);
        resultApi[apiKey] = getValueByDefinitionProperty(tupleProperty);
    });

    return resultApi;
}

module.exports = {
    buildTupleModel: buildTupleModel
}

