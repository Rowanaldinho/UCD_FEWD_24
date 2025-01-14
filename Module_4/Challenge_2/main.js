
function drawConsolePyramid(height) {
    for (let j = 1; j <= height; j++) {
        let spaces = ' '.repeat(height-j);
        let stars = '*'.repeat(2 *j-1);
        console.log(spaces + stars);
    }
}
drawConsolePyramid(8);