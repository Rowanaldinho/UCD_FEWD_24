// Prompt the user to enter a number
let userInput = prompt("Enter a number of stars:");

// Convert the input to a number
let numStars = Number(userInput);

// Check if the input is a valid non-negative number
if (!isNaN(numStars) && numStars >= 0) {
    // Generate the stars
    let stars = "";
    for (let i = 0; i < numStars; i++) {
        stars += "*";
    }
    
    // Print stars to the console
    console.log(stars);
    
    // Display stars in the HTML document
    document.getElementById("stars").textContent = stars;
} else {
    console.error("Invalid input. Please enter a non-negative number.");
    document.getElementById("stars").textContent = "Invalid input. Please enter a non-negative number.";
}
