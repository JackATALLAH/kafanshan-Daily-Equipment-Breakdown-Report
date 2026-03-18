const pdfViewer = document.getElementById("pdfViewer");

// Initialize the always-open calendar
flatpickr("#reportDate", {
    inline: true,        // This keeps the calendar open always
    dateFormat: "Y-m-d", // Standard format: 2026-03-18
    defaultDate: "today", // Optional: automatically select today
    
    // This runs every time you click a date in the open calendar
    onChange: function(selectedDates, dateStr) {
        if (!dateStr) {
            pdfViewer.src = "";
            return;
        }

        // Convert "2026-03-18" to "20260318"
        const formattedDate = dateStr.replace(/-/g, "");

        // Construct PDF path
        const fileName = `${formattedDate} kafanshan Daily Equipment Breakdown Report.pdf`;
        const pdfPath = `pdf/${fileName}`;

        // Load PDF
        pdfViewer.src = pdfPath;
    }
});
