
document.getElementById("myForm").addEventListener("submit", function(event){
    // Prevent form submission
    event.preventDefault();

    // Get form elements
    const fname = document.getElementById("FName").value;
    const lname = document.getElementById("LName").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("Pass").value;

    // Check if any field is empty
    if (fname === "" || lname === "" || email === "" || pass === ""){
        // Display error message
        document.getElementById("error-message").style.display = "block";
    } else {
        // Hide error message (if any)
        document.getElementById("error-message").style.display = "none";
        this.submit();
    }
    

    
        // Submit the form (if all fields are filled)
    

});



// function validateForm(){
//     const fname = document.getElementById("FName").value;
//     const lname = document.getElementById("LName").value;
//     const email = document.getElementById("email").value;
//     const pass = document.getElementById("Pass").value;

//     // Check if any inpute field is empty
//     if (fname === "" || lname === "" || email === "" || pass === ""){
//         alert("Please fill in all fields.");
//         return false;
//     }

//     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailPattern.test(email)) {
//         alert ("Please enter a valid email address.");
//         return false;
//     }

//     return true;
// }
