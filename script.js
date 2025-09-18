function showStudentPage() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('studentPage').classList.remove('hidden');
}

function showResumeForm() {
    document.getElementById('studentPage').classList.add('hidden');
    document.getElementById('resumeForm').classList.remove('hidden');
}

function saveInformation() {
    alert("Your Information saved successfully");
}

function goBackToHome() {
    document.querySelectorAll('.container').forEach(div => div.classList.add('hidden'));
    document.getElementById('home').classList.remove('hidden');
}

function showAboutPage() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('aboutPage').classList.remove('hidden');
}
