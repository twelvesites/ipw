const { jsPDF } = window.jspdf;

document.addEventListener("DOMContentLoaded", () => {
    const certificateForm = document.getElementById("certificateForm");

    certificateForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const userName = document.getElementById("userName").value.trim();
        if (!userName) {
            alert("Please enter a name.");
            return;
        }

        const pdf = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: [800, 600],
        });

        const img = new Image();
        img.src = "certificate_template.jpg"; // Your template image path

        img.onload = () => {
            pdf.addImage(img, "JPEG", 0, 0, 800, 600);

            // Register and use the custom font
            pdf.addFont("GreatVibes-Regular.ttf", "GreatVibes", "normal");
            pdf.setFont("GreatVibes", "normal");
            pdf.setFontSize(48);

            // Add user's name
            pdf.text(userName, 400, 250, { align: "center" });

            pdf.save("certificate.pdf");
        };

        img.onerror = () => {
            alert("Failed to load the certificate template.");
        };
    });
});
