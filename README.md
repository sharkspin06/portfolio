# Portfolio Website - TypeScript

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring a beautiful burgundy color scheme.

## Features

- ✨ Modern and clean design with burgundy color palette
- 📱 Fully responsive layout
- ⚡ Built with Vite for fast development
- 🎨 Styled with Tailwind CSS
- 🔷 TypeScript for type safety
- 🎯 Smooth scrolling navigation
- 📧 Contact form
- 🎨 Beautiful gradient backgrounds

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

Edit the following files to customize with your information:

- **Hero Section**: `src/components/Hero.tsx` - Update name, title, and social links
- **About Section**: `src/components/About.tsx` - Update bio and experience
- **Projects**: `src/components/Projects.tsx` - Add your projects
- **Skills**: `src/components/Skills.tsx` - Update your skills and proficiency levels
- **Contact**: `src/components/Contact.tsx` - Update contact information

### Color Scheme

The burgundy color palette is defined in `tailwind.config.js`. You can customize the colors by modifying the `burgundy` color object.

## Project Structure

```
portfolioreactpj/
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## License

MIT License - feel free to use this template for your own portfolio!
