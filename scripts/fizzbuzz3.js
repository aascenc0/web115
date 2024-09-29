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
    const word3 = "BANG!";
    const word0 = "Tripple P's";
    
    const firstDivisor = 3;
    const secondDivisor = 5;
    const thirdDivisor = 7;
    
    for (let iCounter = 1; iCounter <= maxNumber; iCounter++) {
        let text = `${iCounter}. `;
        
        if (checkDivision(iCounter, firstDivisor) && checkDivision(iCounter, secondDivisor) && checkDivision(iCounter, thirdDivisor)) {
            text += `${word1} ${word2} ${word3}`; // For multiples of all three divisors
        } else if (checkDivision(iCounter, firstDivisor)) {
            text += word2; // For multiples of first divisor
        } else if (checkDivision(iCounter, secondDivisor)) {
            text += word1; // For multiples of second divisor
        } else if (checkDivision(iCounter, thirdDivisor)) {
            text += word3; // For multiples of third divisor
        } else {
            text += word0; // Default word
        }

        output.push(text);
    }

    resultContainer.innerHTML = output.join('<br>');
});
