const button = document.querySelector(".rsvp-btn");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");

button.addEventListener("click", () => {
	modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", () => {
	modalBg.classList.remove("bg-active");
});
