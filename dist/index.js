const button = document.querySelector(".rsvp-btn");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");
const rsvpButton = document.querySelector(".btn_rsvp");
const rsvpInput = document.querySelector(".rsvp_input");

button.addEventListener("click", () => {
  modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", () => {
  modalBg.classList.remove("bg-active");
});

rsvpButton.addEventListener("click", (event) => {
  event.preventDefault();
  const name = rsvpInput.value;
  modalBg.classList.remove("bg-active");

  alert(`${name}, we will be expecting you`);
  rsvpInput.value = "";
});
