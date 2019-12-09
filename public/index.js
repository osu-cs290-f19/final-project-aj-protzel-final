/*
  Adrien Protzel
  protzela@oregonstate.edu
*/

/* Toggles hidden class, changes nav-button icon */
function modal() {
  var navButton = document.getElementById('nav-button');
  var showModal = document.getElementById('nav-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  navButton.classList.toggle('fa-bars')
  navButton.classList.toggle('fa-times')
  showModal.classList.toggle('hidden');
  modalBackdrop.classList.toggle('hidden');
}

window.addEventListener('load', function () {
  var navButton = document.getElementById('nav-button');

  navButton.classList.toggle('fa-times')
  navButton.addEventListener('click', modal);
});
