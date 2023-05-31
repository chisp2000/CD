function floatAndDisappear() {
  const planet = document.getElementById('gif');
  planet.style.animation = 'floatAndDisappear 1s forwards';

  const projectsBody = document.getElementById('projectsBody');
  if (projectsBody) {
    projectsBody.classList.add('slide-up-and-fade-in');
  }

  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.remove('hide');
  }
}

function showContact() {
  const projectsBody = document.getElementById('projectsBody');
  const contactBody = document.getElementById('contactBody');

  if (projectsBody && contactBody) {
    projectsBody.classList.remove('slide-up-and-fade-in');
    projectsBody.classList.add('hide');
    contactBody.classList.remove('hide');
    contactBody.classList.add('slide-up-and-fade-in');
  }
}

function showProjects() {
  const projectsBody = document.getElementById('projectsBody');
  const contactBody = document.getElementById('contactBody');

  if (projectsBody && contactBody) {
    contactBody.classList.remove('slide-up-and-fade-in');
    contactBody.classList.add('hide');
    projectsBody.classList.remove('hide');
    projectsBody.classList.add('slide-up-and-fade-in');
  }
}

function goToHome() {
  location.reload(); // Refresh the page
}
