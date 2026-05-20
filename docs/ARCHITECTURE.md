# Technical Architecture

## System Overview
The SwiftMove project is structured as a monorepo containing two workspaces — client and server. The client is a React application built with Vite, while the server is a Node.js API powered by Express. In development, the two workspaces communicate via Vite's local proxy to avoid CORS issues. In production, the client makes direct API calls to the deployed backend URL.

## Architecture Diagram
```text
Browser
  │ (HTTP/HTTPS)
  ▼
Vite Dev Server (Port 5173 - Proxy)  /  CDN (Production)
  │
  │ (HTTP POST /api/contact)
  ▼
Express API (Port 5000)
  │
  ├─ Rate Limiter Middleware
  ├─ Validation Middleware
  ├─ Route Handler
  │
  │ (HTTPS POST)
  ▼
Resend API
  │
  │ (SMTP)
  ▼
Email Inbox
```

## Frontend Architecture
The frontend follows a component-based architecture:
`main.jsx` mounts `App.jsx` which composes all five section components in order. 
Separation of concerns is maintained strictly: form logic lives in `useContactForm` hook, validation schema lives in `utils/validators.js`, and components only handle rendering. `react-hook-form` with `zodResolver` was chosen over manual state management — controlled inputs at scale cause unnecessary re-renders, uncontrolled inputs via RHF are more performant. The Vite proxy setup avoids hardcoded URLs, ensuring consistent API routing between development and production builds.

## Backend Architecture
The backend processes the contact route through a robust middleware chain in order: rate limiter runs first and rejects abusive IPs, then the validator chain runs and rejects malformed input, then the route handler runs only if both pass, then the email service is called, then the response is sent. Each layer is separate for single responsibility, testability, and reusability. Helmet is applied globally rather than per-route. The global error handler is registered last.

## Security Decisions
- **CORS with explicit origin**: Prevents unauthorized cross-origin requests.
- **Helmet headers**: Prevents clickjacking, MIME sniffing, XSS via headers.
- **Payload size limit (10kb)**: Prevents request flooding.
- **Rate limiting**: Prevents form spam and brute force.
- **express-validator**: Prevents malformed or malicious input reaching the email service.
- **No stack traces in production**: Prevents internal detail leakage.

## Validation Strategy
Validation is applied on both the frontend with Zod and the backend with express-validator. Frontend validation gives instant user feedback and reduces unnecessary API calls, backend validation is the security layer that cannot be bypassed by disabling JavaScript or calling the API directly. Both schemas enforce identical rules, making the contract consistent end to end.

## Email Delivery
Resend was chosen over Nodemailer because Resend has a modern SDK, better deliverability via dedicated infrastructure, and does not require managing SMTP credentials. The HTML email template surfaces all four fields clearly for the business owner reading the enquiry.

## Performance Decisions
Vite manual chunk splitting is implemented — vendor libraries like Framer Motion and React Icons are split into a separate chunk, which improves caching since the vendor chunk changes less frequently than the app chunk. `whileInView` animations use `once: true` because replaying animations on scroll-up creates visual noise and hurts perceived performance. The hero image preload link in `index.html` ensures a faster LCP score by instructing the browser to load it immediately.
