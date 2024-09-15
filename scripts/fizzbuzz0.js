document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("name-form");
    const greeting = document.getElementById("greeting");
    const outputContainer = document.getElementById("output-container");

    if (savedFirstName && savedLastName) {
        document.getElementById("greeting").textContent = `Welcome to Paws &amp; Pints Pub! ${savedFirstName} ${savedMiddleInitial ? savedMiddleInitial + '. ' : ''}${savedLastName}`;
    }
};

document.getElementById("user-form").onsubmit = function() {
    // Get the values from the input fields
    const firstName = document.getElementById("first_name").value;
    const middleInitial = document.getElementById("middle_initial").value;
    const lastName = document.getElementById("last_name").value;

    // Create the full name greeting
    const fullGreeting = `Welcome to Pints & Paws Pub! ${firstName} ${middleInitial ? middleInitial + '. ' : ''}${lastName}`;
    
    // Update the greeting in the heading
    document.getElementById("greeting").textContent = fullGreeting;
    
    // Store values in local storage
    localStorage.setItem("first_name", firstName);
    localStorage.setItem("middle_initial", middleInitial);
    localStorage.setItem("last_name", lastName);
    
    // Generate and display themed phrases
    let outputHTML = '';
    for (let i = 1; i <= 125; i++) {
        outputHTML += `${i}. Happy Hour<br>`;
    }
    
    document.getElementById("output").innerHTML = outputHTML;

    return true; // Allow the form to submit and reload the page
};
