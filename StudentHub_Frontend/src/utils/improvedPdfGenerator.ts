import jsPDF from 'jspdf';

export interface BrochureData {
  about: string;
  overview?: string;
  historicalSignificance?: string;
  academics: string;
  admissions: string;
  admissionsProcess?: string;
  applicationProcess?: string;
  placements: string;
  rankings: string;
  campus: string;
  facilities?: string;
  infrastructure?: string;
  faculty: string;
  research?: string;
  researchCenters?: string;
  campusLife: string;
  clubs?: string;
  events?: string;
  studentActivities?: string;
  scholarships?: string;
  financialAid?: string;
  collaborations?: string;
  globalOutreach?: string;
  sustainability?: string;
  greenInitiatives?: string;
  vision: string;
  strategicPriorities?: string;
  contactDetails?: string;
}

interface PdfConfig {
  pageWidth: number;
  pageHeight: number;
  marginLeft: number;
  marginRight: number;
  marginTop: number;
  marginBottom: number;
  contentWidth: number;
}

/**
 * Improved PDF Generator with Professional Formatting
 * - Better spacing and visual hierarchy
 * - Professional typography
 * - Optimized page breaks
 * - Better visual design
 */
export const generateImprovedBrochurePDF = (
  collegeName: string,
  data: BrochureData,
  sections: Array<{ title: string; key: keyof BrochureData }>
): jsPDF => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  
  // Page dimensions
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const marginLeft = 18;
  const marginRight = 18;
  const marginTop = 20;
  const marginBottom = 20;
  const contentWidth = pageWidth - marginLeft - marginRight;
  
  const config: PdfConfig = {
    pageWidth,
    pageHeight,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    contentWidth,
  };
  
  let yPos = marginTop;
  
  // Font sizes and spacing
  const TITLE_SIZE = 24;
  const HEADER_SIZE = 16;
  const SUBHEADER_SIZE = 12;
  const BODY_SIZE = 10;
  const FOOTER_SIZE = 8;
  
  const BODY_LINE_HEIGHT = 6;
  const SECTION_SPACING = 12;
  const PARAGRAPH_SPACING = 4;
  const HEADER_BOTTOM_SPACING = 6;
  
  // Colors
  const PRIMARY_COLOR = [0, 51, 102]; // Dark blue
  const SECONDARY_COLOR = [0, 102, 204]; // Lighter blue
  const HEADER_COLOR = [255, 255, 255]; // White
  const BODY_COLOR = [51, 51, 51]; // Dark gray
  const ACCENT_COLOR = [240, 240, 240]; // Light gray

  /**
   * Helper: Add text with word wrap
   */
  const addText = (
    text: string,
    fontSize: number,
    isBold: boolean = false,
    color: number[] = BODY_COLOR,
    alignment: 'left' | 'center' | 'right' = 'left'
  ): number => {
    pdf.setFontSize(fontSize);
    pdf.setTextColor(color[0], color[1], color[2]);
    pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
    
    const lines = pdf.splitTextToSize(text, contentWidth);
    const textHeight = lines.length * BODY_LINE_HEIGHT;
    
    // Auto page break
    if (yPos + textHeight > pageHeight - marginBottom - 15) {
      addPageFooter(pdf, config);
      pdf.addPage();
      yPos = marginTop;
    }
    
    lines.forEach((line: string, index: number) => {
      if (alignment === 'center') {
        pdf.text(line, pageWidth / 2, yPos, { align: 'center' });
      } else if (alignment === 'right') {
        pdf.text(line, marginLeft + contentWidth, yPos, { align: 'right' });
      } else {
        pdf.text(line, marginLeft, yPos);
      }
      yPos += BODY_LINE_HEIGHT;
    });
    
    return textHeight;
  };

  /**
   * Helper: Add section header with visual separation
   */
  const addSectionHeader = (title: string) => {
    // Space before header
    yPos += SECTION_SPACING;
    
    // Check if we need new page
    if (yPos + HEADER_SIZE + 15 > pageHeight - marginBottom) {
      addPageFooter(pdf, config);
      pdf.addPage();
      yPos = marginTop;
    }
    
    // Draw header background box
    pdf.setFillColor(...PRIMARY_COLOR);
    pdf.rect(
      marginLeft - 2,
      yPos - HEADER_SIZE / 2.5,
      contentWidth + 4,
      HEADER_SIZE + 2,
      'F'
    );
    
    // Add header text
    pdf.setFontSize(HEADER_SIZE);
    pdf.setTextColor(...HEADER_COLOR);
    pdf.setFont('helvetica', 'bold');
    const headerLines = pdf.splitTextToSize(title, contentWidth - 4);
    headerLines.forEach((line: string, index: number) => {
      pdf.text(line, marginLeft + 2, yPos + (index * BODY_LINE_HEIGHT), {
        align: 'left',
      });
    });
    
    yPos += HEADER_SIZE + HEADER_BOTTOM_SPACING;
  };

  /**
   * Helper: Add section content with consistent 10pt font
   */
  const addSectionContent = (content: string) => {
    // CRITICAL: Set font once for all content to ensure consistency
    pdf.setFontSize(BODY_SIZE);
    pdf.setTextColor(...BODY_COLOR);
    pdf.setFont('helvetica', 'normal');
    
    // Split content into paragraphs
    const paragraphs = content
      .split('\n\n')
      .filter((p) => p.trim().length > 0);
    
    paragraphs.forEach((paragraph, index) => {
      // Ensure font is set (redundant but safe)
      pdf.setFontSize(BODY_SIZE);
      pdf.setTextColor(...BODY_COLOR);
      pdf.setFont('helvetica', 'normal');
      
      // Skip special formatting for bullet points and lists
      const isListItem = paragraph.trim().startsWith('•') ||
                         paragraph.trim().startsWith('-') ||
                         paragraph.trim().startsWith('*');
      
      if (isListItem) {
        // Format as list item with bullet - SAME 10pt font
        const lines = pdf.splitTextToSize(
          paragraph.trim().replace(/^[•\-*]\s*/, ''),
          contentWidth - 8
        );
        
        pdf.setFontSize(BODY_SIZE); // Explicit 10pt
        pdf.setTextColor(...BODY_COLOR);
        pdf.setFont('helvetica', 'normal');
        
        lines.forEach((line: string, lineIndex: number) => {
          if (lineIndex === 0) {
            // First line with bullet
            pdf.text('•', marginLeft + 2, yPos);
            pdf.text(line, marginLeft + 8, yPos);
          } else {
            // Continuation lines
            pdf.text(line, marginLeft + 8, yPos);
          }
          yPos += BODY_LINE_HEIGHT;
          
          // Check for page break
          if (yPos > pageHeight - marginBottom - 15) {
            addPageFooter(pdf, config);
            pdf.addPage();
            yPos = marginTop;
            // RE-SET FONT after page break
            pdf.setFontSize(BODY_SIZE);
            pdf.setTextColor(...BODY_COLOR);
            pdf.setFont('helvetica', 'normal');
          }
        });
      } else {
        // Regular paragraph - SAME 10pt font
        const lines = pdf.splitTextToSize(paragraph.trim(), contentWidth);
        
        pdf.setFontSize(BODY_SIZE); // Explicit 10pt
        pdf.setTextColor(...BODY_COLOR);
        pdf.setFont('helvetica', 'normal');
        
        lines.forEach((line: string) => {
          pdf.text(line, marginLeft, yPos);
          yPos += BODY_LINE_HEIGHT;
          
          // Check for page break
          if (yPos > pageHeight - marginBottom - 15) {
            addPageFooter(pdf, config);
            pdf.addPage();
            yPos = marginTop;
            // RE-SET FONT after page break
            pdf.setFontSize(BODY_SIZE);
            pdf.setTextColor(...BODY_COLOR);
            pdf.setFont('helvetica', 'normal');
          }
        });
      }
      
      // Space after paragraph
      yPos += PARAGRAPH_SPACING;
    });
  };

  /**
   * Add page footer
   */
  const addPageFooter = (pdf: jsPDF, config: PdfConfig) => {
    const pageNum = pdf.getNumberOfPages();
    
    // Draw separator line
    pdf.setDrawColor(...PRIMARY_COLOR);
    pdf.setLineWidth(0.5);
    pdf.line(
      config.marginLeft,
      config.pageHeight - config.marginBottom - 8,
      config.pageWidth - config.marginRight,
      config.pageHeight - config.marginBottom - 8
    );
    
    // Add page number
    pdf.setFontSize(FOOTER_SIZE);
    pdf.setTextColor(...PRIMARY_COLOR);
    pdf.setFont('helvetica', 'normal');
    pdf.text(
      `StudentHub.in | Page ${pageNum}`,
      config.pageWidth / 2,
      config.pageHeight - config.marginBottom + 2,
      { align: 'center' }
    );
  };

  /**
   * Add title page with professional design
   */
  const addTitlePage = () => {
    // Main background color
    pdf.setFillColor(...PRIMARY_COLOR);
    pdf.rect(0, 0, pageWidth, 120, 'F');
    
    // Secondary accent bar
    pdf.setFillColor(...SECONDARY_COLOR);
    pdf.rect(0, 110, pageWidth, 10, 'F');
    
    // College name
    pdf.setFontSize(TITLE_SIZE);
    pdf.setTextColor(...HEADER_COLOR);
    pdf.setFont('helvetica', 'bold');
    
    const titleLines = pdf.splitTextToSize(collegeName, contentWidth - 20);
    let titleY = 40;
    titleLines.forEach((line: string) => {
      pdf.text(line, pageWidth / 2, titleY, { align: 'center' });
      titleY += 12;
    });
    
    // Subtitle - SAME SIZE AS BODY (10pt, not 12pt)
    pdf.setFontSize(BODY_SIZE);
    pdf.setTextColor(...HEADER_COLOR);
    pdf.setFont('helvetica', 'normal');
    pdf.text('College Brochure 2025', pageWidth / 2, titleY + 10, {
      align: 'center',
    });
    
    // Add some decorative spacing
    yPos = 140;
    
    // Add a brief introduction in the middle - SAME 10pt font
    pdf.setFontSize(BODY_SIZE);
    pdf.setTextColor(...BODY_COLOR);
    pdf.setFont('helvetica', 'normal');
    
    const introText = 'Explore comprehensive information about programs, admissions, campus life, and more.';
    const introLines = pdf.splitTextToSize(introText, contentWidth);
    introLines.forEach((line: string) => {
      pdf.text(line, pageWidth / 2, yPos, { align: 'center' });
      yPos += BODY_LINE_HEIGHT;
    });
    
    // Footer on title page
    addPageFooter(pdf, config);
    
    // Reset for next page
    pdf.addPage();
    yPos = marginTop;
  };

  // ===== MAIN PDF GENERATION =====

  // 1. Title page
  addTitlePage();
  
  // 2. Add all sections
  sections.forEach(({ title, key }) => {
    const content = data[key];
    if (content && content.trim().length > 0) {
      addSectionHeader(title);
      addSectionContent(content);
    }
  });
  
  // 3. Add footer to last page
  addPageFooter(pdf, config);
  
  // 4. Add page numbers to all pages
  const totalPages = pdf.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    pdf.setPage(i);
    // Footer already added during generation
  }
  
  return pdf;
};

/**
 * Clean and normalize brochure text
 */
export const cleanBrochureTextImproved = (text: string): string => {
  return text
    .trim()
    .replace(/\n{3,}/g, '\n\n') // Normalize multiple newlines
    .replace(/[ \t]+\n/g, '\n') // Remove trailing spaces
    .replace(/\n[ \t]+/g, '\n') // Remove leading spaces
    .split('\n')
    .map((line) => line.trim())
    .join('\n');
};

/**
 * Format brochure data with better structure
 */
export const formatBrochureData = (data: BrochureData): BrochureData => {
  const formatted: BrochureData = { ...data };
  
  // Ensure consistent line breaks and formatting
  Object.keys(formatted).forEach((key) => {
    const k = key as keyof BrochureData;
    if (formatted[k] && typeof formatted[k] === 'string') {
      formatted[k] = cleanBrochureTextImproved(formatted[k] as string);
    }
  });
  
  return formatted;
};

