document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.fashion-carousel');
  const arrowBtns = document.querySelectorAll('.fashion-button');
  const firstCardWidth = carousel.querySelector('.fashion-card').offsetWidth;
  let isDragging = false;
  let startX, scrollLeft;

  arrowBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const direction = btn.id === 'left' ? -1 : 1;
      carousel.scrollLeft += direction * firstCardWidth;
    });
  });

  carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const dragDistance = x - startX;
    carousel.scrollLeft = scrollLeft - dragDistance;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
  carousel.addEventListener('scroll', () => {
    if (carousel.scrollLeft <= 0) {
      carousel.scrollLeft += scrollWidth;
    } else if (carousel.scrollLeft >= scrollWidth - carousel.offsetWidth) {
      carousel.scrollLeft -= scrollWidth;
    }
  });

  // Adjust scroll position on window resize
  window.addEventListener('resize', () => {
    carousel.scrollLeft = Math.min(carousel.scrollLeft, scrollWidth - carousel.offsetWidth);
  });

  // Set initial scroll position
  carousel.scrollLeft = scrollWidth - carousel.offsetWidth;
});
