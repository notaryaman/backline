const screens = Array.from(document.querySelectorAll(".screen"));

function goTo(id) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === id);
  });
}

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => goTo(button.dataset.next));
});

document.querySelectorAll("[data-start]").forEach((button) => {
  button.addEventListener("click", () => goTo(button.dataset.start));
});
