# SwiftMove — Packers & Movers Landing Page

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

## Project Overview
SwiftMove is a modern, high-performance landing page tailored for a Packers and Movers business. Built as an alternative to traditional WordPress setups, it delivers superior performance, customization, and security. This project is a submission for a Web Developer Intern assignment, demonstrating deep technical capability in both frontend UI/UX and backend API development. It utilizes React + Vite on the frontend and Node.js + Express on the backend, ensuring a production-ready, scalable architecture.

## Live Demo
🔗 Live Demo: [Add your deployment URL here]
📁 GitHub: [Add your repository URL here]

## Features
- **Fully Responsive Mobile-First Design**: Adapts seamlessly to all screen sizes.
- **Sticky Animated Navbar**: Features scroll detection for dynamic background rendering.
- **Framer Motion Animations**: Includes staggered animations and scroll-triggered reveals for enhanced UI interactivity.
- **Service Cards**: Five elegantly designed service cards with engaging hover interactions.
- **Validated Contact Form**: Robust validation using Zod on the frontend and express-validator on the backend.
- **Rate Limiting**: Protects against spam with limits set at 5 requests per 15 minutes per IP.
- **Email Delivery**: Integrated with the Resend API for reliable transactional email delivery.
- **SEO & Social Metadata**: Implements Open Graph, Twitter Cards, and JSON-LD LocalBusiness structured data.
- **Accessibility Compliance**: Utilizes ARIA attributes and semantic HTML to ensure usability for all.
- **Optimized Production Build**: Manual chunk splitting for caching and performance benefits.

## Tech Stack
| Technology | Purpose |
| ---------- | ------- |
| React 18 | UI component library |
| Vite | Build tool and dev server |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| React Hook Form | Form state management |
| Zod | Frontend schema validation |
| React Hot Toast | Notifications |
| React Icons | Icon library |
| Node.js | Backend runtime |
| Express | API framework |
| express-validator | Backend validation |
| express-rate-limit | Rate limiting |
| Helmet | HTTP security headers |
| Resend | Transactional email |
| Morgan | Request logging |
| CORS | Cross-origin policy |

## Project Structure
```text
client/
└── src/
    ├── assets/
    │   ├── hero.png            # Hero section image asset
    │   ├── react.svg           # React logo asset
    │   └── vite.svg            # Vite logo asset
    ├── components/
    │   ├── ContactForm.jsx     # Handles user inquiries and form validation
    │   ├── Footer.jsx          # Site footer with links and information
    │   ├── Hero.jsx            # Main hero section with call-to-action
    │   ├── Navbar.jsx          # Navigation bar with scroll animations
    │   └── Services.jsx        # Displays the five service cards
    ├── hooks/
    │   └── useContactForm.js   # Custom hook for form state and submission logic
    ├── utils/
    │   └── validators.js       # Zod schemas for frontend form validation
    ├── App.jsx                 # Main application component layout
    ├── index.css               # Global Tailwind CSS styles
    └── main.jsx                # React application entry point

server/
├── middleware/
│   ├── rateLimiter.js          # Limits request rates to prevent abuse
│   └── validator.js            # Express-validator configuration for the API
├── routes/
│   └── contact.js              # Express router for contact form submission
├── services/
│   └── emailService.js         # Integration with Resend API for email delivery
├── index.js                    # Express server entry point and setup
├── package-lock.json           # Dependency lockfile for backend
└── package.json                # Backend project manifest and scripts
```

## Prerequisites
- Node.js v18 or higher
- npm v9 or higher
- A free Resend account for email delivery
- A verified sender domain or email on Resend

## Getting Started — Local Development
1. Clone the repository
2. Navigate into the project root
3. Install server dependencies: `cd server && npm install`
4. Install client dependencies: `cd ../client && npm install`
5. Copy the environment file: `cp .env.example .env`
6. Fill in all environment variable values (explained in the next section)
7. Open two terminal windows:
   - In the first run the backend: `cd server && npm run dev`
   - In the second run the frontend: `cd client && npm run dev`
8. Open `http://localhost:5173` in a browser.

## Environment Variables
| Variable | Description | Example Value |
| -------- | ----------- | ------------- |
| `PORT` | Port the Express server listens on | `5000` |
| `CLIENT_URL` | The frontend origin for CORS | `http://localhost:5173` |
| `EMAIL_FROM` | Verified sender email on Resend | `hello@yourdomain.com` |
| `EMAIL_TO` | Recipient email for enquiries | `your@email.com` |
| `RESEND_API_KEY` | API key from resend.com dashboard | `re_xxxxxxxxxxxx` |
| `NODE_ENV` | Environment mode | `development` or `production` |

## API Reference
### Backend API
**`GET /api/health`**
- **Description**: No request body, returns `{ status: 'ok', timestamp: '...', environment: '...' }`, HTTP 200. Used for deployment health checks.

**`POST /api/contact`**
- **Description**: Request body is JSON with fields: `name` (string, required), `phone` (string, required, 10-digit Indian mobile), `service` (string, required, one of five enum values), `message` (string, optional, max 500 characters).
- **Responses**:
  - Success response HTTP 200: `{ success: true, message: '...' }`.
  - Validation error HTTP 422: `{ errors: [...] }`.
  - Rate limit error HTTP 429: `{ error: '...' }`.
  - Server error HTTP 500: `{ error: '...' }`.

## Form Validation Rules
| Field Name | Rule | Error Message |
| ---------- | ---- | ------------- |
| `name` | Must be at least 2 characters long | Name must be at least 2 characters long |
| `phone` | Must be a valid 10-digit Indian mobile number | Phone number must be 10 digits |
| `service` | Must be one of the predefined service enum values | Please select a valid service |
| `message` | Max 500 characters, optional | Message must be less than 500 characters |

## Deployment
### Frontend
Run `npm run build` inside `client/`, which generates a `dist/` folder. This folder can be deployed to Vercel, Netlify, or any static host. On Vercel: connect the GitHub repo, set the root directory to `client/`, and add all environment variables in the dashboard.

### Backend
The Express server can be deployed to Railway, Render, or Fly.io. Set all environment variables in the platform dashboard. Set `NODE_ENV=production`. Ensure `CLIENT_URL` is updated to the live frontend URL so CORS works correctly in production.

## Assignment Compliance
| Requirement | Status | Implementation |
| ----------- | ------ | -------------- |
| Header/Navbar | ✅ | Sticky navbar built with Framer Motion scroll detection |
| Hero Section | ✅ | Engaging hero with CTA and preloaded LCP image |
| Services Section | ✅ | 5 interactive service cards (exceeds minimum of 3) |
| Contact Form | ✅ | Includes Name, Phone, Service dropdown, Message, Submit |
| Mobile Responsive | ✅ | Tailwind CSS mobile-first utility classes |
| Basic Animations | ✅ | Framer Motion staggered reveals and hover effects |
| SEO Friendly Structure | ✅ | Semantic HTML, Open Graph tags, JSON-LD schema |
| Clean Code Structure | ✅ | Separation of concerns, clear component hierarchy |
| GitHub submission | ✅ | Public repository with comprehensive documentation |

## License
MIT License — feel free to use this project as a reference.
