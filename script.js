// Smooth scroll with offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.site-nav a');

function highlightNav() {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNav);

// Scroll reveal animations
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.deliverable-card, .card, .feature, .panel-card').forEach(el => {
  observer.observe(el);
});

// Deliverable card click to expand/collapse
document.querySelectorAll('.deliverable-card').forEach(card => {
  card.addEventListener('click', function(e) {
    // Don't expand if clicking the link
    if (e.target.tagName === 'A') return;

    // Toggle expanded state
    this.classList.toggle('expanded');

    // Close other expanded cards
    document.querySelectorAll('.deliverable-card').forEach(otherCard => {
      if (otherCard !== this) {
        otherCard.classList.remove('expanded');
      }
    });
  });
});

// Add ripple effect on card click
document.querySelectorAll('.deliverable-card').forEach(card => {
  card.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') return;

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// Header background on scroll
const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// Stats counter animation (if stats exist)
const statElements = document.querySelectorAll('.stat');
const hasAnimated = new Set();

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated.has(entry.target)) {
      hasAnimated.add(entry.target);
      const finalValue = parseInt(entry.target.textContent);
      animateValue(entry.target, 0, finalValue, 1000);
    }
  });
}, { threshold: 0.5 });

statElements.forEach(stat => {
  if (!isNaN(parseInt(stat.textContent))) {
    statsObserver.observe(stat);
  }
});

function animateValue(element, start, end, duration) {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      element.textContent = end;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Add loading state to external links
document.querySelectorAll('a[href^="http"]').forEach(link => {
  link.addEventListener('click', function() {
    this.classList.add('loading');
    setTimeout(() => this.classList.remove('loading'), 1000);
  });
});

console.log('🎯 Backline interactive features loaded');
