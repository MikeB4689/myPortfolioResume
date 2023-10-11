const navilink = document.querySelectorAll(".navilink li a");
const navLi = document.querySelectorAll(".navilink li");

navilink.forEach((links, i) => {
  links.addEventListener("click", (e) => {
    navilink.forEach((element) => {
      element.classList.remove("active");
    });
    navLi.forEach((element) => {
      element.classList.remove("active");
    });
    navilink[i].classList.add("active");
    navLi[i].classList.add("active");
  });
});
