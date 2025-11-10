import jsPDF from 'jspdf';

export interface BrochureData {
  about: string;
  academics: string;
  admissions: string;
  placements: string;
  rankings: string;
  campus: string;
  faculty: string;
  campusLife: string;
  sustainability?: string;
  vision: string;
}

// Universal PDF generation function with consistent formatting
export const generateBrochurePDF = (
  collegeName: string,
  data: BrochureData,
  sections: Array<{ title: string; key: keyof BrochureData }>
): jsPDF => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 15;
  let yPos = margin;
  
  // Consistent formatting settings
  const BODY_FONT_SIZE = 10;
  const HEADER_FONT_SIZE = 14;
  const TITLE_FONT_SIZE = 20;
  const FOOTER_FONT_SIZE = 8;
  
  const LINE_HEIGHT = 5.5;
  const SECTION_SPACING = 8;
  const PARAGRAPH_SPACING = 3;
  
  // Colors
  const HEADER_COLOR = [0, 51, 102]; // Dark blue
  const BODY_COLOR = [40, 40, 40]; // Dark gray
  const FOOTER_COLOR = [128, 128, 128]; // Light gray
  
  // Utility function to add text with word wrap
  const addText = (
    text: string,
    fontSize: number = BODY_FONT_SIZE,
    isBold: boolean = false,
    color: number[] = BODY_COLOR
  ): number => {
    pdf.setFontSize(fontSize);
    pdf.setTextColor(color[0], color[1], color[2]);
    
    if (isBold) {
      pdf.setFont('helvetica', 'bold');
    } else {
      pdf.setFont('helvetica', 'normal');
    }
    
    const lines = pdf.splitTextToSize(text, pageWidth - 2 * margin);
    const textHeight = lines.length * LINE_HEIGHT;
    
    // Check if we need a new page
    if (yPos + textHeight > pageHeight - margin - 10) {
      pdf.addPage();
      yPos = margin;
    }
    
    pdf.text(lines, margin, yPos, { align: 'left' });
    
    return textHeight + PARAGRAPH_SPACING;
  };

  // Add title page
  const addTitlePage = () => {
    pdf.setFillColor(...HEADER_COLOR);
    pdf.rect(0, 0, pageWidth, 50, 'F');
    
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(TITLE_FONT_SIZE);
    pdf.setFont('helvetica', 'bold');
    
    const titleLines = pdf.splitTextToSize(collegeName, pageWidth - 2 * margin);
    pdf.text(titleLines, pageWidth / 2, 25, { align: 'center' });
    
    pdf.setFontSize(BODY_FONT_SIZE);
    pdf.setFont('helvetica', 'normal');
    pdf.text('College Brochure 2025', pageWidth / 2, 40, { align: 'center' });
    
    pdf.setTextColor(...BODY_COLOR);
    yPos = 65;
  };

  // Add section with title
  const addSection = (title: string, content: string) => {
    // Check if we need a new page before section
    if (yPos > pageHeight - 60) {
      pdf.addPage();
      yPos = margin;
    }
    
    // Add section title
    yPos += addText(title, HEADER_FONT_SIZE, true, HEADER_COLOR);
    yPos += 2;
    
    // Add section content (all in same font as body)
    yPos += addText(content, BODY_FONT_SIZE, false, BODY_COLOR);
    yPos += SECTION_SPACING;
  };

  // Start document
  addTitlePage();

  // Add all sections
  sections.forEach(({ title, key }) => {
    const content = data[key];
    if (content) {
      addSection(title, content);
    }
  });

  // Add footers to all pages
  const totalPages = pdf.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    pdf.setPage(i);
    pdf.setFontSize(FOOTER_FONT_SIZE);
    pdf.setTextColor(...FOOTER_COLOR);
    pdf.setFont('helvetica', 'normal');
    pdf.text(
      `StudentHub.in - Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 8,
      { align: 'center' }
    );
  }

  return pdf;
};

// Helper function to clean text and ensure consistent formatting
export const cleanBrochureText = (text: string): string => {
  return text
    .trim()
    .replace(/\n\n+/g, '\n\n') // Normalize multiple newlines to double newlines
    .replace(/[ \t]+\n/g, '\n') // Remove trailing spaces
    .replace(/\n[ \t]+/g, '\n'); // Remove leading spaces after newlines
};




