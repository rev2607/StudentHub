# Developer Reference: College Brochure PDF System

## Quick Start

### Using the PDF Generator

```typescript
import { generateBrochurePDF, BrochureData } from '../utils/pdfGenerator';

// 1. Prepare your brochure data
const collegeData: BrochureData = {
  about: 'Your college description...',
  academics: 'Academic programs...',
  admissions: 'Admissions info...',
  placements: 'Placement statistics...',
  rankings: 'Rankings...',
  campus: 'Campus details...',
  faculty: 'Faculty information...',
  campusLife: 'Student life...',
  vision: 'College vision...'
};

// 2. Define sections (in desired order)
const sections = [
  { title: 'About the College', key: 'about' as const },
  { title: 'Academic Programs', key: 'academics' as const },
  // ... more sections
];

// 3. Generate and save PDF
const pdf = generateBrochurePDF('College Name', collegeData, sections);
pdf.save('College_Name_Brochure.pdf');
```

## API Reference

### `generateBrochurePDF()`

```typescript
function generateBrochurePDF(
  collegeName: string,
  data: BrochureData,
  sections: Array<{ title: string; key: keyof BrochureData }>
): jsPDF
```

**Parameters:**
- `collegeName`: Name of the college (appears on title page)
- `data`: Object containing all content sections
- `sections`: Array defining which sections to include and their order

**Returns:** A jsPDF object ready to download

**Example:**
```typescript
const pdf = generateBrochurePDF(
  'Indian Institute of Technology Bombay',
  iitBombayData,
  iitBombaySections
);

// Download immediately
pdf.save('IIT_Bombay_Brochure.pdf');

// Or do something else with it
pdf.addPage();
pdf.text('Custom content', 10, 10);
```

### `cleanBrochureText()`

```typescript
function cleanBrochureText(text: string): string
```

**Purpose:** Normalizes text formatting and spacing

**Parameters:**
- `text`: Raw text content to clean

**Returns:** Cleaned text with normalized spacing

**Example:**
```typescript
const cleanedText = cleanBrochureText(rawContent);
```

### `BrochureData` Interface

```typescript
interface BrochureData {
  about: string;              // College overview
  academics: string;          // Academic programs and fees
  admissions: string;         // Admissions information
  placements: string;         // Placement statistics
  rankings: string;           // Rankings and recognition
  campus: string;             // Campus infrastructure
  faculty: string;            // Faculty and research
  campusLife: string;         // Student life and culture
  sustainability?: string;    // Optional: Sustainability efforts
  vision: string;             // College vision
}
```

## Constants

Located in `pdfGenerator.ts`:

```typescript
// Font sizes
BODY_FONT_SIZE = 10         // Main content text
HEADER_FONT_SIZE = 14       // Section headers
TITLE_FONT_SIZE = 20        // Page title
FOOTER_FONT_SIZE = 8        // Footer text

// Spacing (in mm)
LINE_HEIGHT = 5.5           // Space between lines
SECTION_SPACING = 8         // Space after sections
PARAGRAPH_SPACING = 3       // Space after paragraphs

// Colors (RGB)
HEADER_COLOR = [0, 51, 102]         // Dark blue
BODY_COLOR = [40, 40, 40]           // Dark gray
FOOTER_COLOR = [128, 128, 128]      // Light gray
```

## Common Tasks

### Task 1: Add a New College

**Step 1:** Create brochure data function (e.g., `getNewCollegeBrochureData()`)

```typescript
const getNewCollegeBrochureData = () => {
  return {
    about: 'College about...',
    academics: 'Academic programs...',
    // ... all fields
  };
};
```

**Step 2:** Create PDF generation function

```typescript
const generateNewCollegePDF = () => {
  const data = getNewCollegeBrochureData() as BrochureData;
  const sections = [
    { title: 'About New College', key: 'about' as const },
    // ... sections
  ];
  return generateBrochurePDF('New College Name', data, sections);
};
```

**Step 3:** Update `handleDownload()` to include new college

```typescript
if (collegeName.toLowerCase().includes('new college')) {
  setIsGeneratingPdf(true);
  try {
    const pdf = generateNewCollegePDF();
    pdf.save(`${collegeName.replace(/\s+/g, '_')}_Brochure.pdf`);
    onClose();
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsGeneratingPdf(false);
  }
  return;
}
```

### Task 2: Change Font Size

Update in `pdfGenerator.ts`:

