function showReport() {
    const date = document.getElementById("datePicker").value;
    const pdfPath = `pdf/${date}.pdf`;

    fetch(pdfPath)
        .then(response => {
            if (!response.ok) {
                throw new Error("File not found");
            }
            document.getElementById("viewer").src = pdfPath;
        })
        .catch(() => {
            alert("No report available for this date");
        });
}
