// Shared behaviour for aalam.ch: language switch, mobile menu, header state, lightbox, reveal.
(function(){
  // Header and footer strings, shared by every page (data-hl).
  const CHROME = {
    "skip": ["Zum Inhalt", "Skip to content"],
    "brand.sub": ["Bid Management · IT-Einkauf · Digitalisierung", "Bid management · IT procurement · Digitalisation"],
    "nav.leistungen": ["Schwerpunkte", "Focus areas"], "nav.referenzen": ["Referenzprojekte", "Reference projects"],
    "nav.profil": ["Profil", "Profile"], "nav.kontakt": ["Kontakt", "Contact"],
    "ft.p": ["Persönliche Website mit Profil und eigenen Projekten rund um Bid Management, IT-Einkauf und Digitalisierung.",
             "Personal website with profile and own projects on bid management, IT procurement and digitalisation."],
    "ft.h1": ["Schwerpunkte", "Focus areas"], "ft.h2": ["Mehr", "More"],
    "ft.l1": ["Digitalisierung", "Digitalisation"], "ft.l2": ["KI &amp; Risiko", "AI &amp; risk"], "ft.l3": ["IT-Ausschreibungen", "IT tenders"],
    "ft.legal": ["Impressum &amp; Datenschutz", "Imprint &amp; privacy"]
  };
  // Page content: German lives in the markup, window.EN holds English (pages with their own I18N handle themselves).
  const EN = window.EN;
  const DE = {};
  const meta = document.querySelector('meta[name="description"]');
  if (EN) {
    DE.title = document.title;
    if (meta) DE.description = meta.content;
    document.querySelectorAll('[data-i18n]').forEach(el => { DE[el.dataset.i18n] = el.innerHTML; });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => { DE[el.dataset.i18nAlt] = el.alt; });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { DE[el.dataset.i18nPh] = el.placeholder; });
  }
  function setLang(lang){
    const en = lang === 'en';
    document.querySelectorAll('[data-hl]').forEach(el => { const v = CHROME[el.dataset.hl]; if (v) el.innerHTML = v[en ? 1 : 0]; });
    if (EN) {
      const pick = k => (en && EN[k] !== undefined ? EN[k] : DE[k]);
      document.documentElement.lang = en ? 'en' : 'de';
      if (pick('title')) document.title = pick('title');
      if (meta && pick('description')) meta.content = pick('description');
      document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = pick(el.dataset.i18n); });
      document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = pick(el.dataset.i18nAlt); });
      document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = pick(el.dataset.i18nPh); });
    }
    document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    try { localStorage.setItem('lang', lang); } catch(e) {}
  }
  window.siteSetLang = setLang;
  document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  let initial = 'de';
  try { if (localStorage.getItem('lang') === 'en') initial = 'en'; } catch(e) {}
  if (document.body.hasAttribute('data-de-only')) { initial = 'de'; document.querySelectorAll('.lang').forEach(l => l.hidden = true); }
  setLang(initial);

  // Header shadow and mobile menu
  const header = document.querySelector('.site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const btn = document.querySelector('.menu-btn'), nav = document.querySelector('.nav');
  if (btn && nav) btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Reveal on scroll (threshold 0: tall sections must still trigger)
  // Content already on screen at load shows at once, without animation.
  const items = [...document.querySelectorAll('.reveal')].filter(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) { el.style.transition = 'none'; el.classList.add('in'); return false; }
    return true;
  });
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0, rootMargin: '0px 0px -8% 0px' });
    items.forEach(el => io.observe(el));
  } else items.forEach(el => el.classList.add('in'));

  // Screenshot lightbox
  const shots = document.querySelectorAll('.shot img');
  if (!shots.length || document.getElementById('lightbox')) return;
  const lb = document.createElement('div');
  lb.className = 'lightbox'; lb.hidden = true; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true');
  lb.innerHTML = '<button type="button">&times;</button><img alt=""><figcaption></figcaption>';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img'), lbCap = lb.querySelector('figcaption'), lbClose = lb.querySelector('button');
  let last = null;
  const onKey = e => { if (e.key === 'Escape') close(); };
  function open(img){
    const en = document.documentElement.lang === 'en';
    last = document.activeElement;
    lbImg.src = img.currentSrc || img.src; lbImg.alt = img.alt; lbCap.textContent = img.alt;
    lbClose.setAttribute('aria-label', en ? 'Close' : 'Schliessen');
    lb.hidden = false; document.body.style.overflow = 'hidden'; lbClose.focus();
    document.addEventListener('keydown', onKey);
  }
  function close(){
    lb.hidden = true; document.body.style.overflow = '';
    document.removeEventListener('keydown', onKey); if (last) last.focus();
  }
  shots.forEach(img => {
    img.tabIndex = 0; img.setAttribute('role', 'button');
    img.addEventListener('click', () => open(img));
    img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img); } });
  });
  lbClose.addEventListener('click', close); lbImg.addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
})();
