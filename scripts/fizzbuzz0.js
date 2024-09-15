document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Collecting user inputs
    const firstName = document.getElementById("first_name").value;
    const middleInitial = document.getElementById("middle_initial").value;
    const lastName = document.getElementById("last_name").value;

    // Prompt the user to enter a number between 1 and 125
    let numberInput = parseInt(window.prompt("Please enter a number between 1 and 125:"));
    
    // Validate the number input
    while (numberInput < 1 || numberInput > 125 || isNaN(numberInput)) {
        numberInput = parseInt(window.prompt("Invalid input. Please enter a number between 1 and 125:"));
    }

    // Create full name
    const fullName = `${firstName} ${middleInitial ? middleInitial + "."} ${lastName}`.trim;
    
    // Update the welcome message
    document.getElementById("welcome-message").innerText = "Welcome to Paws &amp; Pints Pub! ${fullName}!";
    
    // game logic for the number
    let gameOutput = "";
    for (let i = 1; i <= numberInput; i++) {
        if (i % 2 === 0) {
            gameOutput += "${i} - even<br>";
        } else {
            gameOutput += "{i} - odd<br>";
        }
    }
    
    // Prepare the additional lines of output related to the theme
    let themeOutput = "";
    for (let i = 1; i <= 125; i++) {
        themeOutput += "${i}. Happy Hour Drinks!<br>";
    }

    // Display results
    document.getElementById("output").innerHTML = gameOutput + "<br>" + themeOutput;
});
