document.addEventListener('DOMContentLoaded', () => {
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;
    let index = 0;
  
    function slideShow() {
      index++;
      if (index >= totalSlides) {
        index = 0;
      }
      slides.style.transform = `translateX(-${index * 100}%)`;
    }
  
    setInterval(slideShow, 3000);
  });


   // Animate on scroll
   window.addEventListener('scroll', () => {
    const section = document.getElementById('popupSection');
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight - 150) {
      section.classList.add('show');
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    const contentUnit = document.querySelector('.content-unit');
    const activationDistance = 300; // Pixels from cursor to activate
    let isActivated = false;
    
    function activateUnit() {
        if (!isActivated) {
            contentUnit.classList.add('active');
            isActivated = true;
            
            // Remove event listeners after activation
            document.removeEventListener('mousemove', checkCursorProximity);
            if (observer) observer.unobserve(contentUnit);
        }
    }
    
    function checkCursorProximity(e) {
        const rect = contentUnit.getBoundingClientRect();
        const unitCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
        
        const cursorPosition = {
            x: e.clientX,
            y: e.clientY
        };
        
        const distance = Math.sqrt(
            Math.pow(unitCenter.x - cursorPosition.x, 2) + 
            Math.pow(unitCenter.y - cursorPosition.y, 2)
        );
        
        if (distance < activationDistance) {
            activateUnit();
        }
    }
    
    // Set up based on device type
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        // Desktop with cursor support
        document.addEventListener('mousemove', checkCursorProximity);
        
        // Fallback in case cursor never comes near
        setTimeout(() => {
            if (!isActivated) {
                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) activateUnit();
                }, { threshold: 0.1 });
                observer.observe(contentUnit);
            }
        }, 3000);
    } else {
        // Mobile/touch devices - activate when scrolled into view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) activateUnit();
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        observer.observe(contentUnit);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.getElementById('sliderTrack');
    const sliderNav = document.getElementById('sliderNav');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    let slideInterval;
    const intervalDuration = 5000; // 5 seconds
    
    // Create navigation dots
    function createDots() {
        sliderNav.innerHTML = '';
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if(index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            sliderNav.appendChild(dot);
        });
    }
    
    createDots();
    const dots = document.querySelectorAll('.slider-dot');
    
    // Auto-slide functionality
    function startAutoSlide() {
        slideInterval = setInterval(() => {
            nextSlide();
        }, intervalDuration);
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }
    
    function updateSlider() {
        sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetAutoSlide();
    }
    
    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }
    
    // Touch swipe support
    let touchStartX = 0;
    const sliderWrapper = document.querySelector('.slider-wrapper');
    
    sliderWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        clearInterval(slideInterval);
    }, { passive: true });
    
    sliderWrapper.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        
        if (diff > 50) nextSlide(); // Swipe left
        if (diff < -50) { // Swipe right
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        }
        
        resetAutoSlide();
    }, { passive: true });
    
    // Pause on hover (desktop only)
    if (window.matchMedia("(hover: hover)").matches) {
        sliderWrapper.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        sliderWrapper.addEventListener('mouseleave', resetAutoSlide);
    }
    
    // Initialize
    startAutoSlide();
});