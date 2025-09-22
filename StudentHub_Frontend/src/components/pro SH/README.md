# StudentHub.IN - Exams Portal

A comprehensive examination dates portal built with React, TypeScript, and Vite. This application helps students stay updated with all important examination dates, deadlines, and related information.

## 🚀 Features

- **📅 Exam Dates Display**: View upcoming examination dates with countdown timers
- **🔍 Advanced Filtering**: Filter exams by category, level, and search terms
- **📱 Responsive Design**: Fully responsive design that works on all devices
- **🎨 Modern UI**: Clean, professional interface matching the StudentHub.IN brand
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🔧 TypeScript**: Full type safety and better development experience

## 📋 Exam Categories

- Engineering (JEE Main, EAMCET, KCET, BITSAT, GATE)
- Medical (NEET)
- Management (CAT)
- Government (UPSC CSE)
- Defense (NDA)
- Law (CLAT)
- And more...

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Development**: ESLint + TypeScript strict mode

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd studenthub-exams
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Exams.tsx       # Main exams component
│   ├── ExamCard.tsx    # Individual exam card
│   └── ExamFilters.tsx # Filtering component
├── data/               # Mock data
│   └── examsData.ts    # Exam information
├── types/              # TypeScript type definitions
│   └── exam.ts         # Exam-related types
├── App.tsx             # Main app component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎨 Design Features

- **Color Scheme**: Green gradient matching StudentHub.IN branding
- **Typography**: Clean, readable fonts with proper hierarchy
- **Cards**: Modern card-based layout with hover effects
- **Responsive**: Mobile-first design approach
- **Accessibility**: Proper semantic HTML and ARIA labels

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Customization

### Adding New Exams

Edit `src/data/examsData.ts` to add new examination entries:

```typescript
{
  id: 'unique-id',
  name: 'EXAM_NAME',
  fullName: 'Full Examination Name',
  examDate: '2024-MM-DD',
  applicationStartDate: '2024-MM-DD',
  applicationEndDate: '2024-MM-DD',
  resultDate: '2024-MM-DD',
  category: 'Engineering', // or other category
  level: 'National', // or State, University, International
  description: 'Exam description...',
  website: 'https://exam-website.com',
  eligibility: 'Eligibility criteria...',
  subjects: ['Subject1', 'Subject2'],
  isUpcoming: true,
  daysUntil: 30
}
```

### Styling Customization

- **Colors**: Modify CSS custom properties in `src/index.css`
- **Components**: Edit individual component CSS files
- **Layout**: Adjust grid and flexbox properties in component styles

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@studenthub.in or create an issue in the repository.

## 🔮 Future Enhancements

- [ ] User authentication and personalized exam tracking
- [ ] Email/SMS notifications for exam dates
- [ ] Integration with calendar applications
- [ ] Exam preparation resources and study materials
- [ ] Discussion forums for each exam
- [ ] Mobile app development
- [ ] Admin panel for exam management
- [ ] API integration with official exam websites

---

**Built with ❤️ for students by StudentHub.IN**
