window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const removeIcon = document.querySelector(".aboutMeTitle span i");
  sections.forEach((sec) => {
    let id = sec.getAttribute("id");
    console.log(id);

    let offeset = sec.offsetHeight;
    let top = window.scrollY;
    let heigt = sec.offsetTop - 150;
    removeIcon.classList.remove("active");
    if (top >= heigt && top < offeset + heigt) {
      document.querySelector(".aboutMeTitle span i ").classList.add("active");
    }
  });
});
