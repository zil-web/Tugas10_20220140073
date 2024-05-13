// JavaScript function to show hobby based on checkbox selection
function showHobby() {
    var gameCheckbox = document.getElementsByName("olahraga")[0];
    var makanCheckbox = document.getElementsByName("nonton film")[0];
    var tidurCheckbox = document.getElementsByName("jajan")[0];
    var gameDiv = document.getElementById("olahraga");
    var makanDiv = document.getElementById("nonton fil");
    var tidurDiv = document.getElementById("jajan");
    
    // Display Hobby section if any checkbox is checked
    if (gameCheckbox.checked || makanCheckbox.checked || tidurCheckbox.checked) {
        document.getElementById("Hobby").style.display = "block";
        
        // Show/hide individual hobby divs based on checkbox selection
        if (gameCheckbox.checked) {
            gameDiv.style.display = "block";
        } else {
            gameDiv.style.display = "none";
        }
        if (makanCheckbox.checked) {
            makanDiv.style.display = "block";
        } else {
            makanDiv.style.display = "none";
        }
        if (tidurCheckbox.checked) {
            tidurDiv.style.display = "block";
        } else {
            tidurDiv.style.display = "none";
        }
    } else {
        // Hide Hobby section only if no checkbox is checked
        document.getElementById("Hobby").style.display = "none";
    }
}
