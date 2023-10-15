const navilink = document.querySelectorAll(".navilink li a");

const skillSummaryContainer = document.querySelectorAll(".SummarySkills");

navilink.forEach((links, i) => {
  links.addEventListener("click", (e) => {
    skillSummaryContainer.forEach((element) => {
      element.classList.remove("active");
    });

    navilink.forEach((element) => {
      element.classList.remove("active");
      console.log(element.classList);
    });

    navilink[i].classList.add("active");

    skillSummaryContainer[i].classList.add("active");
  });
});
