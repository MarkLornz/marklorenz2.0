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

  /* Static orb definitions — gold accents + blue atmosphere */
  const orbs = [
    /* Gold bokeh — warm accents */
    { fx: 0.16, fy: 0.25, r: 280, sp: 0.50, amp: 0.042, r_: 212, g_: 175, b_: 55,  a_: 0.072 },
    { fx: 0.80, fy: 0.62, r: 320, sp: 0.35, amp: 0.036, r_: 212, g_: 175, b_: 55,  a_: 0.052 },
    /* Blue atmosphere — cinematic depth */
    { fx: 0.55, fy: 0.18, r: 440, sp: 0.26, amp: 0.032, r_: 30,  g_: 88,  b_: 210, a_: 0.130 },
    { fx: 0.08, fy: 0.65, r: 380, sp: 0.40, amp: 0.038, r_: 18,  g_: 62,  b_: 175, a_: 0.110 },
    { fx: 0.88, fy: 0.12, r: 300, sp: 0.58, amp: 0.028, r_: 45,  g_: 110, b_: 230, a_: 0.085 },
    { fx: 0.42, fy: 0.52, r: 250, sp: 0.72, amp: 0.020, r_: 20,  g_: 70,  b_: 180, a_: 0.065 },
    /* Faint gold — depth layer */
    { fx: 0.48, fy: 0.84, r: 200, sp: 0.78, amp: 0.028, r_: 212, g_: 175, b_: 55,  a_: 0.038 },
    { fx: 0.28, fy: 0.70, r: 160, sp: 1.05, amp: 0.022, r_: 212, g_: 175, b_: 55,  a_: 0.028 },
  ];

  function draw() {
    if (!live) return;
    t += 0.0022;

    const W = canvas.width;
    const H = canvas.height;

    /* Base gradient — rich blue tones, no pure black */
    const base = ctx.createLinearGradient(
      W * (0.22 + 0.12 * Math.sin(t)),      0,
      W * (0.78 + 0.08 * Math.cos(t * 0.72)), H
    );
    base.addColorStop(0,    '#0e2658');  /* rich navy */
    base.addColorStop(0.30, '#0a1e48');  /* deep royal blue */
    base.addColorStop(0.58, '#071535');  /* dark blue */
    base.addColorStop(0.82, '#040e22');  /* near-midnight blue */
    base.addColorStop(1,    '#020912'); /* very dark, still blue-tinted not black */
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, W, H);

    /* Animated orbs — gold warmth + blue atmosphere */
    for (let i = 0; i < orbs.length; i++) {
      const o  = orbs[i];
      const bx = (o.fx + o.amp * Math.sin(t * o.sp + i))        * W;
      const by = (o.fy + o.amp * Math.cos(t * o.sp + i * 0.65)) * H;
      const rg = ctx.createRadialGradient(bx, by, 0, bx, by, o.r);
      rg.addColorStop(0,    `rgba(${o.r_},${o.g_},${o.b_},${o.a_})`);
      rg.addColorStop(0.50, `rgba(${o.r_},${o.g_},${o.b_},${+(o.a_ * 0.22).toFixed(3)})`);
      rg.addColorStop(1,    `rgba(${o.r_},${o.g_},${o.b_},0)`);
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


/* ================================================================
   FEATURE 3 — CINEMATIC QUOTE BUBBLE (updated)
   - Triggers only on profile image click.
   - Appears at the click location, not centered.
   - Letter-by-letter typing, auto-close with fade-out.
   ================================================================ */
(function cinematicQuotePopup() {
  const profilePhoto = document.getElementById('profile-photo');
  const bubble       = document.getElementById('quoteBubble');
  const quoteTextEl  = document.getElementById('quoteText');
  if (!profilePhoto || !bubble || !quoteTextEl) return;

  const quotes = [
    "Frame by frame, I turn ideas into stories worth remembering.",
    "Every frame I create is a step closer to the story I dream to tell.",
    "Step by step, frame by frame, I build the person I want to become.",
    "Editing is not just cutting clips—it's building emotions.",
    "Behind every video I edit is a story waiting to be seen."
  ];

  let isOpen      = false;
  let typingTimer = null;
  let closeTimer  = null;
  let lastIndex   = -1;

  /* ── Pick a random quote, never repeating the previous one ── */
  function pickQuote() {
    let idx;
    do { idx = Math.floor(Math.random() * quotes.length); }
    while (idx === lastIndex && quotes.length > 1);
    lastIndex = idx;
    return quotes[idx];
  }

  /* ── Position the bubble near the click, clamped to viewport ── */
  function positionBubble(clickX, clickY) {
    /* Temporarily show (invisible) to measure size */
    bubble.style.visibility = 'hidden';
    bubble.style.display    = 'block';

    const bw = bubble.offsetWidth;
    const bh = bubble.offsetHeight;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const pad = 12; /* minimum gap from viewport edge */

    /* Default: appear above-right of click point */
    let left = clickX + 16;
    let top  = clickY - bh - 12;

    /* Flip left if it overflows right edge */
    if (left + bw + pad > vw) left = clickX - bw - 16;
    /* Clamp left */
    left = Math.max(pad, left);

    /* Flip below if it overflows top */
    if (top < pad) top = clickY + 16;
    /* Clamp top */
    top = Math.max(pad, Math.min(top, vh - bh - pad));

    bubble.style.left    = left + 'px';
    bubble.style.top     = top  + 'px';
    bubble.style.display = '';
    bubble.style.visibility = '';
  }

  /* ── Typing animation with blinking cursor ── */
  function typeText(text, el, speed, onDone) {
    el.textContent = '';

    const cursor = document.createElement('span');
    cursor.className = 'quote-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    el.appendChild(cursor);

    let i = 0;
    function tick() {
      if (i < text.length) {
        el.insertBefore(document.createTextNode(text[i]), cursor);
        i++;
        typingTimer = setTimeout(tick, speed);
      } else {
        /* Fade cursor out once typing finishes */
        setTimeout(() => {
          cursor.style.animation = 'none';
          cursor.style.opacity   = '0';
        }, 600);
        if (onDone) onDone();
      }
    }
    tick();
  }

  /* ── Open: position at click coords, show, then type ── */
  function openQuote(e) {
    if (isOpen) return;
    isOpen = true;

    const quote = pickQuote();
    const speed = 38; /* ms per character (35–45 range) */

    /* Use pointer coords for precise placement */
    const clickX = e.clientX || (e.touches && e.touches[0].clientX) || window.innerWidth  / 2;
    const clickY = e.clientY || (e.touches && e.touches[0].clientY) || window.innerHeight / 2;

    /* Clear text, position, then reveal */
    quoteTextEl.textContent = '';
    positionBubble(clickX, clickY);

    bubble.setAttribute('aria-hidden', 'false');
    bubble.classList.remove('fading-out');

    /* Force reflow so transition fires */
    void bubble.offsetWidth;
    bubble.classList.add('visible');

    /* Start typing */
    typeText(quote, quoteTextEl, speed, () => {
      /* Auto-close: 2s base + 50ms per character */
      const readDuration = 2000 + quote.length * 50;
      closeTimer = setTimeout(closeQuote, readDuration);
    });
  }

  /* ── Close: fade out, then fully hide and reset ── */
  function closeQuote() {
    clearTimeout(typingTimer);
    clearTimeout(closeTimer);

    bubble.classList.add('fading-out');
    bubble.classList.remove('visible');

    setTimeout(() => {
      bubble.classList.remove('fading-out');
      bubble.setAttribute('aria-hidden', 'true');
      quoteTextEl.textContent = '';
      isOpen = false;
    }, 480);
  }

  /* ── Event bindings ── */
  /* Profile image click only */
  profilePhoto.addEventListener('click', openQuote);

  /* Keyboard: Enter or Space on the portrait */
  profilePhoto.setAttribute('tabindex', '0');
  profilePhoto.setAttribute('role', 'button');
  profilePhoto.setAttribute('aria-label', 'Click for a cinematic quote');
  profilePhoto.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      /* Synthesise a centre-of-image position for keyboard users */
      const rect = profilePhoto.getBoundingClientRect();
      openQuote({ clientX: rect.left + rect.width / 2, clientY: rect.top + rect.height / 2 });
    }
  });

  /* Click on the bubble itself to dismiss early */
  bubble.addEventListener('click', closeQuote);

  /* ── CHANGE: Close immediately when clicking anywhere else on the page ── */
  document.addEventListener('click', e => {
    if (!isOpen) return;
    /* Allow profile-photo click to be handled by openQuote (it triggers first) */
    if (profilePhoto.contains(e.target)) return;
    /* Allow clicks inside the bubble itself (handled above) */
    if (bubble.contains(e.target)) return;
    /* Any other click on the document → close the popup */
    closeQuote();
  }, true); /* useCapture=true so this fires before any inner handler */

  /* Escape key to dismiss */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen) closeQuote();
  });
})();



