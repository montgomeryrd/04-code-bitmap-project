'use strict';

const fs = require('fs');
const Bmp = require('./bitmap');
const transform = require('./transform');

const file = module.exports = {};

file.readAndWrite = function(input, output, transformation) {
    if(typeof(input) !== 'string' || typeof(output) !== 'string' || typeof(transformation) !== 'string'){
        return new Error('Invalid Input');
    }

    try {
        let inputData = fs.readFileSync(input);
        console.log(inputData);
    } catch(err) {
        console.error(err);
    }

    let image = new Bmp(inputData);
    let transformedData;

    switch(transformation) {
        case 'flip':
        transformedData = transform.flip(image);
        break;

        case 'invert':
        transformedData = transform.invert(image);
        break;

        case 'shuffle':
        transformedData = transform.shuffle(image);
        break;

        case 'mono':
        transformedData = transform.mono(image);
        break;

        default:
        return 'Invalid Transformation. Try: flip : invert : shuffle : mono';
    }

    console.log('Transformation === ', transformedData);

    try {
        fs.writeFileSync(output, transformedData.allData);
        return 'Successful Transformation';
    } catch(err) {
        console.error(err);
        return 'Unsuccessful Transformation';
    }
};