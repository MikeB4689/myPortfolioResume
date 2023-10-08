const MenuBtn = document.querySelector(".nav-icon p i");

MenuBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const showMenu = document.querySelector(".navBarMobile");
  showMenu.classList.toggle("active");
  MenuBtn.classList.toggle("bx-x");
});

const buttonClick = () => {
  const rightArrow = document.querySelector("#right-arrow");
  const leftArrow = document.querySelector("#left-arrow");
  const slider = document.querySelector(".slideS-Container");
  const slideImg = document.querySelectorAll(".sliderContainer");

  let size = slideImg[0].clientWidth;
  let counter = 0;

  rightArrow.addEventListener("click", () => {
    counter++;
    if (counter >= slideImg.length) {
      counter = slideImg.length - 1;
    }
    slider.style.transition = "opacity 0.5s ease-in";
    slider.style.transform = `translateX(${-size * counter}px)`;
  });

  leftArrow.addEventListener("click", () => {
    counter--;
    if (counter <= 0) {
      counter = 0;
    }
    slider.style.transition = "0.5s ease-in";
    slider.style.transform = `translateX(${-size * counter}px)`;
  });
};

buttonClick();
