const aboutSummary = document.querySelector(".AboutMeSummary");
const date = new Date();
let dateUpadte = date.getDate();
const updateAboutSummary = () => {
  const textArea = document.createElement("textarea");
  textArea.classList.add("textArea");

  const commentBtn = document.createElement("button");
  commentBtn.classList.add("clickComment");
  commentBtn.innerHTML = "Add comment";

  commentBtn.addEventListener("click", (e) => {
    const createComment = document.createElement("div");

    const closestDiv = commentBtn
      .closest(".AboutMeSummary")
      .querySelector(".textArea");

    createComment.innerText = `${closestDiv.value} ${date}`;
    textArea.value = "";
    aboutSummary.appendChild(createComment);
  });

  aboutSummary.appendChild(textArea);
  aboutSummary.appendChild(commentBtn);
};
updateAboutSummary();
