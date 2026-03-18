// 1. Get your elements once at the top of the script
const dateInput = document.getElementById("reportDate");
const pdfViewer = document.getElementById("pdfViewer");
const status = document.getElementById("status"); // Optional: for error messages

// 2. Add the listener directly to the input
dateInput.addEventListener("input", () => {
    const rawDate = dateInput.value;

    // If the input is cleared, clear the viewer
    if (!rawDate) {
        pdfViewer.src = "";
        if (status) status.innerText = "Please select a date.";
        return;
    }

    // Convert "2026-03-18" directly to "20260318" (Safer than using new Date())
    const formattedDate = rawDate.replace(/-/g, "");

    // Construct PDF path (Matches your naming convention)
    const fileName = `${formattedDate} kafanshan Daily Equipment Breakdown Report.pdf`;
    const pdfPath = `pdf/${fileName}`;

    // Update the viewer
    pdfViewer.src = pdfPath;

    // Optional: Check if the file actually exists
    fetch(pdfPath, { method: 'HEAD' })
        .then(res => {
            if (res.ok) {
                if (status) status.innerText = "";
            } else {
                if (status) status.innerText = "Report not found for this date.";
                // Optionally clear viewer if not found: pdfViewer.src = "";
            }
        })
        .catch(() => {
            if (status) status.innerText = "Error loading report.";
        });
});
