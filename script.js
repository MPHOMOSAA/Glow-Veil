/* =============================================
   GLOW VEIL — script.js
   Luxury Skincare | Sandton, South Africa
   Powered by Maphake Automation
   ============================================= */

// =============================================
// PAGE TRANSITION SYSTEM
// =============================================
let isTransitioning = false;

function showPage(page) {
  if (isTransitioning) return;
  const current = document.querySelector('.page.active');
  if (current && current.id === 'page-' + page) return;

  isTransitioning = true;
  const overlay = document.getElementById('page-transition');

  // Step 1: panels slide UP (enter)
  overlay.classList.remove('exit');
  overlay.classList.add('enter');

  setTimeout(function () {
    // Step 2: switch page content while covered
    document.querySelectorAll('.page').forEach(function (p) {
      p.classList.remove('active');
    });

    const target = document.getElementById('page-' + page);
    if (target) {
      target.classList.add('active');
    }

    window.scrollTo({ top: 0 });
    updateNav(page);

    // Step 3: panels slide DOWN (exit)
    setTimeout(function () {
      overlay.classList.remove('enter');
      overlay.classList.add('exit');

      setTimeout(function () {
        overlay.classList.remove('exit');
        isTransitioning = false;
        initReveal();
      }, 600);
    }, 200);
  }, 600);
}

// =============================================
// NAVIGATION
// =============================================
function updateNav(page) {
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.classList.remove('active-link');
  });
  const el = document.getElementById('nav-' + page);
  if (el) el.classList.add('active-link');
}

// Scroll effect on navbar
window.addEventListener('scroll', function () {
  const nav = document.getElementById('navbar');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// =============================================
// MOBILE MENU
// =============================================
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const burger = document.querySelector('.hamburger');
  menu.classList.toggle('open');
  burger.classList.toggle('open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function (e) {
  const menu = document.getElementById('mobileMenu');
  const burger = document.querySelector('.hamburger');
  if (
    menu &&
    menu.classList.contains('open') &&
    !menu.contains(e.target) &&
    !burger.contains(e.target)
  ) {
    menu.classList.remove('open');
    burger.classList.remove('open');
  }
});

// =============================================
// SCROLL REVEAL
// =============================================
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  const obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach(function (el) { obs.observe(el); });
}

// Run on initial load
document.addEventListener('DOMContentLoaded', function () {
  initReveal();
  updateNav('home');
});

// =============================================
// NEWSLETTER
// =============================================
function subscribeNewsletter() {
  const input = document.getElementById('nlInput');
  if (!input) return;
  if (input.value && input.value.includes('@')) {
    input.value = '';
    input.placeholder = '✦ Thank you for joining the Glow List!';
    input.style.color = 'rgba(255,247,239,0.7)';
  } else {
    input.style.borderColor = 'rgba(216,183,106,0.8)';
    input.placeholder = 'Please enter a valid email address';
  }
}

// =============================================
// CONTACT FORM
// =============================================
function submitContact() {
  const name = document.querySelector('.contact-input[placeholder="Your name"]');
  const email = document.querySelector('.contact-input[placeholder="your@email.com"]');
  if (name && name.value && email && email.value.includes('@')) {
    alert('Thank you for reaching out to Glow Veil! We will be in touch soon. ✦\n\nFor instant help, chat with Glow Guide — powered by Maphake Automation.');
  } else {
    alert('Please fill in your name and a valid email address.');
  }
}

// =============================================
// FLOATING CHAT WIDGET
// =============================================
let floatOpen = false;

function toggleFloatChat() {
  floatOpen = !floatOpen;
  const w = document.getElementById('floatWidget');
  if (w) {
    if (floatOpen) {
      w.classList.add('open');
    } else {
      w.classList.remove('open');
    }
  }
}

function sendFloat() {
  const input = document.getElementById('floatInput');
  if (!input) return;
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';

  const msgs = document.getElementById('floatMessages');
  appendFloatMsg(msgs, msg, 'user');
  msgs.scrollTop = msgs.scrollHeight;

  callGlowGuide(msg).then(function (reply) {
    appendFloatMsg(msgs, reply, 'bot');
    msgs.scrollTop = msgs.scrollHeight;
  });
}

