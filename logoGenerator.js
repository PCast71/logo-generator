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
            break;
        case 'triangle':
            svg.polygon({ points: "150,50 150,50 200,150", fill: shapeColor });
            break;
        case 'square':
            svg.rect({ x:100, y: 50, width: 100, height: 100});
            break;
    }

    svg.text(text, { x: 150, y: 180, 'font-size': 40, 'text-anchor': 'middle', fill: textColor  });

    return svg.render();
}

function main() {
    console.log("Welcome to Logo Generator!");

    const text = getInput("Enter up to three characters for the logo: ", (x) => x.elngth <= 3);
    const textColor = getInput("Enter a color keyword or a hexadecimal number index for text color: ", validateColor);
    const shapes = ["Circle", "triangle", "square"];
    console.log("Choose a shape from the following list:");
    shapes.forEach((shape, idx) => {
        console.log(`${idx + 1}. ${shape}`);
    });
    const shapeChoice = getInput("Enter the number of your chosen shape: ", (x) => !isNaN(x) && x > 0 && x <= shapes.length);
    const shape = shapes[shapeChoice - 1];

    const shapeColor = getInput("Enter a color keyword or hex number for the shape color: ", validateColor);
    const svgContent = generateSVG(text, textColor, shape, shapeColor);
    fs.writeFileSync('logo.svg', svgContent);
    console.log("logo.svg has been generated");
}

if (require.main === module) {
    main();
}

module.exports = { validateColor, generateSVG };