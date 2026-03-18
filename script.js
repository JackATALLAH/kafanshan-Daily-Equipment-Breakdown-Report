function showReport() {
    const dateInput = document.getElementById("reportDate");
    const pdfViewer = document.getElementById("pdfViewer");
    dateInput.addEventListener("input", () => {
    // Format date as YYYYMMDD
    const date = new Date(dateInput.value);
    if (!dateInput.value) {
        pdfViewer.src = "";
        return;
    }

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${yyyy}${mm}${dd}`;

    // Construct PDF path
    const pdfPath = `pdf/${formattedDate} kafanshan Daily Equipment Breakdown Report.pdf`;

    // Load PDF in iframe immediately
    pdfViewer.src = pdfPath;
});
