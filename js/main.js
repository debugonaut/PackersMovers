/**
 * main.js — SwiftMove Packers & Movers
 * Features: navbar scroll, mobile menu, scroll reveal, counter animation, form validation
 */

'use strict';

/* ─── NAVBAR SCROLL BEHAVIOR ─────────────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* ─── MOBILE MENU ────────────────────────────────────── */
const hamburger   = document.getElementById('hamburger');
const mobileNav   = document.getElementById('mobileNav');
const mobileClose = document.getElementById('mobileClose');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

function openMenu() {
  hamburger.classList.add('open');
  mobileNav.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('active');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

/* ─── HERO PARALLAX LOAD ─────────────────────────────── */
window.addEventListener('load', () => {
  document.querySelector('.hero').classList.add('loaded');
});

/* ─── INTERSECTION OBSERVER — SCROLL REVEAL ─────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.dataset.delay || 0;
      setTimeout(() => {
        el.classList.add('visible');
      }, Number(delay));
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.15 });

// Observe service cards with staggered delay
document.querySelectorAll('.service-card').forEach((card, i) => {
  card.dataset.delay = i * 100;
  revealObserver.observe(card);
});

// Observe USP items
document.querySelectorAll('.usp-item').forEach((item, i) => {
  item.dataset.delay = i * 120;
  revealObserver.observe(item);
});

// Observe stat cards
document.querySelectorAll('.stat-card').forEach((card, i) => {
  card.dataset.delay = i * 100;
  revealObserver.observe(card);
});

/* ─── COUNTER ANIMATION ──────────────────────────────── */
function animateCounter(el, target, duration = 1800, suffix = '') {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    const val = Math.floor(start);
    el.textContent = val.toLocaleString('en-IN') + suffix;
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = Number(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      animateCounter(el, target, 1800, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => {
  counterObserver.observe(el);
});

/* ─── CONTACT FORM VALIDATION ────────────────────────── */
const form        = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');
const formWrapper = document.getElementById('formWrapper');
const formSuccess = document.getElementById('formSuccess');

function showError(inputId, msgId) {
  const input = document.getElementById(inputId);
  const msg   = document.getElementById(msgId);
  input.classList.add('error');
  msg.classList.add('visible');
}

function clearError(inputId, msgId) {
  const input = document.getElementById(inputId);
  const msg   = document.getElementById(msgId);
  input.classList.remove('error');
  msg.classList.remove('visible');
}

// Live validation — clear error on input
['name', 'phone', 'service'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('input', () => clearError(id, id + 'Error'));
  el.addEventListener('change', () => clearError(id, id + 'Error'));
});

function validateForm() {
  let valid = true;

  // Name
  const name = document.getElementById('name').value.trim();
  if (!name || name.length < 2) {
    showError('name', 'nameError');
    valid = false;
  } else {
    clearError('name', 'nameError');
  }

  // Phone
  const phone = document.getElementById('phone').value.trim();
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    showError('phone', 'phoneError');
    valid = false;
  } else {
    clearError('phone', 'phoneError');
  }

  // Service
  const service = document.getElementById('service').value;
  if (!service) {
    showError('service', 'serviceError');
    valid = false;
  } else {
    clearError('service', 'serviceError');
  }

  return valid;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  // Loading state
  submitBtn.disabled = true;
  submitBtn.classList.add('loading');

  // Simulate API call
  setTimeout(() => {
    submitBtn.classList.remove('loading');
    formWrapper.querySelector('form').style.display = 'none';
    formSuccess.classList.add('show');
  }, 1600);
});

/* ─── SMOOTH SCROLL FOR ALL ANCHOR LINKS ─────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
