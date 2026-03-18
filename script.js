function showReport() {
    const date = document.getElementById("datePicker").value;
    const status = document.getElementById("status");
    const viewer = document.getElementById("viewer");

    if (!date) {
        status.innerText = "Please select a date.";
        return;
    }

    const formattedDate = date.replace(/-/g, "");

    const pdfPath = `pdf/${formattedDate}.pdf`;

    fetch(pdfPath)
        .then(response => {
            if (!response.ok) throw new Error();
            viewer.src = pdfPath;
            status.innerText = "";
        })
        .catch(() => {
            viewer.src = "";
            status.innerText = "No report available for this date.";
        });
}
