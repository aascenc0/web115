// Alexander Ascencio, 09.29.2024
// Function to check if a number is divisible by a given divisor
function checkDivision(number, divisor) {
    return number % divisor === 0;
}

document.getElementById("generate-button").addEventListener("click", function() {
    let resultContainer = document.getElementById("result");
    resultContainer.innerHTML = ""; // Clear previous results

    const maxNumber = 140;
    const output = [];
    const word1 = "Cold";
    const word2 = "Pints!";
    const word0 = "Tripple P's";
    
    const firstDivisor = 3;
    const secondDivisor = 5;
    
    for (let iCounter = 1; iCounter <= maxNumber; iCounter++) {
        let text = `${iCounter}. `;
        
        if (checkDivision(iCounter, firstDivisor) && checkDivision(iCounter, secondDivisor)) {
            text += `${word1} ${word2}`; // For multiples of both divisors
        } else if (checkDivision(iCounter, secondDivisor)) {
            text += word2; // For multiples of first divisor
        } else if (checkDivision(iCounter, firstDivisor)) {
            text += word1; // For multiples of second divisor
        } else {
            text += word0; // Default word
        }

        output.push(text);
    }

    resultContainer.innerHTML = output.join('<br>');
});
