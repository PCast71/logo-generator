const { validateColor, generateSVG } = require('../logoGenerator');

describe('validateColor', () => {
    it('should return true for valid color keywords', () => {
        expect(validateColor('red')).toBe(true);
        expect(validateColor('blue')).toBe(true);
    });

    it('should return true for valid hexadecimal color codes', () => {
        expect(validateColor('#ff0000')).toBe(true);
        expect(validateColor('#00ff00')).toBe(true);
    });

    it('should return false for invalid color values', () => {
        expect(validateColor('notacolor')).toBe(false);
        expect(validateColor('#gggggg')).toBe(false);
    });
});

describe('generateSVG', () => {
    it('should generate SVG content with a circle', () => {
        const svgContent = generateSVG('A', 'red', 'circle', 'blue');
        expect(svgContent).toContain('<circle');
        expect(svgContent).toContain('fill="blue"');
        expect(svgContent).toContain('A</text>');
    });

    it('should generate SVG content with a triangle', () => {
        const svgContent = generateSVG('B', 'green', 'triangle', 'yellow');
        expect(svgContent).toContain('<polygon');
        expect(svgContent).toContain('fill="yellow"');
        expect(svgContent).toContain('B</text>');
    });

    it('should generate SVG content with a square', () => {
        const svgContent = generateSVG('C', 'black', 'square', 'white');
        expect(svgContent).toContain('<rect');
        expect(svgContent).toContain('fill="white"');
        expect(svgContent).toContain('C</text>');
    });
});