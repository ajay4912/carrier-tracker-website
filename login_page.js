const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
function showPopup() {
    document.getElementById("overlay").style.display = "flex";
}

function closePopup() {
    document.getElementById("overlay").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    // Select the continue button for students
    const studentContinueBtn = document.querySelector(".sign-in button");
    
    studentContinueBtn.addEventListener("click", function (event) {
        let name = document.querySelector('.sign-in input[type="name"]').value.trim();
        let email = document.querySelector('.sign-in input[type="email"]').value.trim();
        let password = document.querySelector('.sign-in input[type="password"]').value.trim();

        if (name === "" || email === "" || password === "") {
            alert("⚠️ Please fill out all required fields: Name, Email, and Password.");
            event.preventDefault(); // Stop navigation if fields are empty
        }
    });
});


    