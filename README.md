# Arfan Ahmed - Portfolio Website

A modern, responsive portfolio website for a Full Stack Developer built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Email Integration**: Contact form with Nodemailer email functionality
- **Skills Showcase**: Interactive skills slider with icons and proficiency levels
- **Project Portfolio**: Featured projects with detailed project pages
- **Blog Section**: Space for articles and blog posts
- **Contact Form**: Functional contact form with email notifications

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Email**: Nodemailer
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory and add your email configuration:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Server Configuration
PORT=3001
```

**Important**: For Gmail, you'll need to:
1. Enable 2-factor authentication
2. Generate an App Password (not your regular password)
3. Use the App Password in the `EMAIL_PASS` field

### 3. Start the Development Servers

**Terminal 1 - Frontend (Vite)**:
```bash
npm run dev
```

**Terminal 2 - Backend (Express)**:
```bash
npm run server
```

The frontend will run on `http://localhost:5173` and the backend on `http://localhost:3001`.

## Email Setup Guide

### Gmail Setup:
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to "App passwords" section
4. Generate a new app password for "Mail"
5. Use this app password in your `.env` file

### Other Email Providers:
Update the `service` field in `server/index.js`:
- For Outlook: `service: 'outlook'`
- For Yahoo: `service: 'yahoo'`
- For custom SMTP: Replace with SMTP configuration

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── SkillsSlider.tsx # Skills showcase
│   ├── FeaturedProjects.tsx # Project showcase
│   ├── Blog.tsx        # Blog section
│   ├── ContactSection.tsx # Contact form
│   └── Footer.tsx      # Footer
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── AllSkills.tsx   # Skills page
│   ├── AllProjects.tsx # Projects page
│   ├── ProjectDetail.tsx # Individual project
│   └── Contact.tsx     # Contact page
└── App.tsx             # Main app component

server/
└── index.js            # Express server with email functionality
```

## Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name and introduction
- `src/components/About.tsx` - About section details
- `src/components/ContactSection.tsx` - Contact information
- `src/pages/Contact.tsx` - Contact details

### Skills
Modify `src/components/SkillsSlider.tsx` and `src/pages/AllSkills.tsx` to add/remove skills and adjust proficiency levels.

### Projects
Update project data in:
- `src/components/FeaturedProjects.tsx`
- `src/pages/AllProjects.tsx`
- `src/pages/ProjectDetail.tsx`

## Deployment

### Frontend Deployment (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Backend Deployment (Railway/Heroku)
1. Deploy the server folder
2. Set environment variables in your hosting platform
3. Update the API endpoint in frontend components

## Contact Form Features

- **Real-time validation**
- **Loading states**
- **Success/error feedback**
- **Email notifications to you**
- **Auto-reply to sender**
- **Professional email templates**

## License

This project is open source and available under the [MIT License](LICENSE).