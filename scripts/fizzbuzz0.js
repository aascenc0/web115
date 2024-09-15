document.getElementById('name-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collecting user inputs
    const firstName = document.getElementById('first_name').value;
    const middleInitial = document.getElementById('middle_initial').value;
    const lastName = document.getElementById('last_name').value;
    const numberInput = parseInt(document.getElementById('number_input').value);
    
    // Create full name
    const fullName = `${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}`.trim();
    
    // Update the welcome message
    document.getElementById('welcome-message').innerText = `Welcome to Paws &amp; Pints Pub! ${fullName}!`;
    
    // FizzBuzz logic for the number
    let fizzBuzzOutput = '';
    for (let i = 1; i <= numberInput; i++) {
        if (i % 2 === 0) {
            fizzBuzzOutput += `${i} - even<br>`;
        } else {
            fizzBuzzOutput += `${i} - odd<br>`;
        }
    }
    
    // Prepare the additional lines of output related to the theme
    let themeOutput = '';
    for (let i = 1; i <= 125; i++) {
        themeOutput += `${i}. Happy Hour Drinks!<br>`;
    }

    // Display results
    document.getElementById('output').innerHTML = fizzBuzzOutput + '<br>' + themeOutput;
});
