function showReport() {
    const date = document.getElementById("datePicker").value;
    const status = document.getElementById("status");
    const viewer = document.getElementById("viewer");

    if (!date) {
        status.innerText = "Please select a date.";
        return;
    }

    // Convert 2026-03-16 → 20260316
    const formattedDate = date.replace(/-/g, "");

    // Build your exact filename
    const fileName = `${formattedDate} kafanshan Daily Equipment Breakdown Report.pdf`;

    const pdfPath = `pdf/${fileName}`;

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