function appendFloatMsg(container, text, who) {
  const div = document.createElement('div');
  div.style.cssText =
    'max-width:85%;align-self:' + (who === 'user' ? 'flex-end' : 'flex-start') + ';';
  const bubble = document.createElement('div');
  bubble.style.cssText =
    who === 'user'
      ? 'background:#3A2A24;color:#FFF7EF;border-radius:16px 4px 16px 16px;padding:11px 14px;font-size:0.83rem;font-weight:300;line-height:1.6'
      : 'background:#fff;color:#3A2A24;border:1px solid rgba(216,183,106,0.2);border-radius:4px 16px 16px 16px;padding:11px 14px;font-size:0.83rem;font-weight:300;line-height:1.6';
  bubble.textContent = text;
  div.appendChild(bubble);
  container.appendChild(div);
}

// Float input: Enter key
document.addEventListener('DOMContentLoaded', function () {
  const fi = document.getElementById('floatInput');
  if (fi) {
    fi.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') sendFloat();
    });
  }
});

// =============================================
// MAIN AI CHAT
// =============================================
function sendMessage() {
  const input = document.getElementById('aiInput');
  if (!input) return;
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';

  appendMsg(msg, 'user');
  showTyping(true);

  callGlowGuide(msg).then(function (reply) {
    showTyping(false);
    appendMsg(reply, 'bot');
  });
}

function sendQuick(text) {
  const input = document.getElementById('aiInput');
  if (input) input.value = text;
  sendMessage();
}

function appendMsg(text, who) {
  const msgs = document.getElementById('aiMessages');
  if (!msgs) return;

  const div = document.createElement('div');
  div.className = 'msg msg-' + who;

  if (who === 'bot') {
    const name = document.createElement('div');
    name.className = 'msg-name';
    name.textContent = 'Glow Guide';
    div.appendChild(name);
  }

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.textContent = text;
  div.appendChild(bubble);

  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping(show) {
  const t = document.getElementById('typingIndicator');
  const msgs = document.getElementById('aiMessages');
  if (!t || !msgs) return;

  if (show) {
    t.style.display = 'flex';
    msgs.appendChild(t);
    msgs.scrollTop = msgs.scrollHeight;
  } else {
    t.style.display = 'none';
  }
}

// Enter key on AI input
document.addEventListener('DOMContentLoaded', function () {
  const ai = document.getElementById('aiInput');
  if (ai) {
    ai.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') sendMessage();
    });
  }
});

// =============================================
// GLOW GUIDE AI — Anthropic API Call
// =============================================
async function callGlowGuide(userMsg) {
  const SYSTEM_PROMPT = `You are Glow Guide, the AI skincare assistant for Glow Veil — a luxury skincare brand from Sandton, Johannesburg, South Africa, founded in 2023. You speak in a warm, elegant, and feminine tone.

Glow Veil products:
- Radiance Serum (30ml): Brightens complexion, promotes soft natural glow, lightweight formula, ideal for daily morning use.
- Face Cream (50ml): Hydrates and nourishes deeply, rich daily moisturiser, use morning and evening.
- Gentle Cleanser (100ml): Gentle daily cleanser, preserves natural moisture, step 1 of any skincare routine.
- Body Butter: Deep body moisturiser, rich whipped texture, use after showering for soft, nourished skin.

Recommended daily routine: 
1. Cleanse with Gentle Cleanser 
2. Apply Radiance Serum 
3. Finish with Face Cream 
For body: Body Butter after showering.

Brand: Founded 2023, Sandton Johannesburg, South Africa. Slogan: "Reveal the glow beneath the veil."

IMPORTANT: You are powered by Maphake Automation. If users have any queries or are unable to reach Glow Veil directly, remind them to use you (the AI assistant) as their first point of contact. Always mention that Glow Guide is powered by Maphake Automation when relevant.

Products are not medical treatments — always advise consulting a dermatologist for serious skin conditions. Keep responses warm, concise, and elegant. Use ✦ occasionally for style.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userMsg }],
      }),
    });

    const data = await response.json();
    const text = (data.content || [])
      .map(function (c) { return c.text || ''; })
      .join('');

    return (
      text ||
      'I would love to help you find your perfect glow! ✦ Explore our range or ask me anything about Glow Veil skincare. Powered by Maphake Automation.'
    );
  } catch (err) {
    return 'For a simple Glow Veil routine, start with the Gentle Cleanser, follow with the Radiance Serum, then finish with the Face Cream. For your body, use the Body Butter after showering. ✦ — Glow Guide, powered by Maphake Automation.';
  }
}
