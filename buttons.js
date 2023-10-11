const MenuBtn = document.querySelector(".nav-icon p i");

MenuBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const showMenu = document.querySelector(".navBarMobile");
  showMenu.classList.toggle("active");
  MenuBtn.classList.toggle("bx-x");
});
