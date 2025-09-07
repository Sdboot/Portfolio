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