/* ================================================================
   ENHANCEMENT v2.1 — Script additions
   Original color theme preserved. Bug-fixed BG image approach.
   ================================================================ */


/* ── SCROLL PROGRESS BAR ───────────────────────────────────── */
(function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scrollProgress';
  document.body.prepend(bar);

  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        const scrollTop  = window.scrollY;
        const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
        const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width  = pct.toFixed(2) + '%';
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();


/* ── HERO BACKGROUND IMAGE (full-coverage, correct layering) ─
   Creates two absolutely-positioned divs inside .hero:
     1. .hero-bg-img     — the actual BG image (opacity 0.18)
     2. .hero-bg-overlay — dark gradient over it
   Inserts them BEFORE the canvas so canvas stays z:-1.
   ──────────────────────────────────────────────────────────── */
(function injectHeroBackground() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  /* 1 — BG image div */
  const bgImg = document.createElement('div');
  bgImg.className = 'hero-bg-img';
  /* Explicit inline background as primary — overrides any CSS path mismatch */
  bgImg.style.backgroundImage = 'url("images/WebsiteBG.jpg")';
  bgImg.setAttribute('aria-hidden', 'true');

  /* 2 — Gradient overlay div */
  const bgOverlay = document.createElement('div');
  bgOverlay.className = 'hero-bg-overlay';
  bgOverlay.setAttribute('aria-hidden', 'true');

  /* Insert both as the very first children of .hero */
  hero.insertBefore(bgOverlay, hero.firstChild);
  hero.insertBefore(bgImg, hero.firstChild);
  /* Result order in DOM: bgImg → bgOverlay → canvas → … */
})();


