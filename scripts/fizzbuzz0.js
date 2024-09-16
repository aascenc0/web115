document.addEventListener("DOMContentLoaded", function () {
document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Collecting user inputs
    const firstName = document.getElementById("first_name").value;
    const middleInitial = document.getElementById("middle_initial").value;
    const lastName = document.getElementById("last_name").value;

    
    // Prompt the user to enter a number between 1 and 125
    let numberInput = parseInt(window.prompt("How high do you want to count ? "));

    
    // Validate the number input
    while (numberInput < 1 || numberInput > 125 || isNaN(numberInput)) {
        numberInput = parseInt(window.prompt("Invalid input. Please enter a number between 1 and 125:"));
    }
    
    // game logic for the number
    let numberOutput = "";
    for (let i = 1; i <= numberInput; i++) {
        
        if (i % 2 === 0) {
            numberOutput += "Paw's & Pints Pub - ${i}. - This number is Even<br>";
        } else {
            numberOutput += "Paw's & Pints Pub - ${i}. - This number is Odd<br>";
        }
    }

    // Display results
    document.getElementById("output").innerHTML = numberOutput;
});
});
