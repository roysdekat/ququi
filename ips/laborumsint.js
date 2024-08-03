function parseIdentifier(source) {
    let index = 0; // Starting index; this could be passed as an argument or determined by the parsing logic.

    // Check if the character at the current index is a valid identifier start.
    if (isIdentifierStart(source.charCodeAt(index))) {
        console.log("Valid identifier start:", source.charAt(index));
        // Continue parsing the identifier...
    } else {
        console.log("Invalid identifier start:", source.charAt(index));
        // Handle error or continue with other parsing logic...
    }
}

// Example usage:
const sourceCode = "exampleVariable = 42;";
parseIdentifier(sourceCode); // Output: Valid identifier start: e
