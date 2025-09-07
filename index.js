document.addEventListener('DOMContentLoaded', function() {
  AOS.init();


  // Auto-slide .about-flex-row horizontally in mobile view
  function autoSlideAboutFlexRow() {
    var aboutFlexRow = document.querySelector('.about-flex-row');
    if (!aboutFlexRow) return;
    // Only activate on mobile view
    if (window.innerWidth <= 768) {
      let maxScroll = aboutFlexRow.scrollWidth - aboutFlexRow.clientWidth;
      let direction = 1;
      setInterval(function() {
        if (!aboutFlexRow) return;
        // Scroll by 1px per tick
        aboutFlexRow.scrollLeft += direction;
        // Reverse direction at ends
        if (aboutFlexRow.scrollLeft >= maxScroll) direction = -1;
        if (aboutFlexRow.scrollLeft <= 0) direction = 1;
      }, 10); // Adjust speed here (lower is faster)
    }
  }
  autoSlideAboutFlexRow();
});