/* ── SECTION REVEAL — Intersection Observer ─────────────────
   Targets: .hero-content, .footer-inner, gallery poster cards,
   and any element with data-reveal attribute.
   Also applies to gallery eyebrow / title as cinematic-title.
   ──────────────────────────────────────────────────────────── */
(function initSectionReveal() {
  if (!('IntersectionObserver' in window)) {
    /* Fallback: just show everything */
    document.querySelectorAll('.section-reveal, .section-reveal-group, .cinematic-title')
      .forEach(el => el.classList.add('is-visible'));
    return;
  }

  /* Elements to reveal on scroll */
  const revealTargets = [
    /* hero content — already has its own fadeUp animation, skip */
    /* footer */
    '.footer-brand',
    '.footer-grid',
    '.footer-bottom',
    /* gallery items — applied individually */
    '.poster-card',
    /* any manually tagged elements */
    '[data-reveal]'
  ];

  /* Add .section-reveal class to targets that exist */
  revealTargets.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      if (!el.classList.contains('section-reveal')) {
        el.classList.add('section-reveal');
      }
    });
  });

  /* Cinematic-title: gallery heading, gallery eyebrow */
  ['.gallery-title', '.gallery-eyebrow'].forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.classList.add('cinematic-title');
    });
  });

  /* Shared observer options */
  const ioOptions = { threshold: 0.15 };

  /* Observer for .section-reveal */
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, ioOptions);

  document.querySelectorAll('.section-reveal').forEach(el => revealObserver.observe(el));

  /* Observer for .cinematic-title */
  const titleObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        titleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll('.cinematic-title').forEach(el => titleObserver.observe(el));
})();

/* ================================================================
   CINEMATIC VIDEO SECTION — Scroll reveal + autoplay fallback
   ================================================================ */
(function () {
  'use strict';

  var videoSection = document.getElementById('videoBehindCamera');
  var videoEl      = document.getElementById('cinematicVideo');

  if (!videoSection) return;

  /* ── IntersectionObserver: fade in section on scroll ─────────── */
  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        videoSection.classList.add('is-visible');
        /* Once visible, attempt play (needed on some mobile browsers) */
        if (videoEl) {
          videoEl.play().catch(function () {
            /* Autoplay blocked — section still looks great without motion */
          });
        }
        sectionObserver.unobserve(videoSection);
      }
    });
  }, { threshold: 0.08 });

  sectionObserver.observe(videoSection);

  /* ── Ensure mute so autoplay policy is satisfied ─────────────── */
  if (videoEl) {
    videoEl.muted  = true;
    videoEl.volume = 0;
  }
})();

/* ================================================================
   NEW ADDITIONS — IT Section, IT Modal, Profile Hint
   ================================================================ */

/* ── IT MODAL CONTENT ──────────────────────────────────────── */
modalContent['itdigital'] = {
  eyebrow: 'Digital Side',
  title: 'My Digital Side',
  html: `
    <div class="it-modal-scan" aria-hidden="true"></div>

    <div class="it-m-header">
      <p class="it-m-eyebrow">it_student.profile</p>
      <h2 class="it-m-title">My Digital Side</h2>
    </div>

    <div class="it-m-card">
      <h3>Intro</h3>
      <p>While I tell stories through film, I also explore building through code.</p>
    </div>

    <div class="it-m-card">
      <h3>Current Skills</h3>
      <ul class="it-skill-list">
        <li>C++ — basic fundamentals</li>
        <li>HTML — basic structure and layout</li>
        <li>Beginner understanding of programming logic</li>
      </ul>
    </div>

    <div class="it-m-card">
      <h3>About My IT Journey</h3>
      <p>
        I'm a first-year IT student still at the very beginning of my programming path.
        I understand basic logic, I can write simple C++ programs, and I'm slowly getting
        comfortable with how HTML structures a page. It's new territory for me — but I find
        it exciting, because I can already see how technology and creativity can work together.
        Every concept I learn feels like adding a new tool to my creative process.
      </p>
    </div>

    <div class="it-m-ending">
      <span class="it-typing-line" id="itTypingLine">I'm still learning—but always building.</span>
      <span class="it-cursor" aria-hidden="true"></span>
    </div>
  `
};

