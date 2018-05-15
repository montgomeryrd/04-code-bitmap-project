'use strict';

const fs = require('fs');
const Bmp = require('./lib/bitmap');
const reader = require('./lib/reader');
const transform = require('./lib/transform');

// fs.readFile('./assets/bitmap.bmp', (err, data) => {
//     let bmp = new Bmp(data);
//     console.log(bmp)
// });

let type = process.argv[2];

if(type === 'invert') {
    reader.readAndWrite('./assets/bitmap.bmp', './assets/inverted.bmp', 'invert');
    reader.readAndWrite('./assets/bitmap.bmp', './__test__/assets/inverted.bmp', 'invert');
};

if(type === 'flip') {
    reader.readAndWrite('./assets/bitmap.bmp', './assets/flipped.bmp', 'flip');
    reader.readAndWrite('./assets/bitmap.bmp', './__test__/assets/flipped.bmp', 'flip');
};

if(type === 'shuffle') {
    reader.readAndWrite('./assets/bitmap.bmp', './assets/shuffled.bmp', 'shuffle');
    reader.readAndWrite('./assets/bitmap.bmp', './__test__/assets/shuffled.bmp', 'shuffle');
};

if(type === 'mono') {
    reader.readAndWrite('./assets/bitmap.bmp', './assets/monochromatic.bmp', 'mono');
    reader.readAndWrite('./assets/bitmap.bmp', './__test__/assets/monochromatic.bmp', 'mono');
};

if(type === 'red') {
    reader.readAndWrite('./assets/bitmap.bmp', './assets/moreRed.bmp', 'red');
    reader.readAndWrite('./assets/bitmap.bmp', './__test__/assets/moreRed.bmp', 'red');
};

if(type === 'blue') {
    reader.readAndWrite('./assets/bitmap.bmp', './assets/moreBlue.bmp', 'blue');
    reader.readAndWrite('./assets/bitmap.bmp', './__test__/assets/moreBlue.bmp', 'blue');
};