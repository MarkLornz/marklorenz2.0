/* ================================================================
   MARK LORENZ: FRAME BY FRAME 2.0 — script.js
   ================================================================ */

'use strict';

/* ================================================================
   MODAL CONTENT
   Each key maps to a data-modal attribute on nav/button elements.
   ================================================================ */
const modalContent = {

  /* ── HOME ──────────────────────────────────────────────── */
  home: {
    eyebrow: 'Introduction',
    title: 'Mark Lorenz: Frame by Frame 2.0',
    html: `
      <div class="m-card">
        <h3>Welcome</h3>
        <p>Welcome to <strong>Mark Lorenz: Frame by Frame 2.0</strong> — a personal website that tells the
        story of my journey, growth, and dreams. Just like a film made of many scenes, my life is shaped by
        different experiences that help me become a better version of myself.</p>
      </div>
      <div class="m-card">
        <h3>About Me</h3>
        <p>My name is Mark Lorenz Posadas, a 19-year-old BSIT student who has a strong passion for filmmaking and
        multimedia creation. I enjoy editing videos, watching movies, playing online games, and creating
        short films. These activities allow me to express my creativity and imagination.</p>
      </div>
      <div class="m-card">
        <h3>My Motto</h3>
        <p><em>Sa bawat kuha at galaw ng eksena,<br/>
        Pangarap ko'y unti-unting nagiging totoo sa bawat kamera.</em></p>
      </div>
    `
  },

  /* ── ME HOLISTICALLY ───────────────────────────────────── */
  me: {
    eyebrow: 'Self-Reflection',
    title: 'Me Holistically',
    html: `
      <div class="m-card">
        <h3>Physical Self</h3>
        <p>I stand approximately 170 cm tall, and I consider myself an average-built individual. I believe
        that taking care of my physical health is important because it helps me stay focused and productive.
        Although I sometimes feel insecure about my appearance, I continue learning to accept myself and
        improve my confidence.</p>
      </div>
      <div class="m-card">
        <h3>Material / Economic Self</h3>
        <p>My material possessions play an important role in my daily life. My mobile phone and computer are
        essential tools that help me complete school tasks and improve my video editing skills. These tools
        allow me to explore my creativity and develop multimedia projects.</p>
      </div>
      <div class="m-card">
        <h3>Spiritual Self</h3>
        <p>My spiritual self is guided by my beliefs and personal values. I believe in patience, kindness,
        and respect toward others. These values help me stay calm during stressful situations and remind me
        to remain positive even when facing challenges.</p>
      </div>
      <div class="m-card">
        <h3>Sexual Self — Love Language</h3>
        <p>My primary love language is <strong>Words of Affirmation</strong>. Hearing encouraging words such
        as "Very good" or "Congratulations" makes me feel appreciated and motivated. Positive words give me
        confidence and inspire me to continue doing my best.</p>
      </div>
      <div class="m-card">
        <h3>Digital Self</h3>
        <p>In the digital world, I am active on platforms such as Facebook, TikTok, and YouTube. I also enjoy
        playing games such as Mobile Legends and sometimes Roblox. My digital presence reflects my creativity
        and interest in multimedia content.</p>
      </div>
    `
  },

  /* ── FUTURE SELF ───────────────────────────────────────── */
  future: {
    eyebrow: 'Career Vision',
    title: 'Future Self as an IT Professional',
    html: `
      <div class="m-card">
        <h3>My Dream Career in IT</h3>
        <p>My dream is to become a multimedia creator or filmmaker in the future. Even though my course is
        Bachelor of Science in Information Technology, I believe that IT knowledge will help me improve my
        multimedia skills.</p>
      </div>
      <div class="m-card">
        <h3>Skills I Need to Develop</h3>
        <p style="margin-bottom:0.9rem;">To achieve my dream career, I need to develop several important skills:</p>
        <div class="skill-bar-wrap">
          <div class="skill-bar-label"><span>Video Editing</span><span>85%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="85"></div></div>
        </div>
        <div class="skill-bar-wrap">
          <div class="skill-bar-label"><span>Storytelling</span><span>80%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="80"></div></div>
        </div>
        <div class="skill-bar-wrap">
          <div class="skill-bar-label"><span>Graphic Design</span><span>65%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="65"></div></div>
        </div>
        <div class="skill-bar-wrap">
          <div class="skill-bar-label"><span>Animation Basics</span><span>55%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="55"></div></div>
        </div>
        <div class="skill-bar-wrap">
          <div class="skill-bar-label"><span>Multimedia Production</span><span>70%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="70"></div></div>
        </div>
      </div>
      <div class="m-card">
        <h3>Ethical Responsibilities in the Digital World</h3>
        <p>As a future multimedia creator, I understand the importance of ethical responsibility. I must
        respect copyright laws, avoid spreading false information, and use technology responsibly.</p>
      </div>
      <div class="m-card">
        <h3>Role of Technology in Shaping My Identity</h3>
        <p>Technology plays a major role in shaping my identity as a student and future professional. It
        allows me to learn new skills, explore creative ideas, and share my work with others.</p>
      </div>
    `
  },

  /* ── VERSION 2.0 PLAN ──────────────────────────────────── */
  version: {
    eyebrow: 'Growth Plan',
    title: 'Version 2.0 Plan',
    html: `
      <div class="m-card">
        <h3>Personal Goals — Short-Term</h3>
        <p>My short-term goals include improving my video editing skills and practicing creativity regularly.
        I also aim to manage my time better to reduce laziness and complete tasks on schedule.</p>
      </div>
      <div class="m-card">
        <h3>Personal Goals — Long-Term</h3>
        <p>My long-term goal is to become a successful multimedia creator or filmmaker. I want to create
        professional-quality videos and films that tell meaningful stories.</p>
      </div>
      <div class="m-card">
        <h3>Areas for Improvement</h3>
        <p>I recognize that I have weaknesses that need improvement. I sometimes become lazy when there are
        many tasks to complete. I also experience stress and pressure, especially during deadlines.</p>
      </div>
      <div class="m-card">
        <h3>Concrete Action Plan</h3>
        <p>To upgrade myself into Version 2.0, I will practice video editing regularly, organize my schedule
        properly, and stay consistent with my goals.</p>
      </div>
      <div class="m-card">
        <h3>Letter to My Present Self</h3>
        <div class="letter-box">Dear Present Me,

Life may feel difficult at times, especially when responsibilities become overwhelming. However, remember that every effort you make today builds your future. Continue learning, practicing, and believing in yourself.

<span class="letter-sign">Sincerely,<br/>Mark Lorenz — Version 2.0</span>
        </div>
      </div>
    `
  }
};


