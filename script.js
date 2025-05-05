// Sélection des éléments
const toggleBtn = document.querySelector('.toggle-btn');
const nav = document.querySelector('nav');
const icon = toggleBtn.querySelector('i');

// Toggle du menu et de l'icône
toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');

  // Changer l'icône
  if (nav.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Fermer le menu quand on clique ailleurs
document.addEventListener('click', (e) => {
  const clickedInsideMenu = nav.contains(e.target);
  const clickedToggle = toggleBtn.contains(e.target);

  if (!clickedInsideMenu && !clickedToggle && nav.classList.contains('active')) {
    nav.classList.remove('active');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});
