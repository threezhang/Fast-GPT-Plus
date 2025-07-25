/**
 * Simplified Motion Animation System for Jekyll
 * Using vanilla JavaScript with progressive enhancement
 */

(function() {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Simple animation utilities
  const animate = {
    fadeIn: function(element, delay = 0) {
      setTimeout(() => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        // Force reflow
        element.offsetHeight;
        
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, delay);
    },

    slideIn: function(element, direction = 'left', delay = 0) {
      const distance = direction === 'left' ? '-30px' : '30px';
      
      setTimeout(() => {
        element.style.opacity = '0';
        element.style.transform = `translateX(${distance})`;
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        // Force reflow
        element.offsetHeight;
        
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
      }, delay);
    },

    scaleIn: function(element, delay = 0) {
      setTimeout(() => {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.9)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        // Force reflow
        element.offsetHeight;
        
        element.style.opacity = '1';
        element.style.transform = 'scale(1)';
      }, delay);
    }
  };

  // Intersection Observer for scroll animations
  function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            
            // Apply different animations based on class
            if (entry.target.classList.contains('fade-in')) {
              animate.fadeIn(entry.target, index * 100);
            } else if (entry.target.classList.contains('slide-in-left')) {
              animate.slideIn(entry.target, 'left', index * 100);
            } else if (entry.target.classList.contains('slide-in-right')) {
              animate.slideIn(entry.target, 'right', index * 100);
            } else if (entry.target.classList.contains('scale-in')) {
              animate.scaleIn(entry.target, index * 100);
            } else {
              // Default animation
              animate.fadeIn(entry.target, index * 100);
            }
          }
        });
      }, observerOptions);

      // Observe all animatable elements
      const elements = document.querySelectorAll('.scroll-fade, .fade-in, .slide-in-left, .slide-in-right, .scale-in');
      elements.forEach((el, index) => {
        // Check if element is already in viewport on load
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !el.classList.contains('animated')) {
          // Animate immediately for visible elements
          el.classList.add('animated');
          animate.fadeIn(el, index * 50);
        } else {
          // Otherwise observe for scroll
          observer.observe(el);
        }
      });
    }
  }

  // Counter animation
  function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16); // 60fps
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };
      
      // Start animation when visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !counter.classList.contains('counted')) {
            counter.classList.add('counted');
            updateCounter();
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(counter);
    });
  }

  // Parallax scrolling
  function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length === 0) return;
    
    let ticking = false;
    
    function updateParallax() {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.dataset.speed || '0.5');
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
      
      ticking = false;
    }
    
    window.addEventListener('scroll', () => {
      if (!ticking && !prefersReducedMotion) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });
  }

  // Hover effects
  function initHoverEffects() {
    // Magnetic buttons
    document.querySelectorAll('.magnetic').forEach(elem => {
      elem.addEventListener('mousemove', (e) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        elem.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });
      
      elem.addEventListener('mouseleave', () => {
        elem.style.transform = 'translate(0, 0)';
      });
    });

    // Button press effect
    document.querySelectorAll('.btn, button').forEach(btn => {
      btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.95)';
      });
      
      btn.addEventListener('mouseup', () => {
        btn.style.transform = 'scale(1)';
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
      });
    });
  }

  // Text reveal animation
  function initTextReveal() {
    document.querySelectorAll('.text-reveal').forEach(element => {
      const text = element.textContent;
      element.textContent = '';
      element.style.display = 'block';
      
      // Create spans for each character
      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        element.appendChild(span);
      });
      
      // Animate when visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !element.classList.contains('revealed')) {
            element.classList.add('revealed');
            const spans = element.querySelectorAll('span');
            
            spans.forEach((span, i) => {
              setTimeout(() => {
                span.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
              }, i * 30);
            });
          }
        });
      });
      
      observer.observe(element);
    });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          
          const offset = target.offsetTop - 100;
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Initialize Alpine.js x-motion directive
  function initAlpineMotion() {
    if (window.Alpine) {
      window.Alpine.directive('motion', (el, { expression }) => {
        try {
          const config = new Function('return ' + expression)();
          
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting && !el.classList.contains('motion-animated')) {
                el.classList.add('motion-animated');
                
                // Apply initial styles
                if (config.animate) {
                  Object.keys(config.animate).forEach(prop => {
                    if (Array.isArray(config.animate[prop])) {
                      el.style[prop] = config.animate[prop][0];
                    }
                  });
                }
                
                // Animate after delay
                setTimeout(() => {
                  el.style.transition = `all ${config.duration || 0.6}s ${config.easing || 'ease-out'}`;
                  
                  if (config.animate) {
                    Object.keys(config.animate).forEach(prop => {
                      if (Array.isArray(config.animate[prop])) {
                        el.style[prop] = config.animate[prop][1];
                      }
                    });
                  }
                }, (config.delay || 0) * 1000);
              }
            });
          }, { threshold: 0.1 });
          
          if (config.inView !== false) {
            observer.observe(el);
          }
        } catch (e) {
          console.error('Alpine motion directive error:', e);
        }
      });
    }
  }

  // Hide page loader
  function hideLoader() {
    const loader = document.getElementById('pageLoader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
  }

  // Initialize everything when DOM is ready
  function init() {
    hideLoader();
    
    if (!prefersReducedMotion) {
      initScrollAnimations();
      animateCounters();
      initParallax();
      initHoverEffects();
      initTextReveal();
    }
    
    initSmoothScroll();
    
    // Wait for Alpine.js to load
    if (window.Alpine) {
      initAlpineMotion();
    } else {
      document.addEventListener('alpine:init', initAlpineMotion);
    }
  }

  // Start when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();