/* ================================================================
   MODAL SYSTEM
   ================================================================ */
const overlay   = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const closeBtn  = document.getElementById('modalClose');
const modalBox  = document.getElementById('modalBox');

function openModal(key, triggerEl) {
  const data = modalContent[key];
  if (!data) return;

  modalBody.innerHTML = `
    <div class="m-header">
      <p class="m-eyebrow">${data.eyebrow}</p>
      <h2 class="m-title">${data.title}</h2>
    </div>
    ${data.html}
  `;

  /* Animate from the trigger element's position */
  if (triggerEl && window.innerWidth > 768) {
    const rect = triggerEl.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top  + rect.height / 2;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    /* Convert to % relative to viewport centre where modal box is */
    const ox = ((centerX / vw) * 100).toFixed(1) + '%';
    const oy = ((centerY / vh) * 100).toFixed(1) + '%';
    modalBox.style.transformOrigin = `${ox} ${oy}`;
  } else {
    modalBox.style.transformOrigin = '50% 30%';
  }

  overlay.classList.remove('modal-closing');
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  /* Trigger skill bar widths after layout paint */
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      bar.style.width = (bar.dataset.width || 0) + '%';
    });
  }));
}

function closeModal() {
  overlay.classList.add('modal-closing');
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  const onEnd = () => {
    overlay.classList.remove('modal-closing');
    overlay.removeEventListener('transitionend', onEnd);
    document.body.style.overflow = '';
  };
  overlay.addEventListener('transitionend', onEnd);
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* Bind all [data-modal] triggers */
document.querySelectorAll('[data-modal]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    openModal(el.dataset.modal, el);
    closeNav();
  });
});


/* ================================================================
   HAMBURGER / MOBILE NAV
   ================================================================ */
const hamburger  = document.getElementById('hamburger');
const navEl      = document.getElementById('nav');
const navBackdrop = document.getElementById('navBackdrop');

function openNav() {
  hamburger.classList.add('open');
  navEl.classList.add('open');
  if (navBackdrop) {
    navBackdrop.classList.add('open');
    navBackdrop.setAttribute('aria-hidden', 'false');
  }
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  hamburger.classList.remove('open');
  navEl.classList.remove('open');
  if (navBackdrop) {
    navBackdrop.classList.remove('open');
    navBackdrop.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  navEl.classList.contains('open') ? closeNav() : openNav();
});

/* Close nav when clicking the backdrop */
if (navBackdrop) {
  navBackdrop.addEventListener('click', closeNav);
}

/* Close nav when clicking outside on mobile */
document.addEventListener('click', e => {
  if (navEl.classList.contains('open') &&
      !navEl.contains(e.target) &&
      !hamburger.contains(e.target) &&
      !(navBackdrop && navBackdrop.contains(e.target))) {
    closeNav();
  }
});


/* ================================================================
   STICKY HEADER — rAF-throttled scroll listener
   Hides hamburger when footer comes into view on mobile.
   ================================================================ */
const header  = document.getElementById('header');
const footer  = document.getElementById('footer');
let   ticking = false;