/* ── Patch openModal to apply IT modal styling ───────────────── */
(function patchOpenModalForIT() {
  const _original = openModal;

  /* Override the global openModal */
  window._openModalIT = function(key, triggerEl) {
    _original(key, triggerEl);

    const modalBox = document.getElementById('modalBox');
    if (!modalBox) return;

    if (key === 'itdigital') {
      modalBox.classList.add('it-modal-active');

      /* Retrigger all CSS entrance animations by forcing a reflow */
      void modalBox.offsetWidth;

      /* Restart the typing line animation */
      setTimeout(function() {
        const typingLine = document.getElementById('itTypingLine');
        if (typingLine) {
          typingLine.style.animation = 'none';
          void typingLine.offsetWidth; /* reflow */
          typingLine.style.animation = '';
        }

        /* Pulse-highlight each skill dot sequentially */
        var dots = modalBox.querySelectorAll('.it-skill-list li::before');
        var items = modalBox.querySelectorAll('.it-skill-list li');
        items.forEach(function(li, i) {
          setTimeout(function() {
            li.style.transition = 'color 0.22s ease';
          }, i * 80);
        });
      }, 80);
    } else {
      modalBox.classList.remove('it-modal-active');
    }
  };
})();

/* Hook the IT explore button to the patched openModal */
(function initITButton() {
  var btn = document.getElementById('btnITExplore');
  if (!btn) return;

  btn.addEventListener('click', function() {
    window._openModalIT('itdigital', btn);
  });
})();

/* Also hook existing modal triggers to remove IT class when needed */
(function patchAllModalTriggers() {
  document.querySelectorAll('[data-modal]').forEach(function(el) {
    if (el.id === 'btnITExplore') return; /* already handled */
    el.addEventListener('click', function() {
      var modalBox = document.getElementById('modalBox');
      if (modalBox) modalBox.classList.remove('it-modal-active');
    });
  });
})();

