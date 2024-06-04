const readlineSync = require('readline-sync');
const fs = require('fs');
const svgBuilder = require('svg-builder');
const colorKeywords = ['black', 'white', 'red', 'green', 'blue', 'yellow', 'cyan', 'magenta', 'gray', 'grey', 'silver', 'maroon', 'olive', 'purple', 'teal', 'navy'];
const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

function getInput(prompt, validate) {
    while (true) {
        const value = readlineSync.question(prompt);
        if (validate && !validate(value)) {
            console.log("Invalid input. Please try again.");
        } else {
            return value;
        }
    }
}

function generateSVG(text, textColor, shape, shapeColor) {
    const svg = svgBuilder.width(300).height(200);

    switch (shape) {
        case 'circle':
            svg.circle({ cx: 150, cy: 100, r: 50, fill: shapeColor });
    }
}