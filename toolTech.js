const aboutSummary = document.querySelector(".AboutMeSummary");

const updateAboutSummary = () => {
  const textArea = document.createElement("textarea");
  textArea.classList.add("textArea");

  textArea.innerHTML = "hello";
  aboutSummary.appendChild(textArea);
};
updateAboutSummary();
