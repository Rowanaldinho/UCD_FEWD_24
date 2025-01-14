// Prompt the user to enter an integer value
let userInput = prompt("Enter an integer value between 1 and 20:");

// Convert the input to a number
let num = Number(userInput);

// Function to calculate factorial
function factorial(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}

// Check if the input is a valid number and within the specified range
if (!isNaN(num) && num > 1 && num < 20) {
    let output = "";
    
    // Calculate factorial for the entered value and every subsequent value back to 1
    for (let i = num; i >= 1; i--) {
        output += `${i}! = ${factorial(i)}<br>`;
    }

    // Display the output in the HTML document
    document.getElementById("output").innerHTML = output;

    // Print the output to the console
    console.log(output.replace(/<br>/g, '\n'));
} else {
    let errorMsg = "Invalid input. Please enter a number greater than 1 and less
}
