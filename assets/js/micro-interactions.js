/* Micro Interactions - 2025 Design System */

// ===== Magnetic Button Effect =====
document.addEventListener('DOMContentLoaded', function() {
  const magneticButtons = document.querySelectorAll('[data-magnetic="true"]');
  
  magneticButtons.forEach(button => {
    button.addEventListener('mousemove', function(e) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Limit the movement
      const moveX = x * 0.3;
      const moveY = y * 0.3;
      
      button.style.setProperty('--mouse-x', `${moveX}px`);
      button.style.setProperty('--mouse-y', `${moveY}px`);
    });
    
    button.addEventListener('mouseleave', function() {
      button.style.setProperty('--mouse-x', '0px');
      button.style.setProperty('--mouse-y', '0px');
    });
  });
});

// ===== Ripple Effect =====
document.addEventListener('click', function(e) {
  const rippleElements = e.target.closest('.ripple');
  
  if (rippleElements) {
    const ripple = document.createElement('span');
    const rect = rippleElements.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple-effect');
    
    rippleElements.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
});

// ===== Custom Cursor =====
function initCustomCursor() {
  const cursor = document.createElement('div');
  const cursorTrail = document.createElement('div');
  
  cursor.classList.add('custom-cursor');
  cursorTrail.classList.add('custom-cursor-trail');
  
  document.body.appendChild(cursor);
  document.body.appendChild(cursorTrail);
  
  let mouseX = 0;
  let mouseY = 0;
  let trailX = 0;
  let trailY = 0;
  
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
  });
  
  // Smooth trail animation
  function animateTrail() {
    trailX += (mouseX - trailX) * 0.1;
    trailY += (mouseY - trailY) * 0.1;
    
    cursorTrail.style.transform = `translate(${trailX - 20}px, ${trailY - 20}px)`;
    
    requestAnimationFrame(animateTrail);
  }
  
  animateTrail();
  
  // Change cursor on hover
  document.addEventListener('mouseover', function(e) {
    if (e.target.matches('a, button, .interactive')) {
      cursor.style.transform += ' scale(1.5)';
      cursor.style.borderColor = '#FF006E';
    }
  });
  
  document.addEventListener('mouseout', function(e) {
    if (e.target.matches('a, button, .interactive')) {
      cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
      cursor.style.borderColor = '#00F5FF';
    }
  });
}

// Only enable custom cursor on desktop
if (window.matchMedia('(min-width: 1024px)').matches) {
  // initCustomCursor(); // Uncomment to enable
}

// ===== Scroll Progress Indicator =====
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.classList.add('scroll-progress');
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', function() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const progress = scrolled / scrollHeight;
    
    progressBar.style.transform = `scaleX(${progress})`;
  });
}

initScrollProgress();

// ===== Parallax Scroll Effect =====
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.parallax || 0.5;
      const yPos = -(scrolled * speed);
      
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

initParallax();

// ===== Text Split Animation =====
function initTextSplit() {
  const splitElements = document.querySelectorAll('.text-split');
  
  splitElements.forEach(element => {
    const text = element.textContent;
    element.innerHTML = text
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        return `<span style="--index: ${index}">${char}</span>`;
      })
      .join('');
  });
}

initTextSplit();

// ===== Smooth Anchor Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offset = 100;
      const targetPosition = target.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      
      // Trigger animation for children with delay
      const children = entry.target.querySelectorAll('.animate-child');
      children.forEach((child, index) => {
        setTimeout(() => {
          child.classList.add('in-view');
        }, index * 100);
      });
    }
  });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.scroll-trigger, .fade-in-up, .scale-in').forEach(element => {
  observer.observe(element);
});

// ===== Copy Code Button =====
function initCopyCode() {
  const codeBlocks = document.querySelectorAll('.markdown-content pre');
  
  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className = 'absolute top-4 right-4 px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md transition-all opacity-0 hover:opacity-100 parent-hover:opacity-100';
    button.textContent = 'Copy';
    
    block.style.position = 'relative';
    block.appendChild(button);
    
    // Show button on hover
    block.addEventListener('mouseenter', () => {
      button.style.opacity = '1';
    });
    
    block.addEventListener('mouseleave', () => {
      button.style.opacity = '0';
    });
    
    button.addEventListener('click', async () => {
      const code = block.querySelector('code').textContent;
      
      try {
        await navigator.clipboard.writeText(code);
        button.textContent = 'Copied!';
        button.classList.add('bg-green-600', 'hover:bg-green-700');
        
        setTimeout(() => {
          button.textContent = 'Copy';
          button.classList.remove('bg-green-600', 'hover:bg-green-700');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  });
}

// Initialize copy code buttons when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCopyCode);
} else {
  initCopyCode();
}

// ===== Glitch Effect on Hover =====
document.querySelectorAll('[data-glitch]').forEach(element => {
  element.dataset.text = element.textContent;
});

// ===== Page Load Animation =====
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
  
  // Hide loader
  const loader = document.querySelector('.page-loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 300);
  }
});