window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const removeIcon = document.querySelector(".aboutMeTitle span i");
  const imageshowup = document.querySelector("..image-profile");
  sections.forEach((sec) => {
    let id = sec.getAttribute("id");

    let offeset = sec.offsetHeight;
    let top = window.scrollY;
    let heigt = sec.offsetTop - 150;
    removeIcon.classList.remove("active");
    if (top >= heigt && top < offeset + heigt) {
      document.querySelector(".aboutMeTitle span i ").classList.add("active");
    }
  });
});
