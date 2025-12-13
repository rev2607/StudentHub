# PDF Brochure Formatting Guide

## Font & Typography Specifications

### Standard Formatting Hierarchy

```
┌─────────────────────────────────────────────┐
│  PAGE TITLE (20pt, Bold, White on Blue)     │ ← College Name
├─────────────────────────────────────────────┤
│ SECTION HEADER (14pt, Bold, Dark Blue)      │ ← "About [College]"
├─────────────────────────────────────────────┤
│ Body Text (10pt, Normal, Dark Gray)         │ ← Main content
│ All paragraphs use this consistent font     │
├─────────────────────────────────────────────┤
│ StudentHub.in - Page X of Y (8pt, Gray)     │ ← Footer
└─────────────────────────────────────────────┘
```

## Font Sizes

| Element | Size | Weight | Color | Usage |
|---------|------|--------|-------|-------|
| Page Title | 20pt | Bold | White | College name on title page |
| Section Header | 14pt | Bold | Dark Blue (#003366) | Main section titles |
| Body Text | 10pt | Normal | Dark Gray (#282828) | All body content |
| Footer | 8pt | Normal | Light Gray (#808080) | Page numbers |

## Spacing Metrics

| Element | Spacing |
|---------|---------|
| Line Height | 5.5mm |
| Paragraph Gap | 3mm |
| Section Gap | 8mm |
| Page Margins | 15mm (all sides) |
| Top Margin | 15mm |
| Bottom Margin | 15mm |
| Left Margin | 15mm |
| Right Margin | 15mm |

## Color Palette

```
Dark Blue (Headers & Title Background)  : RGB(0, 51, 102)     #003366
Body Text (Dark Gray)                   : RGB(40, 40, 40)     #282828
Footer Text (Light Gray)                : RGB(128, 128, 128)  #808080
Title Background                        : RGB(0, 51, 102)     #003366
Title Text                              : RGB(255, 255, 255)  #FFFFFF
```

## Document Structure

### Page 1: Title Page
- Dark blue header bar with white text
- College name (20pt bold)
- "College Brochure 2025" subtitle
- Professional appearance

### Pages 2+: Content Pages
- Section headers in dark blue (14pt bold)
- Body text in dark gray (10pt regular)
- Automatic page breaks for long content
- Page numbers in footer

## Sample Layout

```
┌────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓  Indian Institute of Technology Bombay ▓ │
│ ▓                                          ▓ │
│ ▓         College Brochure 2025           ▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
└────────────────────────────────────────────┘
```

## Content Sections (Consistent Across All Colleges)

1. **About [College]**
   - History and background
   - Location and campus details
   - Key achievements

2. **Academic Programs & Fees**
   - Undergraduate programs
   - Postgraduate programs
   - Fee structure

3. **Admissions & Cutoffs**
   - Entrance exams
   - Cutoff scores
   - Reservation policy

4. **Placements & Career Outcomes**
   - Placement statistics
   - Average salaries
   - Top recruiting companies

5. **Rankings & Recognition**
   - NIRF rankings
   - International rankings
   - Accreditations

6. **Campus & Infrastructure**
   - Facilities overview
   - Libraries and labs
   - Residential amenities

7. **Faculty & Research**
   - Research areas
   - Faculty expertise
   - Innovation centers

8. **Student Life & Campus Culture**
   - Student clubs
   - Events and festivals
   - Sports facilities

9. **Vision & Global Outlook** (varies by college)
   - Future plans
   - International partnerships
   - Strategic goals

## PDF File Generation

### File Naming Convention
```
[College_Name]_Brochure.pdf

Examples:
- IIT_Bombay_Brochure.pdf
- IIT_Delhi_Brochure.pdf
- IIT_Madras_Brochure.pdf
- IIT_Hyderabad_Brochure.pdf
```

### Export Settings
- Format: PDF (A4 size)
- Orientation: Portrait
- Compression: Standard
- Font Embedding: Helvetica (standard)

## Quality Assurance Checklist

- [ ] All text is readable and properly formatted
- [ ] Font sizes are consistent within each section type
- [ ] Page breaks don't split content awkwardly
- [ ] Headers are properly bold and colored
- [ ] Footer appears on every page
- [ ] Margins are consistent throughout
- [ ] No text is cut off at page edges
- [ ] College name appears correctly on title page
- [ ] All content sections are included
- [ ] PDF file size is reasonable (< 5MB)

## Browser Compatibility

The PDF is generated using jsPDF library and should open correctly in:
- Google Chrome/Chromium
- Mozilla Firefox
- Microsoft Edge
- Safari
- Adobe Reader

## Troubleshooting

### Issue: Text appears misaligned
**Solution**: Ensure margins are set correctly (15mm all sides)

### Issue: Content splits across pages awkwardly
**Solution**: Check automatic page break logic in generateBrochurePDF()

### Issue: Font looks different than expected
**Solution**: Verify Helvetica font is being used (standard PDF font)

### Issue: Colors not printing correctly
**Solution**: Ensure RGB values match specification (Dark Blue: 0,51,102)

## Updates to Implementation

When updating PDF generation:

1. **Adding New Colleges**: Add new brochure data function and update `handleDownload()` in BrochureModal
2. **Changing Fonts**: Update constants in `pdfGenerator.ts` (BODY_FONT_SIZE, HEADER_FONT_SIZE, etc.)
3. **Modifying Colors**: Update color arrays (HEADER_COLOR, BODY_COLOR, FOOTER_COLOR)
4. **Adjusting Spacing**: Modify LINE_HEIGHT, SECTION_SPACING, etc. in `generateBrochurePDF()`
5. **Adding Images**: Implement new image handling in utility functions

## Example: Custom Section Addition

```typescript
// Add custom section
const sections = [
  { title: 'About IIT Bombay', key: 'about' as const },
  { title: 'Academic Programs', key: 'academics' as const },
  // Custom section
  { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
];

// Make sure BrochureData includes the new key
interface BrochureData {
  // ... existing fields ...
  scholarships?: string;
}
```

## Performance Notes

- PDF generation is done client-side (in browser)
- Large brochures (50+ pages) may take 2-3 seconds to generate
- Consider showing loading indicator during PDF generation
- PDF file size is typically 200-500KB depending on content length




<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes


=======
>>>>>>> Stashed changes

=======
>>>>>>> Stashed changes




