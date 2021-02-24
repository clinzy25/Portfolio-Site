var card = document.querySelector('.card');

card.addEventListener('mouseover', function() {
  console.log('check');
  card.classList.toggle('rotateIn');
})

card.addEventListener('mouseleave', function() {
  card.classList.toggle('rotateOut')
})
