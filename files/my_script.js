function floatAndDisappear() {
  const planet = document.getElementById('gif');
  planet.style.animation = 'floatAndDisappear 1s forwards';

  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.remove('hide');
  }

  const mapbody = document.getElementById('map');

  if (mapbody) {
    mapbody.classList.remove('hide');
    mapbody.classList.add('slide-up-and-fade-in');

    // Add event listener to wait for the animation to finish
    planet.addEventListener('animationend', () => {
      mapbody.style.display = 'block';
    }, { once: true });
  }
}

function goToHome() {
  location.reload(); // Refresh the page
}
