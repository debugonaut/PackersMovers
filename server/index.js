// import dotenv from 'dotenv';
// dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import contactRouter from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware (applied in strict order) ────────────────────────────────────

// 1. Security headers
app.use(helmet());

// 2. CORS — explicit origin, never wildcard
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// 3. Body parser — cap payload at 10 KB
app.use(express.json({ limit: '10kb' }));

// 4. Request logging — dev only
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// ─── Routes ──────────────────────────────────────────────────────────────────

app.get('/', (_req, res) => {
  res.json({ message: 'SwiftMove API is running' });
});

app.use('/api/contact', contactRouter);

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// ─── 404 Catch-All ───────────────────────────────────────────────────────────

app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ─── Global Error Handler ────────────────────────────────────────────────────

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err);

  const statusCode = err.status || 500;
  
  // In production, never leak internal error details
  if (process.env.NODE_ENV === 'production') {
    return res.status(statusCode).json({ error: 'Internal server error' });
  }

  const message = err.message || 'Internal server error';
  res.status(statusCode).json({ error: message });
});

// ─── Start ───────────────────────────────────────────────────────────────────

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

export default app;

// ─── Process Exit Handlers ───────────────────────────────────────────────────

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});
