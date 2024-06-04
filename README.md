# logo-generator

This is a command-line application that generates an SVG logo based on user input. Users can specify text, text color, shape, and shape color, and the application will create an SVG file named `logo.svg`.

## Features

- Accepts up to three characters of text for the logo.
- Allows specifying text color as a color keyword or hexadecimal number.
- Provides a choice of shapes: circle, triangle, or square.
- Allows specifying shape color as a color keyword or hexadecimal number.
- Generates a 300x200 pixel SVG file named `logo.svg`.

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the project files.

    ```sh
    git clone https: git@github.com:PCast71/logo-generator.git
    cd logo-generator
    ```

2. Install the required dependencies.

    ```sh
    npm install
    ```

## Usage

1. Run the application using Node.js.

    ```sh
    node logoGenerator.js
    ```

2. Follow the prompts to enter the text, text color, shape, and shape color.

3. The application will generate an `logo.svg` file in the project directory.

4. Open the `logo.svg` file in a web browser to view the generated logo.

    - On Windows:
        ```sh
        start logo.svg
        ```

    - On macOS:
        ```sh
        open logo.svg
        ```

    - On Linux:
        ```sh
        xdg-open logo.svg
        ```

## Running Tests

This project uses Jest for testing. To run the tests, use the following command:

```sh\

Example
sh
Copy code
$ node logoGenerator.js
Welcome to the Logo Generator!
Enter up to three characters for the logo text: A
Enter a color keyword or hexadecimal number for the text color: red
Choose a shape from the following list:
1. circle
2. triangle
3. square
Enter the number of your chosen shape: 1
Enter a color keyword or hexadecimal number for the shape's color: blue
Generated logo.svg
npm test

## Walkthrough Video Link

https://drive.google.com/file/d/1JSZJcxfAesuY8VihWZW1faVHtC6uDkci/view?usp=drive_link

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

Acknowledgements
Node.js
Jest
readline-sync
