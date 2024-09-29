// Alexander Ascencio, 09.29.2024
// Function to check if a number is divisible by a given divisor
function checkDivision(number, divisor) {
    return number % divisor === 0;
}

document.getElementById("generate-button").addEventListener("click", function() {
    let resultContainer = document.getElementById("result");
    resultContainer.innerHTML = ""; // Clear previous results

    const maxNumber = 140;
    
    // Define the divisors and corresponding words
    const divisors = [3, 5, 7]; // You can add more divisors here
    const words = ["Cold", "Pints!", "BANG!"]; // Corresponding words for each divisor

    const output = [];

    for (let iCounter = 1; iCounter <= maxNumber; iCounter++) {
        let text = `${iCounter}. `;
        
        let matchedWords = [];
        
        // Check divisibility for each divisor
        divisors.forEach((divisor, index) => {
            if (checkDivision(iCounter, divisor)) {
                matchedWords.push(words[index]);
            }
        });

        // Build the output based on which words were matched
        if (matchedWords.length > 0) {
            text += matchedWords.join(' '); // Join the matched words
        } else {
            text += "Tripple P's"; // Default word
        }

        output.push(text);
    }

    resultContainer.innerHTML = output.join('<br>');
});
