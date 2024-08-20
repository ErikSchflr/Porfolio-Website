function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".btn--close-modal");
const btnOpenModal1 = document.querySelector(".popup-window1");
const btnOpenModal2 = document.querySelector(".popup-window2");
const btnOpenModal3 = document.querySelector(".popup-window3");
const btnOpenModal4 = document.querySelector(".popup-window4");

const openModal = function (modal) {
  return function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
};

const closeModal = function () {
  modals.forEach((modal) => modal.classList.add("hidden"));
  overlay.classList.add("hidden");
};

// Open modals
btnOpenModal1.addEventListener(
  "click",
  openModal(document.querySelector(".modal1"))
);
btnOpenModal2.addEventListener(
  "click",
  openModal(document.querySelector(".modal2"))
);
btnOpenModal3.addEventListener(
  "click",
  openModal(document.querySelector(".modal3"))
);
btnOpenModal4.addEventListener(
  "click",
  openModal(document.querySelector(".modal4"))
);

// Close modals
btnCloseModal.forEach((btn) => btn.addEventListener("click", closeModal));
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
    closeModal();
  }
});
