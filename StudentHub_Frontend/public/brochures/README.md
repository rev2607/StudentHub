# College Brochures

This directory contains PDF brochures for various colleges.

## Adding Brochures

1. Place PDF files in this directory with the naming convention: `{College_Name}_Brochure.pdf`
2. Use underscores instead of spaces (e.g., `IIT_Madras_Brochure.pdf`)
3. Supported colleges:
   - IIT Madras
   - IIT Bombay
   - IIT Delhi
   - IIT Kanpur
   - IIT Kharagpur
   - IIT Roorkee
   - IIT Guwahati
   - IIT Hyderabad
   - IIT BHU Varanasi
   - NIT Trichy
   - VIT Vellore
   - BITS Pilani

## Backend API

Brochures can also be served via the backend API at:
- `/api/colleges/download/{college-slug}`

Example: `/api/colleges/download/iit-madras`

## Note

If a brochure file is not found, the modal will display: "Brochure currently unavailable."


