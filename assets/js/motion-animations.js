/**
 * Motion-based Animation System
 * Using Motion One for performant web animations
 */

import { animate, inView, scroll, spring, stagger } from "motion";
import Alpine from 'alpinejs';

// Initialize Alpine.js with Motion integration
window.Alpine = Alpine;

// Alpine.js Motion Plugin
Alpine.plugin((Alpine) => {
  // Motion directive for entrance animations
  Alpine.directive('motion', (el, { expression }, { evaluate }) => {
    const config = evaluate(expression) || {};
    
    inView(el, () => {
      animate(
        el,
        config.animate || { opacity: [0, 1], y: [20, 0] },
        {
          duration: config.duration || 0.5,
          delay: config.delay || 0,
          easing: config.easing || spring()
        }
      );
    });
  });
});

class MotionAnimationSystem {
  constructor() {
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!this.prefersReducedMotion) {
      this.init();
    }
  }

  init() {
    // Initialize all animation types
    this.initScrollAnimations();
    this.initHeroAnimations();
    this.initCardAnimations();
    this.initTextAnimations();
    this.initInteractiveElements();
    this.initParallaxEffects();
    this.initPageTransitions();
  }

  /**
   * Scroll-triggered animations with Motion One
   */
  initScrollAnimations() {
    // Fade in elements
    document.querySelectorAll('.scroll-fade').forEach((element) => {
      inView(element, () => {
        animate(
          element,
          { 
            opacity: [0, 1], 
            y: [30, 0],
            filter: ["blur(10px)", "blur(0px)"]
          },
          { 
            duration: 0.8,
            easing: [0.17, 0.55, 0.55, 1]
          }
        );
      }, { margin: "-100px" });
    });

    // Staggered list animations
    document.querySelectorAll('.stagger-list').forEach((list) => {
      const items = list.querySelectorAll('li, .stagger-item');
      
      inView(list, () => {
        animate(
          items,
          { 
            opacity: [0, 1], 
            x: [-20, 0],
            scale: [0.9, 1]
          },
          { 
            duration: 0.4,
            delay: stagger(0.1),
            easing: spring({ stiffness: 100, damping: 15 })
          }
        );
      });
    });

    // Number counters
    document.querySelectorAll('.counter').forEach((counter) => {
      const target = parseInt(counter.dataset.target || '0');
      
      inView(counter, () => {
        animate(
          (progress) => {
            counter.textContent = Math.floor(progress * target).toLocaleString();
          },
          { 
            duration: 2,
            easing: "ease-out"
          }
        );
      });
    });
  }

  /**
   * Hero section animations
   */
  initHeroAnimations() {
    const hero = document.querySelector('.hero-bg');
    if (!hero) return;

    // Animated gradient background
    animate(
      hero,
      { 
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
      },
      { 
        duration: 20,
        repeat: Infinity,
        easing: "linear"
      }
    );

    // Hero content animation
    const heroContent = hero.querySelectorAll('h1, h2, p, .btn, .glass-button');
    animate(
      heroContent,
      { 
        opacity: [0, 1], 
        y: [30, 0]
      },
      { 
        duration: 0.8,
        delay: stagger(0.1, { start: 0.3 }),
        easing: spring({ stiffness: 100, damping: 20 })
      }
    );

    // Floating elements
    hero.querySelectorAll('.float').forEach((el, index) => {
      animate(
        el,
        { 
          y: [0, -20, 0]
        },
        { 
          duration: 3,
          repeat: Infinity,
          delay: index * 0.2,
          easing: "ease-in-out"
        }
      );
    });
  }

  /**
   * Card hover and entrance animations
   */
  initCardAnimations() {
    document.querySelectorAll('.glass-card, .card').forEach((card) => {
      // Entrance animation
      inView(card, () => {
        animate(
          card,
          { 
            opacity: [0, 1], 
            scale: [0.95, 1],
            rotateX: [10, 0]
          },
          { 
            duration: 0.6,
            easing: spring({ stiffness: 100, damping: 20 })
          }
        );
      });

      // Hover animations
      card.addEventListener('mouseenter', () => {
        animate(
          card,
          { 
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
          },
          { 
            duration: 0.2,
            easing: "ease-out"
          }
        );
      });

      card.addEventListener('mouseleave', () => {
        animate(
          card,
          { 
            scale: 1,
            boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)"
          },
          { 
            duration: 0.2,
            easing: "ease-out"
          }
        );
      });
    });
  }

  /**
   * Text reveal animations
   */
  initTextAnimations() {
    // Split text animation
    document.querySelectorAll('.text-reveal').forEach((element) => {
      const text = element.textContent;
      element.textContent = '';
      
      // Create spans for each character
      [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        element.appendChild(span);
      });

      inView(element, () => {
        animate(
          element.querySelectorAll('span'),
          { 
            opacity: [0, 1], 
            y: [20, 0],
            rotateZ: [-5, 0]
          },
          { 
            duration: 0.5,
            delay: stagger(0.02),
            easing: spring({ stiffness: 200, damping: 20 })
          }
        );
      });
    });

    // Gradient text animation
    document.querySelectorAll('.gradient-text').forEach((element) => {
      animate(
        element,
        { 
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        },
        { 
          duration: 5,
          repeat: Infinity,
          easing: "linear"
        }
      );
    });
  }

  /**
   * Interactive element behaviors
   */
  initInteractiveElements() {
    // Magnetic buttons
    document.querySelectorAll('.magnetic').forEach((elem) => {
      let animationId;
      
      elem.addEventListener('mousemove', (e) => {
        const rect = elem.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
        
        if (animationId) animationId.stop();
        
        animationId = animate(
          elem,
          { x, y },
          { duration: 0.1 }
        );
      });
      
      elem.addEventListener('mouseleave', () => {
        if (animationId) animationId.stop();
        
        animate(
          elem,
          { x: 0, y: 0 },
          { 
            duration: 0.3,
            easing: spring({ stiffness: 200, damping: 20 })
          }
        );
      });
    });

    // Button press effect
    document.querySelectorAll('.btn, button').forEach((btn) => {
      btn.addEventListener('mousedown', () => {
        animate(btn, { scale: 0.95 }, { duration: 0.1 });
      });
      
      btn.addEventListener('mouseup', () => {
        animate(
          btn, 
          { scale: 1 }, 
          { 
            duration: 0.2,
            easing: spring({ stiffness: 500, damping: 15 })
          }
        );
      });
    });
  }

  /**
   * Parallax scrolling effects
   */
  initParallaxEffects() {
    document.querySelectorAll('.parallax').forEach((element) => {
      const speed = parseFloat(element.dataset.speed || '0.5');
      
      scroll(
        animate(element, {
          y: [0, -200 * speed]
        }),
        {
          target: element,
          offset: ["start end", "end start"]
        }
      );
    });

    // Advanced parallax for hero section
    const heroElements = document.querySelectorAll('.hero-bg > *');
    heroElements.forEach((el, i) => {
      scroll(
        animate(el, {
          y: [0, -50 * (i + 1) * 0.2]
        }),
        {
          target: document.querySelector('.hero-bg'),
          offset: ["start start", "end start"]
        }
      );
    });
  }

  /**
   * Page transition animations
   */
  initPageTransitions() {
    // Animate page load
    animate(
      document.body,
      { opacity: [0, 1] },
      { duration: 0.3 }
    );

    // Smooth link transitions
    document.querySelectorAll('a[href^="/"], a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Handle hash links
        if (href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const offset = target.offsetTop - 100;
            animate(
              window.scrollY,
              offset,
              {
                duration: 0.8,
                easing: [0.17, 0.55, 0.55, 1],
                onUpdate: (latest) => window.scrollTo(0, latest)
              }
            );
          }
        }
      });
    });
  }

  /**
   * Utility method to add custom animations
   */
  addAnimation(selector, animation, options = {}) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      if (options.inView) {
        inView(el, () => animate(el, animation, options));
      } else {
        animate(el, animation, options);
      }
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Start Alpine.js
  Alpine.start();
  
  // Initialize Motion animations
  window.motionSystem = new MotionAnimationSystem();
  
  // Remove page loader
  const loader = document.getElementById('pageLoader');
  if (loader) {
    animate(
      loader,
      { opacity: 0 },
      { 
        duration: 0.5,
        onComplete: () => loader.classList.add('hidden')
      }
    );
  }
});

// Export for use in other scripts
export { MotionAnimationSystem, animate, inView, scroll, spring, stagger };