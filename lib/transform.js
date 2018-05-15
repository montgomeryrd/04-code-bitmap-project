'use strict';

const fs = require('fs');
const Bmp = require('./bitmap');

const transformation = module.exports = {};

transformation.flip = function(bmp) {
    let flipped = bmp.pixelArray.reverse();
    bmp.pixelArray = flipped;
    bmp.pixelArray.slice(54);
    return bmp;
};

transformation.invert = function(bmp) {
    if(bmp.offset === 54) {
        for(let i = 54 ; i < bmp.allData.length ; i ++) {
            let inverted = 255 - bmp.allData[i];
            bmp.allData.writeUInt8(inverted, i);
        }
    } else {
        console.log(bmp.colors);
        bmp.colors.forEach((value, index) => {
            bmp.colors.writeUInt8((255 - value), index);
        });
    }
    return bmp;
};

transformation.shuffle = function(bmp) {
    let array = bmp.pixelArray;
    for(let i = array.length - 1 ; i > 0 ; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    bmp.pixelArray = array;
    bmp.pixelArray.slice(54);
    return bmp;
};

transformation.mono = function(bmp) {
    for(let i = 0 ; i < bmp.colors.length ; i +=4) {
        let x = ((bmp.colors[i] + bmp.colors[i + 2] + bmp.colors[i + 1] + bmp.colors[i + 1]) / 3);
        bmp.colors[i] = x;
        bmp.colors[i + 1] = x;
        bmp.colors[i + 2] = x;
    }
    return bmp;
};