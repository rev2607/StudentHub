# ExamTabs Component

A reusable React TypeScript component for creating tabbed navigation interfaces for exam information pages.

## Features

- ✅ **React + TypeScript + TailwindCSS**
- ✅ **Smooth animations** with Framer Motion
- ✅ **Responsive design** with horizontal scrolling for overflow
- ✅ **Active tab highlighting** with animated border indicator
- ✅ **Hover states** for better user interaction
- ✅ **Fully reusable** - works with any exam data
- ✅ **Content placeholders** for all exam sections

## Installation

Make sure you have the required dependencies:

```bash
npm install framer-motion
```

## Usage

### Basic Usage

```tsx
import ExamTabs, { TabData } from './components/ExamTabs';

const MyExamTabs = () => {
  const tabs: TabData[] = [
    {
      id: 'overview',
      label: 'Overview',
      content: <div>Overview content here</div>
    },
    {
      id: 'syllabus',
      label: 'Syllabus',
      content: <div>Syllabus content here</div>
    }
  ];

  return (
    <ExamTabs 
      tabs={tabs}
      examName="JEE Main"
      examYear="2026"
    />
  );
};
```

### Advanced Usage with Custom Content

```tsx
import ExamTabs, { TabData } from './components/ExamTabs';

const CustomContent = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Custom Content</h2>
    <p>Your custom content here</p>
  </div>
);

const tabs: TabData[] = [
  {
    id: 'custom',
    label: 'Custom Tab',
    content: <CustomContent />
  }
];

return <ExamTabs tabs={tabs} examName="Custom Exam" examYear="2026" />;
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `tabs` | `TabData[]` | ✅ | Array of tab objects with id, label, and content |
| `examName` | `string` | ✅ | Name of the exam (e.g., "JEE Main", "NEET") |
| `examYear` | `string` | ✅ | Year of the exam (e.g., "2026") |
| `className` | `string` | ❌ | Additional CSS classes for styling |

## TabData Interface

```tsx
interface TabData {
  id: string;           // Unique identifier for the tab
  label: string;        // Display text for the tab button
  content: React.ReactNode; // React component or JSX to render
}
```

## Styling

The component uses TailwindCSS classes and includes:

- **Container**: White background with rounded corners and shadow
- **Active Tab**: Gray background with blue bottom border indicator
- **Inactive Tabs**: Gray text with hover effects
- **Content Area**: Light background with smooth transitions
- **Responsive**: Horizontal scrolling for tab overflow

## Animation Features

- **Tab Switching**: Smooth fade and slide transitions
- **Active Indicator**: Animated blue border that follows the active tab
- **Content Transitions**: Fade in/out with slight vertical movement

## Examples

### JEE Main Example

```tsx
import { jeeMainTabs } from './components/JEEMainTabsExample';

<ExamTabs 
  tabs={jeeMainTabs}
  examName="JEE Main"
  examYear="2026"
/>
```

### NEET Example

```tsx
import { neetTabs } from './components/NEETTabsExample';

<ExamTabs 
  tabs={neetTabs}
  examName="NEET"
  examYear="2026"
/>
```

## Customization

### Custom Tab Styling

You can override the default styling by passing custom classes:

```tsx
<ExamTabs 
  tabs={tabs}
  examName="Custom Exam"
  examYear="2026"
  className="border-2 border-blue-500"
/>
```

### Custom Content Components

Create your own content components:

```tsx
const MyCustomContent = () => (
  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Custom Content</h2>
    <p className="text-gray-600">Your custom content here</p>
  </div>
);

const customTabs: TabData[] = [
  {
    id: 'custom',
    label: 'Custom',
    content: <MyCustomContent />
  }
];
```

## File Structure

```
src/
├── components/
│   ├── ExamTabs.tsx              # Main reusable component
│   ├── JEEMainTabsExample.tsx    # JEE Main example with content
│   └── NEETTabsExample.tsx       # NEET example with content
```

## Requirements Met

✅ **React + TypeScript + TailwindCSS**  
✅ **Button styling with hover and active states**  
✅ **No page reload on tab click**  
✅ **Single component with local state (useState)**  
✅ **Smooth transitions with framer-motion**  
✅ **Reusable with props for different exams**  
✅ **Horizontally scrollable tabs**  
✅ **Active tab highlighting**  
✅ **Content area with light background and rounded corners**  
✅ **Example content placeholders for all sections**

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

MIT License

