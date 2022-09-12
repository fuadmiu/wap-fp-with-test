// sum all the numbers in an array of numbers
function sum(numbers) {
    return numbers.reduce((a, b) => a + b);
}

// multiply all the numbers in an array of numbers
function multiply(numbers) {
    return numbers.reduce((a, b) => a * b);
}

// computes the reversal of a string
function reverse(text) {
    let reversed = "";
    text.split('').map(char => reversed = char + reversed);
    return reversed;
}

// takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(words, i) {
    return words.filter(w => w.length > i);
}