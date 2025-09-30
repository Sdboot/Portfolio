document.addEventListener('DOMContentLoaded', function() {
  AOS.init();


  
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

// Scroll-to-Top 
const scrollBtn = document.getElementById('scroll-to-top');
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
// Show/Hide More Info 
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