const readlineSync = require('readline-sync');
const fs = require('fs');

const colorKeywords = ["black", "white", "red", "green", "blue", "yellow", "cyan", "magenta", "gray", "grey", "silver", "maroon", "olive", "purple", "teal", "navy"];
const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

function validateColor(color) {
    return colorKeywords.includes(color) || hexColorRegex.test(color);
}

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
    let shapeElement;
    switch (shape) {
        case 'circle':
            shapeElement = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            shapeElement = `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
            break;
        case 'square':
            shapeElement = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
            break;
    }

    const svgContent = `
    <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        ${shapeElement}
        <text x="150" y="180" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;

    return svgContent;
}

function main() {
    console.log("Welcome to the Logo Generator!");

    const text = getInput("Enter up to three characters for the logo text: ", (x) => x.length <= 3);
    const textColor = getInput("Enter a color keyword or hexadecimal number for the text color: ", validateColor);

    const shapes = ["circle", "triangle", "square"];
    console.log("Choose a shape from the following list:");
    shapes.forEach((shape, idx) => {
        console.log(`${idx + 1}. ${shape}`);
    });
    const shapeChoice = getInput("Enter the number of your chosen shape: ", (x) => !isNaN(x) && x > 0 && x <= shapes.length);
    const shape = shapes[shapeChoice - 1];

    const shapeColor = getInput("Enter a color keyword or hexadecimal number for the shape's color: ", validateColor);

    const svgContent = generateSVG(text, textColor, shape, shapeColor);
    fs.writeFileSync('logo.svg', svgContent);

    console.log("Generated logo.svg");
}

if (require.main === module) {
    main();
}

module.exports = { validateColor, generateSVG };