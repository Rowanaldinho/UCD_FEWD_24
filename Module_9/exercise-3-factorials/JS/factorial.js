function calculateFactorial(){
   let input = parseInt(prompt("Enter a number greater than 1 and less than 20")); //Prompt makes a Pop up appear on page asking to input a number between 1 and 20. All inputs on a webpage enter as string. parseInt changes the entry to number format
   
   if(isNaN(input) || input < 1 || input >20){  //This checks if the input is NotaNumber(NaN) e.g. if someone enters text like man or woman, that this function will identify that the input is not a number. || stands for or. So this function is doing 3 tasks
    // - checking that the entry is a number
    // - checking that the entry is a number that is greater than 1
    // - checking that the number entered is less than 20

       console.error('invalid input'); // if any of the above checks fail, then an error pops up saying 'Invalid Entry'
       return  // return statement is used to exit the function if the correct criteria is not met
   }
   function factorial(n){  //if the criteria are met, then it will continue to this part of the function where the calculation will take place. Function called 'Factorial' is declared with n assigned as the number
       let result = 1; // creates a variable called result and sets it = to 1
       for(let i = 1; i <= n; i++){ // a for loop is used. The loop is set to start at 1 i.e. let i = 1, the loop will continue until it reaches the value of n i.e. the number input in the prompt. I increases by 1 on each loop i.e. i++
           result *=i; //result calculation is result on each loop * i on each loop 
       }
       return result;
   }

   for(let i = 1; i <= input; i++){  //This is the output of the calculation
       console.log(`${i} != ${factorial(i)}`);
   }
   
}


calculateFactorial(); //this calls the calculateFactorial function to execute the code.