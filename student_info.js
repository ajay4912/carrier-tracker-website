function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
document.getElementById("pdfFile").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        document.getElementById("fileName").textContent = "Selected file: " + file.name;
        alert("File uploaded successfully!");
    }
});