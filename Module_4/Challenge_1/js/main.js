//Declare function
function sumofoddnumbers(N) {
    let sum = 0; //Starts checking at 0
    for (let x = 0; x < N; x++) { //declares that 0 is the starting point of the loop. Once the loop starts it checks if the value is less than the value input for N. If true, the loop executes. If false, the loop stops.
        sum += (2 * x) + 1;  // any number multiplied by 2 is an even number. To get the odd numbers the loop multiplies the number in the series by 2 and then adds one to get the odd number.
    }
    console.log(sum);

}

sumofoddnumbers(4); //The loop will run for 4 iterations