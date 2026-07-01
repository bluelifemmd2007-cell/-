document.getElementById("menuBtn")?.addEventListener("click", () => {
  document.getElementById("navLinks")?.classList.toggle("open");
});

document.querySelectorAll(".flash").forEach((el) => {
  setTimeout(() => el.classList.add("hide"), 4000);
});
