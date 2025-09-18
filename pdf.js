function showConfirmButton() {
    document.getElementById("confirmBtn").style.display = "block";
}

function confirmUpload() {
    alert("File uploaded successfully!");
}
<script>
        function showConfirmButton() {
            document.getElementById('confirmBtn').style.display = 'block';
        }

        function confirmUpload() {
            alert("File upload confirmed!");
        }

        function resetUpload() {
            document.getElementById('fileInput').value = "";
            document.getElementById('confirmBtn').style.display = 'none';
        }    
 </script>

