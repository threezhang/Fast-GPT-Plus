/**
 * Fast-GPT-Plus Animation System
 * Sophisticated animations and interactions
 */

class AnimationSystem {
  constructor() {
    this.init();
  }

  init() {
    this.initScrollAnimations();
    this.initSVGAnimations();
    this.initParallax();
    this.initInteractiveElements();
    this.initNumberCounters();
    this.initMouseEffects();
  }

  /**
   * Scroll-triggered animations
   */
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add staggered delay for multiple elements
          setTimeout(() => {
            entry.target.classList.add('visible');
            
            // Trigger SVG animations if present
            const svgElements = entry.target.querySelectorAll('.svg-draw');
            svgElements.forEach(svg => {
              svg.style.animation = 'draw 2s ease-in-out forwards';
            });
          }, index * 100);
          
          scrollObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all scroll-animated elements
    document.querySelectorAll('.scroll-fade, .scroll-scale, .scroll-slide').forEach(el => {
      scrollObserver.observe(el);
    });
  }

  /**
   * SVG path and shape animations
   */
  initSVGAnimations() {
    // Animate SVG paths on hover
    document.querySelectorAll('.svg-hover-draw').forEach(svg => {
      const paths = svg.querySelectorAll('path, circle, rect, line');
      
      svg.addEventListener('mouseenter', () => {
        paths.forEach((path, index) => {
          const length = path.getTotalLength ? path.getTotalLength() : 100;
          path.style.strokeDasharray = length;
          path.style.strokeDashoffset = length;
          path.style.animation = `draw 1s ${index * 0.1}s ease-in-out forwards`;
        });
      });
    });

    // Morph animations for shape transitions
    this.initSVGMorphing();
  }

  /**
   * SVG morphing animations
   */
  initSVGMorphing() {
    document.querySelectorAll('.svg-morph').forEach(svg => {
      const shapes = svg.querySelectorAll('[data-morph-to]');
      
      shapes.forEach(shape => {
        const originalPath = shape.getAttribute('d');
        const morphPath = shape.getAttribute('data-morph-to');
        let isMorphed = false;
        
        svg.addEventListener('click', () => {
          shape.style.transition = 'd 0.5s ease-in-out';
          shape.setAttribute('d', isMorphed ? originalPath : morphPath);
          isMorphed = !isMorphed;
        });
      });
    });
  }

  /**
   * Parallax scrolling effects
   */
  initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        const offset = scrolled * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    });
  }

  /**
   * Interactive element behaviors
   */
  initInteractiveElements() {
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

    // Ripple effect
    document.querySelectorAll('.ripple').forEach(elem => {
      elem.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  /**
   * Animated number counters
   */
  initNumberCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = parseInt(counter.getAttribute('data-duration') || 2000);
      const increment = target / (duration / 16); // 60fps
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };
      
      updateCounter();
    };

    // Trigger counters when visible
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  /**
   * Advanced mouse effects
   */
  initMouseEffects() {
    // Custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Smooth cursor animation
    const animateCursor = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      
      cursorX += dx * 0.1;
      cursorY += dy * 0.1;
      
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      
      requestAnimationFrame(animateCursor);
    };
    
    animateCursor();

    // Cursor interactions
    document.querySelectorAll('a, button, .interactive').forEach(elem => {
      elem.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      elem.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // Glow effect on mouse move
    this.initGlowEffect();
  }

  /**
   * Glow effect that follows mouse
   */
  initGlowEffect() {
    const glowElements = document.querySelectorAll('.glow-on-hover');
    
    glowElements.forEach(elem => {
      elem.addEventListener('mousemove', (e) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        elem.style.setProperty('--glow-x', `${x}px`);
        elem.style.setProperty('--glow-y', `${y}px`);
      });
    });
  }

  /**
   * Text scramble effect
   */
  scrambleText(element, newText, duration = 1000) {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    const originalText = element.textContent;
    const length = Math.max(originalText.length, newText.length);
    let iteration = 0;
    
    const interval = setInterval(() => {
      element.textContent = newText
        .split('')
        .map((char, index) => {
          if (index < iteration) {
            return newText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      
      if (iteration >= length) {
        clearInterval(interval);
        element.textContent = newText;
      }
      
      iteration += 1 / 3;
    }, 30);
  }

  /**
   * Particle system for backgrounds
   */
  createParticles(container, count = 50) {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c'];
    
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.setProperty('--particle-color', colors[Math.floor(Math.random() * colors.length)]);
      particle.style.setProperty('--particle-size', `${Math.random() * 4 + 1}px`);
      particle.style.setProperty('--particle-left', `${Math.random() * 100}%`);
      particle.style.setProperty('--particle-duration', `${Math.random() * 20 + 10}s`);
      particle.style.setProperty('--particle-delay', `${Math.random() * 20}s`);
      
      container.appendChild(particle);
    }
  }
}

// Initialize animation system when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.animationSystem = new AnimationSystem();
  
  // Add loaded class to body for initial animations
  document.body.classList.add('loaded');
});

// Utility function for external use
window.animateElement = (selector, animationClass) => {
  const element = document.querySelector(selector);
  if (element) {
    element.classList.add(animationClass);
  }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AnimationSystem;
}