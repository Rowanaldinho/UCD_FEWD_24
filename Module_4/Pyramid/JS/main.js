//Write a function drawConsolePyramid(height) that draws a pyramid of the specified height in which the width of each row increases by two as you move downward on the console. Each of the rows should be centered with respect to the others, and the bottom line should begin at the left margin. Thus, calling drawConsolePyramid(8) should produce the following figure: 


let n = 8; //creates a variable and sets it to 8. This is the number of rows in the pyramid
let pyramid = document.getElementById("displayPyramid"); //I have added an element to the Pyramid.html webpage named 'displayPyramid'. This javascript sets a variable named 'pyramid' which stores data that will display in the 'displayPyramid' element 

for (let i = 1; i <= n; i++) { //starts the loop to add stars. Begins with 1 star and adds a star until it reaches the value stored in the n variable i.e. 8
    let str = "* "; //creates a string variable containing a star followed by a space
    let line = str.repeat(i * 2 - 1); // line 1 (2*1)-1...displays 1 star. Line 2 (2*2)-1....displays 3 stars. Continues until loop reaches 8 i.e. (8*2)-1....bottom row displays 15 stars

    // Create a paragraph element for each line and append it to the 'pyramid' 
    let p = document.createElement("p"); 
    p.textContent = line; //content of the line in the paragraph is the 'line' string created above
    pyramid.appendChild(p); //Appends the content of the paragraph to the 'displayPyramid' element on the webpage
}