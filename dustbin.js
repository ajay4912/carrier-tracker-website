// Open Popup
function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// Close Popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

// Handle Form Submission
function submitApplication() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const resume = document.getElementById("resume").files[0];

    if (name && email && resume) {
        alert("Application Submitted!\nName: ${name}\nEmail: ${email}");
        closePopup();
    } else {
        alert("Please fill all fields before submitting.");
    }
}