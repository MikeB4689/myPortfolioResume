const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const AllHiddenElement = document.querySelectorAll(".hide");

AllHiddenElement.forEach((element) => {
  observer.observe(element);
});

const option = {
  threshold: 1,
};

const TechObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.add("hide");
    }
  }, option);
});

const techeContainer = document.querySelectorAll(".techSummaryContainer");

techeContainer.forEach((element) => {
  TechObserver.observe(element);
});
