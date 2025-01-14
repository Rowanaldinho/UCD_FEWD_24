// Prompt the user to enter 5 numbers
let numbers = [];
for (let i = 0; i < 5; i++) {
    let userInput = prompt(`Enter number ${i + 1}:`);
    let num = Number(userInput);

    if (!isNaN(num)) {
        numbers.push(num);
    } else {
        console.error("Invalid input. Please enter a valid number.");
        document.getElementById("output").textContent = "Invalid input. Please refresh the page and enter valid numbers.";
        break;
    }
}

if (numbers.length === 5) {
    // Calculate sum and average
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    let average = sum / numbers.length;

    // Print sum and average to the console
    console.log(`Sum: ${sum}`);
    console.log(`Average: ${average}`);

    // Display sum and average in the HTML document
    document.getElementById("output").innerHTML = `<p>Sum: ${sum}</p><p>Average: ${average}</p>`;
}
