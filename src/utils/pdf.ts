import jsPDF from "jspdf";

export default function downloadPDF(data: {
    title: string,
    value: number
}) {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text(data.title, 20, 20);

    doc.setFontSize(12);
    doc.text(`Value: ${data.value}`, 20, 35);

    doc.save("report.pdf");
};