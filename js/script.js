/* ============================================================
   Ridhima World School — script.js
   Vanilla JS interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Mobile Menu Toggle ---------- */
  var menuToggle = document.querySelector('.menu-toggle');
  var mainNav = document.getElementById('primary-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('open');
      var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
    });
    // Close menu when a link is clicked
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Header Scroll Shadow ---------- */
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ---------- IntersectionObserver Scroll Animations ---------- */
  var animatedEls = document.querySelectorAll('.fade-in, .slide-in-right, .scale-in');
  if ('IntersectionObserver' in window && animatedEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    animatedEls.forEach(function (el) { observer.observe(el); });
  } else {
    animatedEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- Animated Counters ---------- */
  var counters = document.querySelectorAll('[data-counter]');
  if ('IntersectionObserver' in window && counters.length) {
    var counterObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { counterObs.observe(c); });
  }
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-counter'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 2000;
    var start = 0;
    var startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  /* ---------- Gallery Filtering ---------- */
  var galleryFilters = document.querySelectorAll('.gallery-filters .filter-btn, .filter-bar .filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryFilters.length && galleryItems.length) {
    galleryFilters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');
        galleryFilters.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        galleryItems.forEach(function (item) {
          var cat = item.getAttribute('data-category');
          if (filter === 'all' || cat === filter) {
            item.style.display = '';
            item.classList.add('fade-in');
            setTimeout(function () { item.classList.add('visible'); }, 50);
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---------- Lightbox ---------- */
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var lbContent = lightbox.querySelector('.lightbox-placeholder');
    var lbClose = lightbox.querySelector('.lightbox-close');
    var lbPrev = lightbox.querySelector('.lightbox-prev');
    var lbNext = lightbox.querySelector('.lightbox-next');
    var currentLbIndex = 0;
    var lbItems = Array.from(document.querySelectorAll('.gallery-item'));

    lbItems.forEach(function (item, idx) {
      item.addEventListener('click', function () {
        currentLbIndex = idx;
        openLightbox();
      });
    });

    function openLightbox() {
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
    function navLightbox(dir) {
      currentLbIndex = (currentLbIndex + dir + lbItems.length) % lbItems.length;
      openLightbox();
    }
    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lbPrev) lbPrev.addEventListener('click', function (e) { e.stopPropagation(); navLightbox(-1); });
    if (lbNext) lbNext.addEventListener('click', function (e) { e.stopPropagation(); navLightbox(1); });
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navLightbox(-1);
      if (e.key === 'ArrowRight') navLightbox(1);
    });
  }

  /* ---------- Testimonials Slider ---------- */
  var testimonials = document.querySelectorAll('.testimonial-card');
  var dots = document.querySelectorAll('.testimonial-dot');
  if (testimonials.length > 1) {
    var currentTm = 0;
    var tmInterval = null;

    function showTestimonial(idx) {
      testimonials.forEach(function (t, i) {
        t.classList.toggle('active', i === idx);
      });
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === idx);
      });
      currentTm = idx;
    }
    function nextTestimonial() {
      showTestimonial((currentTm + 1) % testimonials.length);
    }
    function startSlider() { tmInterval = setInterval(nextTestimonial, 6000); }
    function stopSlider() { clearInterval(tmInterval); }

    dots.forEach(function (dot, idx) {
      dot.addEventListener('click', function () {
        showTestimonial(idx);
        stopSlider();
        startSlider();
      });
    });

    var sliderWrap = document.querySelector('.testimonials-slider');
    if (sliderWrap) {
      sliderWrap.addEventListener('mouseenter', stopSlider);
      sliderWrap.addEventListener('mouseleave', startSlider);
    }
    startSlider();
  }

  /* ---------- Faculty Filters ---------- */
  var facultyFilters = document.querySelectorAll('.faculty-filters .filter-btn');
  var facultyCards = document.querySelectorAll('.faculty-card');
  if (facultyFilters.length && facultyCards.length) {
    facultyFilters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var dept = btn.getAttribute('data-filter');
        facultyFilters.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        facultyCards.forEach(function (card) {
          var cardDept = card.getAttribute('data-department');
          if (dept === 'all' || cardDept === dept) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---------- Notice Search & Filter ---------- */
  var noticeSearch = document.querySelector('.notice-search input');
  var noticeCards = document.querySelectorAll('.notice-card');
  var noticeFilterBtns = document.querySelectorAll('.notice-filters .filter-btn');
  if (noticeSearch && noticeCards.length) {
    noticeSearch.addEventListener('input', function () {
      var term = noticeSearch.value.toLowerCase();
      noticeCards.forEach(function (card) {
        var text = card.textContent.toLowerCase();
        card.style.display = text.indexOf(term) !== -1 ? '' : 'none';
      });
    });
  }
  if (noticeFilterBtns.length && noticeCards.length) {
    noticeFilterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var type = btn.getAttribute('data-filter');
        noticeFilterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        noticeCards.forEach(function (card) {
          var cardType = card.getAttribute('data-type');
          if (type === 'all' || cardType === type) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---------- FAQ Accordion ---------- */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        faqItems.forEach(function (other) { other.classList.remove('open'); });
        if (!isOpen) item.classList.add('open');
      });
    }
  });

  /* ---------- Portal Tabs ---------- */
  var portalTabs = document.querySelectorAll('.portal-tab');
  var portalPanels = document.querySelectorAll('.portal-panel');
  if (portalTabs.length && portalPanels.length) {
    portalTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.getAttribute('data-tab');
        portalTabs.forEach(function (t) { t.classList.remove('active'); });
        portalPanels.forEach(function (p) { p.classList.remove('active'); });
        tab.classList.add('active');
        var panel = document.getElementById('panel-' + target);
        if (panel) panel.classList.add('active');
      });
    });
  }

  /* ---------- Form Demo Submission ---------- */
  var forms = document.querySelectorAll('form[data-demo]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msgEl = form.querySelector('.form-message');
      var btn = form.querySelector('button[type="submit"], input[type="submit"]');
      var origText = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Submitting...'; }
      // Simulate async submission
      setTimeout(function () {
        if (msgEl) {
          msgEl.className = 'form-message success';
          msgEl.textContent = 'Thank you! Your submission has been received. We will get back to you soon.';
          msgEl.style.display = 'block';
        }
        form.reset();
        if (btn) { btn.disabled = false; btn.textContent = origText; }
        setTimeout(function () {
          if (msgEl) { msgEl.style.display = 'none'; }
        }, 6000);
      }, 1200);
    });
  });

  /* ---------- Scroll to Top ---------- */
  var scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }, { passive: true });
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Active Nav Link ---------- */
  var navLinks = document.querySelectorAll('.main-nav a');
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
    // Handle dropdown parent active state
    var dropdown = link.closest('.dropdown');
    if (dropdown) {
      var parentLink = dropdown.previousElementSibling;
      if (parentLink && href === currentPage && parentLink.classList.contains('active') === false) {
        // keep parent normal; child gets active
      }
    }
  });

  /* ---------- Footer Year ---------- */
  var yearEls = document.querySelectorAll('.current-year');
  var year = new Date().getFullYear();
  yearEls.forEach(function (el) { el.textContent = year; });

  /* ---------- Smooth Anchor Scroll (already via CSS, but fallback) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target && this.getAttribute('href') !== '#') {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();