document.getElementById("generate-button").addEventListener("click", function() {
    let resultContainer = document.getElementById("result");
    resultContainer.innerHTML = ""; // Clear previous results

    const maxNumber = 140;
    const output = [];
    const word1 = "Cold";
    const word2 = "Pints!";
    const word0 = "Tripple P's";
    
    for (let i = 1; i <= maxNumber; i++) {
        let text = `${i}. `;
        
        if (i % 3 === 0 && i % 5 === 0) {
            text += `${word1} ${word2}`; // For multiples of both 3 and 5
        } else if (i % 3 === 0) {
            text += word2; // For multiples of 3
        } else if (i % 5 === 0) {
            text += word1; // For multiples of 5
        } else {
            text += word0; // Default word
        }

        output.push(text);
    }

    resultContainer.innerHTML = output.join('<br>');
});
