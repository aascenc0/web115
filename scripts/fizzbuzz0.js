document.getElementById("user-form").addEventListener("submit", function(event) {

    // Get the values from the input fields
    const firstName = document.getElementById("first_name").value;
    const middleInitial = document.getElementById("middle_initial").value;
    const lastName = document.getElementById("last_name").value;

    // Create the full name greeting
    const fullGreeting = `Welcome to Paws & Pints Pub! ${firstName} ${middleInitial ? middleInitial + '. ' : ''}${lastName}`;
    
    // Update the greeting in the heading
    document.getElementById("greeting").textContent = fullGreeting;
    
    // Generate and display themed phrases
    let outputHTML = '';
    for (let i = 1; i <= 125; i++) {
        outputHTML += `${i}. Happy Hour Drinks<br>`;
    }
    
    document.getElementById("output").innerHTML = outputHTML;
});
