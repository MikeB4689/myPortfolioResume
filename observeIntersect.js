const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
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