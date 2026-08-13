# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Contact form with EmailJS integration
- Project showcase with filtering
- Professional sections: About, Education, Skills, Experience, Projects, Contact
- Scroll-to-top functionality
- Modern animations and hover effects

## Setup Instructions

### Profile Image
To add your profile image:
1. Take or choose a professional headshot photo
2. Resize it to approximately 400x400 pixels (square format)
3. Save it as `profile.jpg`
4. Place it in the `public` folder
5. The Hero component will automatically display your image

### Resume
To add your resume:
1. Save your resume as `resume.pdf`
2. Place it in the `public` folder
3. The download buttons will automatically work

### EmailJS Setup (for contact form)
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service and template
3. Update the configuration in `src/components/Contact.tsx`:
   - `serviceId`: Your EmailJS service ID
   - `templateId`: Your EmailJS template ID  
   - `publicKey`: Your EmailJS public key

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- EmailJS (contact form)
- Vite (build tool)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

This project is configured for easy deployment to Netlify. The build command and output directory are already configured in the project settings.

## Customization

- Update personal information in all components
- Modify colors in Tailwind CSS classes
- Add or remove sections as needed
- Update project information in `src/components/Projects.tsx`
- Modify skills in `src/components/Skills.tsx`