'use strict';

function functionToName(functionValue) {
    return functionValue.name === ''
        ? 'Anonymous function'
        : functionValue.name;
}

function prettifyValue(_, value) {
    return typeof value === 'function'
        ? functionToName(value)
        : value;
}

function prettyJson(obj) {
    return typeof obj === 'undefined'
        ? 'undefined'
        : JSON.stringify(obj, prettifyValue, 4);
}

module.exports = {
    prettyJson: prettyJson
}