```typescript
// Before
const BODY_FONT_SIZE = 10;

// After
const BODY_FONT_SIZE = 11;
```

All PDFs will automatically use the new size.

### Task 3: Change Colors

Update in `pdfGenerator.ts`:

```typescript
// Change header color to green
const HEADER_COLOR = [0, 100, 0];  // Dark green

// Change body text to lighter gray
const BODY_COLOR = [60, 60, 60];   // Lighter gray
```

### Task 4: Adjust Spacing

```typescript
// Increase line height for more spacious layout
const LINE_HEIGHT = 6.5;  // Default: 5.5

// Increase section spacing
const SECTION_SPACING = 12;  // Default: 8
```

### Task 5: Reorder Sections

```typescript
const sections = [
  // New order:
  { title: 'Rankings & Recognition', key: 'rankings' as const },
  { title: 'About IIT Bombay', key: 'about' as const },
  { title: 'Campus & Infrastructure', key: 'campus' as const },
  // ... rest in desired order
];
```

## Debugging

### Enable Console Logging

Add to `generateBrochurePDF()`:

```typescript
console.log(`Starting PDF generation for ${collegeName}`);
// ... in addText function
console.log(`Added text at Y=${yPos}`);
// ... in addSection function
console.log(`Added section: ${title}`);
```

### Check PDF Structure

```typescript
const pdf = generateBrochurePDF(...);

// Get metadata
console.log('Total pages:', pdf.getNumberOfPages());
console.log('Page width:', pdf.internal.pageSize.getWidth());
console.log('Page height:', pdf.internal.pageSize.getHeight());
```

### Validate Data

```typescript
// Before generating PDF
const data = getCollegeBrochureData();
Object.keys(data).forEach(key => {
  if (!data[key as keyof BrochureData]) {
    console.warn(`Missing data for: ${key}`);
  }
});
```

## Performance Tips

1. **Generate PDF on-demand**: Don't pre-generate PDFs
2. **Show loading state**: PDF generation may take 2-3 seconds
3. **Cache brochure data**: Don't refetch data on every download
4. **Minimize large content**: Keep individual sections under 500 words
5. **Use efficient font**: Helvetica is built-in, no external loading needed

## Error Handling

```typescript
try {
  const pdf = generateBrochurePDF(collegeName, data, sections);
  pdf.save(`${collegeName}_Brochure.pdf`);
} catch (error) {
  console.error('PDF generation failed:', error);
  
  if (error instanceof Error) {
    console.error('Error message:', error.message);
    console.error('Stack trace:', error.stack);
  }
  
  alert('Failed to generate brochure. Please try again.');
}
```

## Testing Checklist

```typescript
// Unit test example
describe('generateBrochurePDF', () => {
  it('should create a PDF with correct title', () => {
    const pdf = generateBrochurePDF('Test College', testData, testSections);
    expect(pdf.getNumberOfPages()).toBeGreaterThan(0);
  });

  it('should include all sections', () => {
    const pdf = generateBrochurePDF('Test College', testData, testSections);
    // Validate PDF content
  });

  it('should handle special characters', () => {
    const specialData = { ...testData, about: 'Special chars: é, ñ, ü' };
    const pdf = generateBrochurePDF('Test', specialData, testSections);
    expect(pdf).toBeDefined();
  });
});
```

## Useful Links

- [jsPDF Documentation](https://github.com/parallax/jsPDF)
- [Font Sizing Guide](https://en.wikipedia.org/wiki/Point_(typography))
- [Color Hex Values](https://htmlcolorcodes.com/)

## Migration from Old System

If migrating existing college brochures:

```typescript
// Old approach (per college)
const generateOldFormatPDF = () => { ... };

// New approach (centralized)
const generateNewFormatPDF = () => {
  return generateBrochurePDF(collegeName, data, sections);
};

// Simply call the new function instead
```

## File Locations

```
src/
├── utils/
│   └── pdfGenerator.ts          ← PDF utility functions
├── components/
│   └── BrochureModal.tsx        ← Modal component with generators
└── pages/
    └── Colleges/
        ├── IITBombayPage.tsx
        ├── IITDelhiPage.tsx
        ├── IITMadrasPage.tsx
        └── IITHyderabadPage.tsx
```

## Version History

### v2.0 (Current)
- Centralized PDF generation utility
- Consistent formatting across all colleges
- Improved code maintainability
- Reduced code duplication

### v1.0 (Legacy)
- Individual PDF generators per college
- Inconsistent formatting
- Duplicated code across implementations




<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes


