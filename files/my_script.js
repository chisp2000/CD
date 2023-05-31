function goToHome() {
  location.reload(); // Refresh the page
}

function floatAndDisappear() {
  const planet = document.getElementById('gif');
  const navbar = document.getElementById('navbar');
  const projectsBody = document.getElementById('projectsBody');

  planet.style.animation = "floatAndDisappear 2s forwards";

  // Add event listener to detect when the animation ends
  planet.addEventListener('animationend', function() {
    projectsBody.classList.add('slide-up-and-fade-in');

    // After the animation ends, fade in the navbar
    if (navbar) {
      setTimeout(function() {
        navbar.classList.remove('hide');
        navbar.classList.add('fade-in');
      }, 200); // Adjust the delay as needed
    }
  });
}