/* ── IT SECTION — Animated Tech Canvas ───────────────────────── */
(function initITCanvas() {
  var canvas = document.getElementById('itCanvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var W, H, particles, floatLines;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  /* Code-style characters that feel like real snippets */
  var codeChars = [
    '0','1','</>','{ }','//','#',
    'if','fn','&&','||','++','--',
    'int','var','let','01','10',
    '=>','::','null','true'
  ];

  function createParticles() {
    particles   = [];
    floatLines  = [];

    /* More particles, spread evenly so none of the section looks bare */
    var count = Math.max(28, Math.floor((W * H) / 7000));
    for (var i = 0; i < count; i++) {
      particles.push({
        x:       Math.random() * W,
        y:       Math.random() * H,
        char:    codeChars[Math.floor(Math.random() * codeChars.length)],
        size:    Math.random() * 10 + 9,
        speed:   Math.random() * 0.30 + 0.10,
        /* Gold with meaningful opacity range so chars are actually seen */
        opacity: Math.random() * 0.22 + 0.08,
        drift:   (Math.random() - 0.5) * 0.18,
        delay:   Math.random() * 200   /* stagger start position */
      });
      /* Stagger vertical start so first frame isn't all at top */
      particles[i].y = Math.random() * H * 1.4 - H * 0.2;
    }

    /* Slow horizontal data-flow lines */
    var lineCount = Math.max(4, Math.floor(H / 90));
    for (var j = 0; j < lineCount; j++) {
      floatLines.push({
        y:       (j / lineCount) * H + Math.random() * 40,
        x:       Math.random() * W,
        len:     Math.random() * 90 + 40,
        speed:   Math.random() * 0.50 + 0.20,
        opacity: Math.random() * 0.10 + 0.04,
        width:   Math.random() * 0.8 + 0.4
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    /* ── Floating code characters ── */
    particles.forEach(function(p) {
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.font        = p.size + 'px "Courier New", monospace';
      ctx.fillStyle   = '#D4AF37';
      ctx.fillText(p.char, p.x, p.y);
      ctx.restore();

      p.y -= p.speed;
      p.x += p.drift;

      if (p.y < -24) {
        p.y    = H + 10;
        p.x    = Math.random() * W;
        p.char = codeChars[Math.floor(Math.random() * codeChars.length)];
      }
      if (p.x < -40 || p.x > W + 40) {
        p.x = Math.random() * W;
      }
    });

    /* ── Horizontal data-flow lines ── */
    floatLines.forEach(function(l) {
      ctx.save();
      ctx.globalAlpha = l.opacity;
      ctx.beginPath();
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x + l.len, l.y);
      /* Gold gradient along the line */
      var grad = ctx.createLinearGradient(l.x, l.y, l.x + l.len, l.y);
      grad.addColorStop(0,   'transparent');
      grad.addColorStop(0.4, '#D4AF37');
      grad.addColorStop(1,   'transparent');
      ctx.strokeStyle = grad;
      ctx.lineWidth   = l.width;
      ctx.stroke();
      ctx.restore();

      l.x += l.speed;
      if (l.x > W + 20) l.x = -l.len - 10;
    });

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener('resize', function() {
    resize();
    createParticles();
  }, { passive: true });
})();

/* ── IT SECTION — Scroll reveal (add to existing observer) ───── */
(function initITReveal() {
  var itContent = document.querySelector('.it-content');
  if (!itContent) return;

  if (!('IntersectionObserver' in window)) {
    itContent.classList.add('is-visible');
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  observer.observe(itContent);
})();

/* ================================================================
   FEATURE BOXES — 3D Tilt, Entrance Reveal & Modal Integration
   ================================================================ */
(function initFeatureBoxes() {
  'use strict';

  var boxes = document.querySelectorAll('.feature-box');
  if (!boxes.length) return;

  /* ── Entrance reveal via IntersectionObserver ─────────────── */
  var revealObserver;
  if ('IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fb-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    boxes.forEach(function(box) { revealObserver.observe(box); });
  } else {
    boxes.forEach(function(box) { box.classList.add('fb-visible'); });
  }

  /* ── 3D Tilt interaction ──────────────────────────────────── */
  var MAX_TILT   = 10;    /* max rotation degrees */
  var MAX_SCALE  = 1.028; /* subtle scale on hover */
  var EASE_BACK  = '0.55s cubic-bezier(0.22,1,0.36,1)';

  function onMouseMove(e) {
    var box  = this;
    var rect = box.getBoundingClientRect();
    var x    = e.clientX - rect.left;
    var y    = e.clientY - rect.top;
    var cx   = rect.width  / 2;
    var cy   = rect.height / 2;

    /* Normalise to -1 … +1 */
    var nx = (x - cx) / cx;
    var ny = (y - cy) / cy;

    var rotY =  nx * MAX_TILT;
    var rotX = -ny * MAX_TILT;

    /* Apply tilt — override entrance transition with fast one */
    box.style.transition = 'transform 0.12s cubic-bezier(0.22,1,0.36,1), box-shadow 0.14s ease, border-color 0.22s ease';
    box.style.transform  =
      'perspective(800px)' +
      ' rotateX(' + rotX.toFixed(2) + 'deg)' +
      ' rotateY(' + rotY.toFixed(2) + 'deg)' +
      ' scale(' + MAX_SCALE + ')';

    /* Move glow radial to cursor position */
    var glow = box.querySelector('.feature-box-glow');
    if (glow) {
      var px = ((x / rect.width)  * 100).toFixed(1) + '%';
      var py = ((y / rect.height) * 100).toFixed(1) + '%';
      glow.style.background =
        'radial-gradient(circle at ' + px + ' ' + py + ', rgba(212,175,55,0.16) 0%, transparent 68%)';
    }
  }

  function onMouseLeave() {
    var box = this;
    box.style.transition = EASE_BACK + ', box-shadow 0.28s ease, border-color 0.22s ease';
    box.style.transform  = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';

    var glow = box.querySelector('.feature-box-glow');
    if (glow) {
      glow.style.background = 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.13) 0%, transparent 70%)';
    }
  }

  /* ── Click → open existing modal system ──────────────────── */
  function onBoxClick(e) {
    var box = this;
    var key = box.getAttribute('data-modal');
    if (!key) return;

    /* Use the IT-aware patched openModal if available, else fallback */
    if (typeof window._openModalIT === 'function') {
      window._openModalIT(key, box);
    } else if (typeof openModal === 'function') {
      openModal(key, box);
    }
  }

  /* ── Keyboard accessibility (Enter / Space activates) ─────── */
  function onBoxKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onBoxClick.call(this, e);
    }
  }

  boxes.forEach(function(box) {
    /* Skip touch devices for tilt (they use tap) */
    var hasTouch = window.matchMedia('(hover: none)').matches;

    if (!hasTouch) {
      box.addEventListener('mousemove',  onMouseMove.bind(box),  { passive: true });
      box.addEventListener('mouseleave', onMouseLeave.bind(box), { passive: true });
    }

    box.addEventListener('click',   onBoxClick.bind(box));
    box.addEventListener('keydown', onBoxKeydown.bind(box));
  });

})();



/* ================================================================
   DRAGGABLE FLASHLIGHT  v3.0
   ─ Light is ON only while mouse is held (mousedown) or touch held
   ─ Releases → light turns OFF → flashlight returns to origin smoothly
   ─ Draggable anywhere on the full page (fixed positioning)
   ─ Works on desktop (mouse) and mobile (touch)
   ─ Scroll & parallax safe — uses fixed coords, not page offsets
   ================================================================ */
(function initFlashlight() {
  'use strict';

  var wrap = document.getElementById('flashlight-wrap');
  var glow = document.getElementById('flashlight-glow');
  var halo = document.getElementById('flashlight-halo');
  var hint = document.getElementById('flashlight-hint');
  if (!wrap || !glow || !halo) return;

  /* ── Constants ─────────────────────────────────────────────── */
  var RADIUS     = 300;   /* spotlight radius in px */
  var HINT_SHOWN = true;  /* fade hint after first use */

  /* ── Track origin position (where flashlight lives at rest) ── */
  /* We store it as viewport-relative coords for reset */
  var originVX, originVY;  /* viewport x/y of flashlight centre at rest */
  var isDragging = false;
  var isLit      = false;

  /* Drag start bookkeeping */
  var dragStartClientX, dragStartClientY;
  var dragStartWrapX,   dragStartWrapY;  /* wrap left/top at drag start */

  /* ── Read current resting position from DOM ─────────────────── */
  function getRestRect() {
    var r = wrap.getBoundingClientRect();
    return { cx: r.left + r.width / 2, cy: r.top + r.height / 2 };
  }

  /* ── Move flashlight to viewport (x, y) — centre of wrap ───── */
  function moveWrapTo(vx, vy) {
    /* Disable CSS transition during drag for instant follow */
    wrap.style.transition = 'filter 0.20s ease';
    wrap.style.transform  = 'none';
    wrap.style.right      = 'auto';
    wrap.style.bottom     = 'auto';
    wrap.style.left       = (vx - wrap.offsetWidth  / 2) + 'px';
    wrap.style.top        = (vy - wrap.offsetHeight / 2) + 'px';
  }

  /* ── Update spotlight overlay ─────────────────────────────── */
  function updateGlow(vx, vy) {
    var pxPct = ((vx / window.innerWidth)  * 100).toFixed(2) + '%';
    var pyPct = ((vy / window.innerHeight) * 100).toFixed(2) + '%';
    glow.style.background =
      'radial-gradient(' +
        'circle ' + RADIUS + 'px at ' + pxPct + ' ' + pyPct + ',' +
        'transparent 0%,' +
        'transparent 30%,' +
        'rgba(0,0,0,0.16) 55%,' +
        'rgba(0,0,0,0.32) 78%,' +
        'rgba(0,0,0,0.48) 100%' +
      ')';
    /* Position halo at LED panel (slightly left/up of centre since beam goes left) */
    halo.style.left = (vx - 16) + 'px';
    halo.style.top  = vy + 'px';
  }

  /* ── Light ON ──────────────────────────────────────────────── */
  function lightOn(vx, vy) {
    if (!isLit) {
      isLit = true;
      glow.classList.add('on');
      halo.classList.add('on');
      wrap.classList.add('lit');
      if (HINT_SHOWN && hint) {
        HINT_SHOWN = false;
        hint.classList.add('hidden');
      }
    }
    updateGlow(vx, vy);
  }

  /* ── Light OFF + return to origin ──────────────────────────── */
  function lightOff() {
    isLit = false;
    glow.classList.remove('on');
    halo.classList.remove('on');
    wrap.classList.remove('lit');
    returnToOrigin();
  }

  /* ── Smoothly return flashlight to its home position ───────── */
  function returnToOrigin() {
    /* Re-enable CSS transitions for smooth return */
    wrap.style.transition =
      'left 0.60s cubic-bezier(0.22,1,0.36,1),' +
      'top  0.60s cubic-bezier(0.22,1,0.36,1),' +
      'filter 0.25s ease';
    /* Restore CSS-defined position via right/top instead of left/top */
    wrap.style.left      = '';
    wrap.style.top       = '';
    wrap.style.right     = '18px';
    wrap.style.transform = 'translateY(-50%)';
    /* top is still 50% from CSS */
    /* We need to set top explicitly for transition to work */
    /* Get the natural centre-Y */
    var naturalY = window.innerHeight / 2;
    wrap.style.top    = (naturalY - wrap.offsetHeight / 2) + 'px';
    wrap.style.right  = 'auto';
    wrap.style.left   = (window.innerWidth - 18 - wrap.offsetWidth) + 'px';

    /* After transition completes, restore CSS-variable positioning */
    setTimeout(function() {
      wrap.style.transition = 'filter 0.25s ease';
      wrap.style.left       = '';
      wrap.style.top        = '';
      wrap.style.right      = '18px';
      wrap.style.transform  = 'translateY(-50%)';
    }, 650);
  }

  /* ═══════════════════════════════════════════════════════════
     MOUSE EVENTS
     Light is on ONLY while mousedown is held.
  ═══════════════════════════════════════════════════════════ */
  wrap.addEventListener('mousedown', function(e) {
    if (e.button !== 0) return; /* left click only */
    e.preventDefault();
    isDragging         = true;
    dragStartClientX   = e.clientX;
    dragStartClientY   = e.clientY;
    var r = wrap.getBoundingClientRect();
    dragStartWrapX     = r.left;
    dragStartWrapY     = r.top;

    var cx = r.left + r.width  / 2;
    var cy = r.top  + r.height / 2;
    lightOn(cx, cy);

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseup',   onMouseUp,   { passive: true });
  });

  function onMouseMove(e) {
    if (!isDragging) return;
    var dx = e.clientX - dragStartClientX;
    var dy = e.clientY - dragStartClientY;
    var newLeft = dragStartWrapX + dx;
    var newTop  = dragStartWrapY + dy;
    /* Clamp to viewport */
    newLeft = Math.max(0, Math.min(window.innerWidth  - wrap.offsetWidth,  newLeft));
    newTop  = Math.max(0, Math.min(window.innerHeight - wrap.offsetHeight, newTop));
    wrap.style.transition = 'filter 0.20s ease';
    wrap.style.transform  = 'none';
    wrap.style.right      = 'auto';
    wrap.style.left       = newLeft + 'px';
    wrap.style.top        = newTop  + 'px';
    var cx = newLeft + wrap.offsetWidth  / 2;
    var cy = newTop  + wrap.offsetHeight / 2;
    lightOn(cx, cy);
  }

  function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup',   onMouseUp);
    lightOff();
  }

  /* ═══════════════════════════════════════════════════════════
     TOUCH EVENTS
     Light on while finger is pressed; off on touchend/cancel.
  ═══════════════════════════════════════════════════════════ */
  wrap.addEventListener('touchstart', function(e) {
    e.preventDefault();
    isDragging       = true;
    var t            = e.touches[0];
    dragStartClientX = t.clientX;
    dragStartClientY = t.clientY;
    var r = wrap.getBoundingClientRect();
    dragStartWrapX   = r.left;
    dragStartWrapY   = r.top;

    var cx = r.left + r.width  / 2;
    var cy = r.top  + r.height / 2;
    lightOn(cx, cy);
  }, { passive: false });

  wrap.addEventListener('touchmove', function(e) {
    if (!isDragging) return;
    e.preventDefault();
    var t  = e.touches[0];
    var dx = t.clientX - dragStartClientX;
    var dy = t.clientY - dragStartClientY;
    var newLeft = dragStartWrapX + dx;
    var newTop  = dragStartWrapY + dy;
    newLeft = Math.max(0, Math.min(window.innerWidth  - wrap.offsetWidth,  newLeft));
    newTop  = Math.max(0, Math.min(window.innerHeight - wrap.offsetHeight, newTop));
    wrap.style.transition = 'filter 0.20s ease';
    wrap.style.transform  = 'none';
    wrap.style.right      = 'auto';
    wrap.style.left       = newLeft + 'px';
    wrap.style.top        = newTop  + 'px';
    var cx = newLeft + wrap.offsetWidth  / 2;
    var cy = newTop  + wrap.offsetHeight / 2;
    lightOn(cx, cy);
  }, { passive: false });

  function touchRelease() {
    isDragging = false;
    lightOff();
  }
  wrap.addEventListener('touchend',    touchRelease, { passive: true });
  wrap.addEventListener('touchcancel', touchRelease, { passive: true });

})();


