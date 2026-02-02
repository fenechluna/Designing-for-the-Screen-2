const ticket = document.querySelector('.tickets-graphic');

if (ticket) {
  ticket.addEventListener('mouseenter', () => {
    ticket.style.filter = 'brightness(0.4) sepia(1) hue-rotate(90deg)';
  });

  ticket.addEventListener('mouseleave', () => {
    ticket.style.filter = 'none';
  });
}