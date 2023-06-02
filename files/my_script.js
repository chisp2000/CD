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

document.addEventListener('DOMContentLoaded', function() {

  // Get references to the country elements
  const norwayElement = document.querySelector('#Norway');
  const ukraineElement = document.querySelector('#Ukraine');
  const usaElement = document.querySelector('#USA');

  // Get references to the window containers
  const norwayWindow = document.querySelector('.NorwayWindow');
  const ukraineWindow = document.querySelector('.UkraineWindow');
  const usaWindow = document.querySelector('.USAWindow');

  // Get references to the close buttons
  const closeButtons = document.querySelectorAll('.close-button');

  // Add event listeners to the country elements
  norwayElement.addEventListener('click', openNorwayWindow);
  ukraineElement.addEventListener('click', openUkraineWindow);
  usaElement.addEventListener('click', openUSAWindow);

  // Add event listeners to the close buttons
  closeButtons.forEach(button => {
    button.addEventListener('click', closeWindow);
  });

  // Function to open the Norway window
  function openNorwayWindow() {
    hideAllWindows();
    norwayWindow.style.display = 'block';
  }

  // Function to open the Ukraine window
  function openUkraineWindow() {
    hideAllWindows();
    ukraineWindow.style.display = 'block';
  }

  // Function to open the USA window
  function openUSAWindow() {
    hideAllWindows();
    usaWindow.style.display = 'block';
  }

  // Function to hide all windows
  function hideAllWindows() {
    norwayWindow.style.display = 'none';
    ukraineWindow.style.display = 'none';
    usaWindow.style.display = 'none';
  }

  // Function to close the window
  function closeWindow(event) {
  const closeButton = event.target;
  const windowContainer = closeButton.parentElement;
  windowContainer.style.display = 'none';
}

});
