

document.getElementById("user-form").onsubmit = function() {
    // Get the values from the input fields
    const firstName = document.getElementById("first_name").value;
    const middleInitial = document.getElementById("middle_initial").value;
    const lastName = document.getElementById("last_name").value;

    // Create the full name greeting
    const fullGreeting = `Welcome to Paws &amp; Pints Pub! ${firstName} ${middleInitial ? middleInitial + '. ' : ''}${lastName}`;
    
    // Update the greeting in the heading
    document.getElementById("greeting").textContent = fullGreeting;
    

    
    // Generate and display themed phrases
    let outputHTML = '';
    for (let i = 1; i <= 125; i++) {
        outputHTML += `${i}. Happy Hour Drinks<br>`;
    }
    
    document.getElementById("output").innerHTML = outputHTML;

    return true; // Allow the form to submit and reload the page
};