/* ================================================================
   SCROLL REVEAL + PARALLAX — Fixed robust version
   Fixes: ensures .section-reveal elements get .is-visible
          and hero parallax works without breaking scroll.
   ================================================================ */
(function fixScrollRevealAndParallax() {
  'use strict';

  /* ── 1. Section reveal via IntersectionObserver ──────────────── */
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.section-reveal, .cinematic-title').forEach(function(el) {
      el.classList.add('is-visible');
    });
    return;
  }

  /* Make sure ALL section-reveal and cinematic-title elements
     that exist RIGHT NOW are observed (including any added by previous JS) */
  function observeAll() {
    var revealObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.section-reveal').forEach(function(el) {
      revealObs.observe(el);
    });

    var titleObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          titleObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.20 });

    document.querySelectorAll('.cinematic-title').forEach(function(el) {
      titleObs.observe(el);
    });

    /* Also ensure feature boxes get revealed */
    var boxObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fb-visible');
          boxObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.feature-box:not(.fb-visible)').forEach(function(el) {
      boxObs.observe(el);
    });
  }

  /* Run immediately and also after DOM settles */
  observeAll();
  setTimeout(observeAll, 400);

  /* ── 2. Hero parallax — portrait drifts on scroll ─────────────
     Only on desktop (reduces motion on mobile for performance)    */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var heroPortrait = document.querySelector('.hero-portrait-wrap');
  var heroText     = document.querySelector('.hero-text');
  var hero         = document.querySelector('.hero');
  if (!heroPortrait || !hero) return;

  var ticking = false;

  function applyParallax() {
    var scrollY  = window.scrollY;
    var heroH    = hero.offsetHeight;
    /* Only apply while hero is in view */
    if (scrollY > heroH) {
      ticking = false;
      return;
    }
    var progress = scrollY / heroH; /* 0 → 1 as hero scrolls out */

    /* Portrait drifts up slightly slower than scroll */
    if (heroPortrait) {
      heroPortrait.style.transform = 'translateY(' + (scrollY * 0.12).toFixed(1) + 'px)';
    }
    /* Text drifts up slightly faster */
    if (heroText) {
      heroText.style.transform = 'translateY(' + (scrollY * 0.06).toFixed(1) + 'px)';
    }

    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(applyParallax);
      ticking = true;
    }
  }, { passive: true });

})();


