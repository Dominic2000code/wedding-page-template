const button = document.querySelector(".rsvp-btn");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");
const rsvpButton = document.querySelector(".btn_rsvp");

button.addEventListener("click", () => {
  modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", () => {
  modalBg.classList.remove("bg-active");
});

rsvpButton.addEventListener("click", () => {
  modalBg.classList.remove("bg-active");
  alert("We will be expecting you");
});
