# Cool Portfolio Website

A modern, responsive portfolio website built with React and TailwindCSS.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive
- 🎨 Beautiful animations with Framer Motion
- 🎯 Smooth scrolling navigation
- 🌙 Professional UI components
- ⚡ Fast and optimized

## Getting Started

### 1. Add Your Profile Images

Save your profile images to `public/images/`:
- `profile-main.jpg` - Your main profile photo
- `profile-artistic.jpg` - Creative/artistic photo

See `SETUP_IMAGES.md` for detailed instructions.

### 2. Installation

```bash
npm install
```

### 3. Development

```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## Tech Stack

- **React** - UI library
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Email Configuration

The contact form uses EmailJS to send emails directly to your inbox. To set it up:

1. Follow the instructions in `EMAILJS_SETUP.md`
2. Get your credentials from [EmailJS](https://www.emailjs.com/)
3. Update the credentials in `src/components/Contact.js`

## Customization

All content has been pre-filled with your information from the Python data file:
- Personal information (name, title, contact)
- Work experience and education
- Projects and skills
- Contact details

## License

MIT
