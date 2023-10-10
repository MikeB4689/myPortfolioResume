const navBarRemove = document.querySelectorAll(".navBarMobile ul li");

navBarRemove.forEach((navi) => {
  const removeActive = navi
    .closest("#topHeader")
    .querySelector(".navBarMobile");
  const remoMenu = navi.closest("#topHeader").querySelector(".nav-icon p i");
  navi.addEventListener("click", (e) => {
    removeActive.classList.remove("active");
    remoMenu.classList.remove("bx-x");
  });
});
