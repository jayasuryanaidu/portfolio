// Function to calculate age
function calculateAge(birthYear) {
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;
    return age;
}

// Update age in the HTML
document.getElementById("age").innerHTML = calculateAge(2001);