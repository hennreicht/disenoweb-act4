// ── Navbar scroll effect ─────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Menu tab filter ───────────────────────────────────────────────────────
const tabBtns = document.querySelectorAll('[data-category]');
if (tabBtns.length) {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Active tab style
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.category;
      const items = document.querySelectorAll('.menu-item');
      items.forEach(item => {
        if (item.dataset.category === cat) {
          item.classList.remove('d-none');
        } else {
          item.classList.add('d-none');
        }
      });
    });
  });
}

// ── Contact form ──────────────────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.style.display = 'none';
    const msg = document.getElementById('successMsg');
    if (msg) msg.classList.remove('d-none');
  });
}

// ── Fade-in on scroll ─────────────────────────────────────────────────────
const fadeEls = document.querySelectorAll(
  '.feature-card, .product-card, .mv-card, .value-card'
);
if (fadeEls.length) {
  fadeEls.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => observer.observe(el));
}
