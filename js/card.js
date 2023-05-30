const cardToggle = document.querySelector('.card-toggle');
  const cardDetails = document.querySelector('#card-details');

  cardToggle.addEventListener('click', function(e) {
    e.preventDefault();
    cardDetails.style.display = (cardDetails.style.display === 'none') ? 'block' : 'none';
  });