import jsPDF from "jspdf";

export default function downloadPDF(data: {
    title: string,
    fields: {
        name: string,
        value: string
    }[]
}) {
    const doc = new jsPDF();
    
    const pageWidth = doc.internal.pageSize.getWidth();
    const maxWidth = pageWidth - 40;
    
    doc.setFontSize(20);
    doc.text(data.title, 20, 20);
    
    let currentY = 35; 
    const lineHeight = 7; 

    data.fields.forEach(({ name, value }) => {
        doc.setFontSize(12);
        const fullText = `${name}: ${value}`;
        const lines: string[] = doc.splitTextToSize(fullText, maxWidth);
        doc.text(lines, 20, currentY);
        currentY += lines.length * lineHeight;
    });    

    doc.save("report.pdf");
};