/* ================================================================
   ENHANCEMENTS v3.0
   1. Flashlight close button + navbar toggle
   2. IT modal text alignment (no horizontal scroll)
   3. Feature box touch 3D tilt for mobile/tablets
   4. Performance: passive listeners, rAF batching
   ================================================================ */

/* ── 1. FLASHLIGHT TOGGLE (Navbar button + Close X button) ─── */
(function initFlashlightToggle() {
  'use strict';

  var wrap       = document.getElementById('flashlight-wrap');
  var glow       = document.getElementById('flashlight-glow');
  var halo       = document.getElementById('flashlight-halo');
  var closeBtn   = document.getElementById('flashlight-close');
  var toggleBtn  = document.getElementById('flashlightToggleBtn');

  if (!wrap) return;

  var flHidden = false; /* start visible */

  function hideFlashlight() {
    flHidden = true;
    wrap.classList.add('fl-hidden');
    if (glow) { glow.classList.add('fl-hidden'); glow.classList.remove('on'); }
    if (halo) { halo.classList.add('fl-hidden'); halo.classList.remove('on'); }
    wrap.classList.remove('lit');
    if (toggleBtn) toggleBtn.classList.remove('fl-active');
  }

  function showFlashlight() {
    flHidden = false;
    wrap.classList.remove('fl-hidden');
    if (glow) glow.classList.remove('fl-hidden');
    if (halo) halo.classList.remove('fl-hidden');
    if (toggleBtn) toggleBtn.classList.add('fl-active');
  }

  /* Close (X) button on the flashlight widget */
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation(); /* Don't trigger drag */
      e.preventDefault();
      hideFlashlight();
    });
  }

  /* Navbar toggle button */
  if (toggleBtn) {
    /* Start as active (flashlight visible by default) */
    toggleBtn.classList.add('fl-active');

    toggleBtn.addEventListener('click', function() {
      if (flHidden) {
        showFlashlight();
      } else {
        hideFlashlight();
      }
    });
  }
})();


