const modal = document.querySelector('.modal')
const open = document.querySelector('.modal-open')
const close = document.querySelector('.modal-close')

function openModal() {
  modal.style.display = 'block'
}
function closeModal() {
  modal.style.display = 'none'
}
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = 'none'
  }
}
