function displaySanty(answer) {
    const santyImageDiv = document.getElementById('santyImage');
    let imageUrl;

    if (answer === 'yes') {
        imageUrl = 'Images/Happy_Snowman.png'; // Replace with the actual path to happy Santy image
    } else if(answer === 'no'){
        imageUrl = 'Images/Sad_Snowman.png'; // Replace with the actual path to sad Santy image
    } else if (answer === 'stop') { santyImageDiv.innerHTML = ""; // Clear the image return; // Exit the function early
    } 

    santyImageDiv.innerHTML = `<img src="${imageUrl}" alt="Santy Image">`;
}
