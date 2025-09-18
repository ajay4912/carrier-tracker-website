document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.querySelector('.resume-container').style.display = 'block';

    document.querySelector('.name').textContent = document.getElementById('fullName').value;
    document.querySelector('.role').textContent = document.getElementById('role').value;
    document.querySelector('.summary').textContent = document.getElementById('summary').value;

    document.querySelector('.email').textContent = "Email: " + document.getElementById('email').value;
    document.querySelector('.phone').textContent = "Phone: " + document.getElementById('phone').value;
    document.querySelector('.location').textContent = "Location: " + document.getElementById('location').value;

    const linkedin = document.getElementById('linkedin').value;
    document.querySelector('.linkedin').innerHTML = linkedin ? `LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a>` : '';

    const website = document.getElementById('website').value;
    document.querySelector('.website').innerHTML = website ? `Website: <a href="${website}" target="_blank">${website}</a>` : '';

    document.querySelector('.experience').textContent = document.getElementById('experience').value;
    document.querySelector('.education').textContent = document.getElementById('degree').value + " - " + document.getElementById('university').value + " (" + document.getElementById('graduationYear').value + ")";

    document.querySelector('.skills').textContent = document.getElementById('skills').value;
    document.querySelector('.projects').textContent = document.getElementById('projects').value;
    document.querySelector('.languages').textContent = document.getElementById('languages').value;
    document.querySelector('.interests').textContent = document.getElementById('interests').value;
});
