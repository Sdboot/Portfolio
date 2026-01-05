document.addEventListener('DOMContentLoaded', function() {
  AOS.init();

  // Hamburger Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navLinks.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnHamburger) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }

  // Auto Slide About Flex Row
  function autoSlideAboutFlexRow() {
    var aboutFlexRow = document.querySelector('.about-flex-row');
    if (!aboutFlexRow) return;
    
    if (window.innerWidth <= 768) {
      let maxScroll = aboutFlexRow.scrollWidth - aboutFlexRow.clientWidth;
      let direction = 1;
      setInterval(function() {
        if (!aboutFlexRow) return;
        
        aboutFlexRow.scrollLeft += direction;
        
        if (aboutFlexRow.scrollLeft >= maxScroll) direction = -1;
        if (aboutFlexRow.scrollLeft <= 0) direction = 1;
      }, 20); 
    }
  }
  autoSlideAboutFlexRow();
});

// Dark Mode Toggle
const darkModeBtn = document.getElementById('dark-mode-toggle');
if (darkModeBtn) {
  darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
  
  if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark-mode');
  }
}

// Scroll-to-Top Button
const scrollBtn = document.getElementById('scroll-to-top');
if (scrollBtn) {
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Show/Hide More Info for Projects
document.querySelectorAll('.more-info-btn').forEach((btn) => {
  btn.addEventListener('click', function() {
    const info = this.parentElement.querySelector('.project-info');
    if (info.style.display === 'none' || info.style.display === '') {
      info.style.display = 'block';
      this.textContent = 'Less Info';
    } else {
      info.style.display = 'none';
      this.textContent = 'More Info';
    }
  });
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.message-form form');
    var successMsg = document.getElementById('form-success-message');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var data = new FormData(form);
            var xhr = new XMLHttpRequest();
            xhr.open(form.method, form.action);
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.onreadystatechange = function() {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    form.style.display = 'none';
                    if(successMsg) successMsg.style.display = 'block';
                    setTimeout(() => {
                        form.reset();
                        form.style.display = 'block';
                        if(successMsg) successMsg.style.display = 'none';
                    }, 3000);
                } else {
                    alert('Oops! There was a problem submitting your form. Please try again.');
                }
            };
            xhr.send(data);
        });
    }
});