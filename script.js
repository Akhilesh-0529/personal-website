/**
 * Akhilesh Yerram Portfolio & Digital Garden
 * Interactive behaviors: Theme switch, Cmd+K palette, project filters, live clock, copy email
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle Logic
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIconSun = document.getElementById('theme-icon-sun');
  const themeIconMoon = document.getElementById('theme-icon-moon');
  const htmlRoot = document.documentElement;

  // Determine initial theme: localStorage > system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  applyTheme(currentTheme);

  function applyTheme(theme) {
    if (theme === 'dark') {
      htmlRoot.setAttribute('data-theme', 'dark');
      if (themeIconSun && themeIconMoon) {
        themeIconSun.style.display = 'block';
        themeIconMoon.style.display = 'none';
      }
    } else {
      htmlRoot.removeAttribute('data-theme');
      if (themeIconSun && themeIconMoon) {
        themeIconSun.style.display = 'none';
        themeIconMoon.style.display = 'block';
      }
    }
    localStorage.setItem('theme', theme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = htmlRoot.getAttribute('data-theme') === 'dark';
      applyTheme(isDark ? 'light' : 'dark');
    });
  }

  // 2. Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.25s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Live Hyderabad Clock
  const clockElement = document.getElementById('live-clock');
  function updateHyderabadTime() {
    if (!clockElement) return;
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      clockElement.textContent = formatter.format(now) + ' IST (Hyderabad)';
    } catch (e) {
      clockElement.textContent = 'Asia/Kolkata';
    }
  }
  updateHyderabadTime();
  setInterval(updateHyderabadTime, 1000);

  // 4. Copy Email & Toast Notification
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toast-msg');

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'akhileshyerram2006@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('✓ Email copied to clipboard (' + email + ')');
      }).catch(() => {
        showToast('akhileshyerram2006@gmail.com');
      });
    });
  });

  // 5. Command Palette (Cmd+K / Ctrl+K)
  const cmdBackdrop = document.getElementById('cmd-backdrop');
  const cmdInput = document.getElementById('cmd-input');
  const cmdTriggerBtns = document.querySelectorAll('.cmd-trigger');
  const cmdItems = document.querySelectorAll('.cmd-item');

  function openCommandPalette() {
    if (!cmdBackdrop) return;
    cmdBackdrop.classList.add('active');
    if (cmdInput) {
      cmdInput.value = '';
      cmdInput.focus();
      filterCmdItems('');
    }
  }

  function closeCommandPalette() {
    if (!cmdBackdrop) return;
    cmdBackdrop.classList.remove('active');
  }

  cmdTriggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCommandPalette();
    });
  });

  if (cmdBackdrop) {
    cmdBackdrop.addEventListener('click', (e) => {
      if (e.target === cmdBackdrop) {
        closeCommandPalette();
      }
    });
  }

  // Keyboard shortcut listener
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdBackdrop && cmdBackdrop.classList.contains('active')) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
    } else if (e.key === 'Escape') {
      closeCommandPalette();
    }
  });

  // Search filtering in Cmd+K
  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
      filterCmdItems(e.target.value.toLowerCase().trim());
    });
  }

  function filterCmdItems(query) {
    cmdItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (!query || text.includes(query)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Handle command item click
  cmdItems.forEach(item => {
    item.addEventListener('click', () => {
      const action = item.getAttribute('data-action');
      const target = item.getAttribute('data-target');

      closeCommandPalette();

      if (action === 'navigate' && target) {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (action === 'copy-email') {
        const email = 'akhileshyerram2006@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
          showToast('✓ Email copied to clipboard');
        });
      } else if (action === 'toggle-theme') {
        const isDark = htmlRoot.getAttribute('data-theme') === 'dark';
        applyTheme(isDark ? 'light' : 'dark');
      } else if (action === 'open-link' && target) {
        window.open(target, '_blank');
      }
    });
  });

  // 6. Active Nav Link on Scroll
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  });
});
