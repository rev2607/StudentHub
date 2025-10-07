# IIT Roorkee College Page

## Overview
This is a comprehensive college detail page for IIT Roorkee built with React and TypeScript. The page displays detailed information about the college by fetching data from a JSON file.

## Features

### 🏫 Comprehensive College Information
- **Overview Tab**: General information, rankings, about section, historical background, campus branches, and student life
- **Courses & Fees Tab**: Detailed information about undergraduate, postgraduate, and doctoral programs with fees
- **Admissions Tab**: Admission processes, cutoff information, and reservation policies
- **Placements Tab**: Placement statistics, top recruiters, job profiles, and preparation support
- **Rankings Tab**: NIRF and international rankings
- **Facilities Tab**: Hostel, library, laboratory, sports, medical, and other amenities
- **Faculty Tab**: Faculty overview, departments, research centers, and collaborations
- **Reviews Tab**: Overall ratings, strengths, weaknesses, and ROI
- **Contact Tab**: Contact information and quick action buttons

### 🎨 Modern UI/UX
- Responsive design that works on all devices
- Clean, professional layout similar to popular college websites
- Tabbed navigation for easy information access
- Interactive elements with hover effects
- Loading states and error handling

### 📊 Data-Driven Content
- All information is fetched from `/data/colleges/iit_roorkee.json`
- Structured data format with comprehensive college details
- Easy to update and maintain

## File Structure

```
StudentHub_Frontend/src/
├── pages/Colleges/
│   └── IITRoorkeePage.tsx          # Main IIT Roorkee page component
├── services/
│   └── collegeDataService.ts       # Service for loading college data
└── public/data/colleges/
    └── iit_roorkee.json            # College data file
```

## Usage

### Accessing the Page
The IIT Roorkee page can be accessed via:
- Direct URL: `/colleges/iit-roorkee`
- From colleges list page: Click on "IIT Roorkee" card

### Data Structure
The page expects data in the following format (see `iit_roorkee.json`):
- Basic information (name, location, established year)
- Rankings (NIRF, QS, etc.)
- Courses and fees for all programs
- Admission processes and cutoffs
- Placement statistics and recruiters
- Facilities and infrastructure
- Faculty and departments
- Reviews and ratings
- Contact information

## Technical Implementation

### Technologies Used
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **React Router** for navigation

### Key Components
- `IITRoorkeePage`: Main page component with tab navigation
- `Tab`: Reusable tab component
- `InfoCard`: Displays key-value information
- `collegeDataService`: Handles data loading

### State Management
- Uses React hooks for local state management
- Loading states for better UX
- Error handling for failed data loads

## Customization

### Adding New Tabs
1. Add tab configuration to the `tabs` array
2. Create a new render function (e.g., `renderNewTab`)
3. Add case to the `renderTabContent` switch statement

### Updating Data
1. Modify the JSON file in `/public/data/colleges/iit_roorkee.json`
2. Update TypeScript interfaces in `collegeDataService.ts` if needed
3. The page will automatically reflect the changes

### Styling
- Uses Tailwind CSS utility classes
- Custom components can be styled by modifying the JSX
- Responsive design follows mobile-first approach

## Future Enhancements

### Planned Features
- [ ] News and updates section (currently ignored as requested)
- [ ] Interactive campus map
- [ ] Photo gallery
- [ ] Virtual tour integration
- [ ] Alumni testimonials
- [ ] Application form integration
- [ ] Comparison with other colleges

### Technical Improvements
- [ ] Add unit tests
- [ ] Implement caching for data
- [ ] Add SEO optimization
- [ ] Implement lazy loading for images
- [ ] Add accessibility features

## Contributing

1. Follow the existing code structure and naming conventions
2. Use TypeScript for type safety
3. Ensure responsive design
4. Test on multiple devices and browsers
5. Update documentation when adding new features

## Notes

- The news and updates section is currently ignored as per the initial requirements
- The page follows the structure and layout similar to popular college websites like Collegedunia and Careers360
- All data is currently static from JSON file - can be easily migrated to API calls in the future