function updateOnScroll() {
  header.classList.toggle('scrolled', window.scrollY > 50);

  /* Hamburger hide/show based on footer visibility — mobile only */
  if (window.innerWidth <= 768 && footer) {
    const footerTop = footer.getBoundingClientRect().top;
    const viewH     = window.innerHeight;
    /* Footer has entered the viewport */
    if (footerTop < viewH) {
      hamburger.classList.add('hamburger--hidden');
      /* Also close nav if it was open */
      if (navEl.classList.contains('open')) closeNav();
    } else {
      hamburger.classList.remove('hamburger--hidden');
    }
  }

  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateOnScroll);
    ticking = true;
  }
}, { passive: true });

/* Re-evaluate on resize (e.g. orientation change) */
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove('hamburger--hidden');
  }
}, { passive: true });


/* ================================================================
   HERO CANVAS — cinematic animated background
   GPU-friendly: only fillRect + radialGradient.
   Pauses when tab is hidden (Page Visibility API).
   ================================================================ */
(function heroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: false });
  let t = 0, raf = null, live = true;

  /* Resize to CSS pixel size */
  function resize() {
    canvas.width  = canvas.offsetWidth  || window.innerWidth;
    canvas.height = canvas.offsetHeight || window.innerHeight;
  }
  let resizeId;
  window.addEventListener('resize', () => {
    clearTimeout(resizeId);
    resizeId = setTimeout(resize, 100);
  }, { passive: true });
  resize();

  /* Static orb definitions — avoid allocation per frame */
  const orbs = [
    { fx: 0.16, fy: 0.25, r: 300, sp: 0.50, amp: 0.042 },
    { fx: 0.80, fy: 0.62, r: 340, sp: 0.35, amp: 0.036 },
    { fx: 0.48, fy: 0.84, r: 210, sp: 0.78, amp: 0.028 },
    { fx: 0.28, fy: 0.68, r: 170, sp: 1.05, amp: 0.022 },
  ];

  function draw() {
    if (!live) return;
    t += 0.0022;

    const W = canvas.width;
    const H = canvas.height;

    /* Base gradient — deep blue to black */
    const base = ctx.createLinearGradient(
      W * (0.28 + 0.14 * Math.sin(t)), 0,
      W * (0.72 + 0.10 * Math.cos(t * 0.72)), H
    );
    base.addColorStop(0,   '#0A1F44');
    base.addColorStop(0.48,'#060f28');
    base.addColorStop(1,   '#000000');
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, W, H);

    /* Gold bokeh orbs */
    for (let i = 0; i < orbs.length; i++) {
      const o  = orbs[i];
      const bx = (o.fx + o.amp * Math.sin(t * o.sp + i))       * W;
      const by = (o.fy + o.amp * Math.cos(t * o.sp + i * 0.65)) * H;
      const rg = ctx.createRadialGradient(bx, by, 0, bx, by, o.r);
      rg.addColorStop(0,    'rgba(212,175,55,0.075)');
      rg.addColorStop(0.52, 'rgba(212,175,55,0.018)');
      rg.addColorStop(1,    'rgba(0,0,0,0)');
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, W, H);
    }

    raf = requestAnimationFrame(draw);
  }

  /* Pause/resume with tab visibility */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      live = false;
      cancelAnimationFrame(raf);
    } else {
      live = true;
      draw();
    }
  });

  draw();
})();


/* ================================================================
   FOOTER PLACEHOLDERS — easy replace guide (see comments in HTML)
   ================================================================ */
/*
  HOW TO REPLACE FOOTER CONTACT DETAILS:

  Phone:
    In index.html, find id="footer-phone"
    Change href="tel:+630000000000" → your real number
    Change the visible text → your real number

  Facebook:
    Find id="footer-facebook"
    Change href="#" → your Facebook profile URL
    Change visible text → your name or @handle

  Instagram:
    Find id="footer-instagram"
    Change href="#" → your Instagram profile URL
    Change visible text → your @handle

  University:
    Find id="footer-university"
    Change visible text → your university name
*/


/* ================================================================
   GALLERY — camera click opens poster wall
   ================================================================ */
(function gallerySystem() {
  const cameraWrap     = document.getElementById('cameraWrap');
  const galleryOverlay = document.getElementById('galleryOverlay');
  const galleryClose   = document.getElementById('galleryClose');
  if (!cameraWrap || !galleryOverlay) return;

  function openGallery() {
    galleryOverlay.classList.remove('closing');
    galleryOverlay.classList.add('active');
    galleryOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeGallery() {
    galleryOverlay.classList.add('closing');
    galleryOverlay.classList.remove('active');
    galleryOverlay.setAttribute('aria-hidden', 'true');
    /* Wait for close animation then hide */
    const onEnd = () => {
      galleryOverlay.classList.remove('closing');
      galleryOverlay.removeEventListener('transitionend', onEnd);
    };
    galleryOverlay.addEventListener('transitionend', onEnd);
    document.body.style.overflow = '';
  }

  cameraWrap.addEventListener('click', openGallery);
  cameraWrap.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openGallery(); }
  });
  galleryClose.addEventListener('click', closeGallery);
  galleryOverlay.addEventListener('click', e => {
    if (e.target === galleryOverlay) closeGallery();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && galleryOverlay.classList.contains('active')) closeGallery();
  });
})();