/* ── 2. IT MODAL — ENSURE SCROLL ONLY (no horizontal overflow) ─ */
(function fixITModalScroll() {
  'use strict';

  /* Patch the existing openModal to fix modal-body scroll direction */
  var origOpenModal = window._openModalIT || window.openModal;
  if (!origOpenModal) return;

  /* After any modal opens, ensure no horizontal overflow */
  var modalBox = document.getElementById('modalBox');
  if (!modalBox) return;

  var observer = new MutationObserver(function() {
    /* Fix IT ending line text */
    var typingLine = document.getElementById('itTypingLine');
    if (typingLine) {
      typingLine.style.cssText +=
        ';white-space:normal!important;overflow:visible!important;' +
        'word-break:break-word!important;overflow-wrap:break-word!important;' +
        'display:inline!important;max-width:100%!important;';
    }
    /* Ensure ending section doesn't overflow */
    var ending = modalBox.querySelector('.it-m-ending');
    if (ending) {
      ending.style.cssText +=
        ';overflow:visible!important;overflow-x:unset!important;' +
        'white-space:normal!important;flex-wrap:wrap!important;';
    }
    /* Remove any horizontal overflow on modal-body */
    var body = document.getElementById('modalBody');
    if (body) {
      body.style.overflowX = 'hidden';
    }
  });

  observer.observe(modalBox, { childList: true, subtree: true });
})();


/* ── 3. FEATURE BOX — TOUCH 3D TILT (mobile + tablet) ───────── */
(function initFeatureBoxTouchTilt() {
  'use strict';

  /* Only run on touch devices */
  var hasTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  if (!hasTouch) return;

  var boxes = document.querySelectorAll('.feature-box');
  if (!boxes.length) return;

  var MAX_TILT  = 7;    /* reduced tilt for touch */
  var MAX_SCALE = 1.02;
  var activeTouches = new Map();

  boxes.forEach(function(box) {
    box.addEventListener('touchstart', function(e) {
      var touch = e.touches[0];
      var rect  = box.getBoundingClientRect();
      activeTouches.set(box, { rect: rect });

      var x  = touch.clientX - rect.left;
      var y  = touch.clientY - rect.top;
      var cx = rect.width  / 2;
      var cy = rect.height / 2;
      var nx = (x - cx) / cx;
      var ny = (y - cy) / cy;
      var rotY =  nx * MAX_TILT;
      var rotX = -ny * MAX_TILT;

      box.style.transition = 'transform 0.15s cubic-bezier(0.22,1,0.36,1), box-shadow 0.15s ease';
      box.style.transform  =
        'perspective(600px) rotateX(' + rotX.toFixed(2) + 'deg) rotateY(' + rotY.toFixed(2) + 'deg) scale(' + MAX_SCALE + ')';
      box.style.boxShadow  =
        '0 14px 40px rgba(0,0,0,0.48), 0 0 0 1px rgba(212,175,55,0.18)';
      box.style.borderColor = 'rgba(212,175,55,0.30)';
    }, { passive: true });

    box.addEventListener('touchmove', function(e) {
      var data  = activeTouches.get(box);
      if (!data) return;
      var touch = e.touches[0];
      var rect  = data.rect;

      var x  = touch.clientX - rect.left;
      var y  = touch.clientY - rect.top;
      var cx = rect.width  / 2;
      var cy = rect.height / 2;
      var nx = Math.max(-1, Math.min(1, (x - cx) / cx));
      var ny = Math.max(-1, Math.min(1, (y - cy) / cy));
      var rotY =  nx * MAX_TILT;
      var rotX = -ny * MAX_TILT;

      box.style.transition = 'transform 0.08s ease, box-shadow 0.08s ease';
      box.style.transform  =
        'perspective(600px) rotateX(' + rotX.toFixed(2) + 'deg) rotateY(' + rotY.toFixed(2) + 'deg) scale(' + MAX_SCALE + ')';
    }, { passive: true });

    function touchRelease() {
      activeTouches.delete(box);
      box.style.transition = '0.55s cubic-bezier(0.22,1,0.36,1)';
      box.style.transform  = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
      box.style.boxShadow  = '';
      box.style.borderColor = '';
    }

    box.addEventListener('touchend',    touchRelease, { passive: true });
    box.addEventListener('touchcancel', touchRelease, { passive: true });
  });
})();

