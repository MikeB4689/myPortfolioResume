const aboutSummary = document.querySelector(".AboutMeSummary");
const date = new Date();
let dateUpadte = date.getDate();

const school = "Tarlac State  University";

const aboutMe = `Hello my name is Michael, I am a graduate of information technology at  ${school}, My first job was as an admin officer in a local government. My task is to input all the necessary data that was filled by the customers. Eventually, I became a Customer Service Representative in a BPO company where stayed for 5 years.  I started working remotely in 2019 before the pandemic came. I was hired as a Customer service for a local flower shop when I got used to working remotely I tried to upskill and became a Virtual Assistant for Amazon.com as a product researcher. Luckily  I was hired and able to hone my skills and  earned experience  for 2 years of staying with my client. Due to my passion for web programming. Join me as I talk about my online bootcamp and how I'm applying my knowledge to become the best web developer that I can be. I am confident that my skills and experience in JavaScript, HTML, CSS, React.js will be good fit for this position. I am hoping to be considered  Thank you!.`;

const updateAboutSummary = (message) => {
  const aboutMeContainer = document.createElement("div");

  const aboutTitle = document.createElement("h1");
  const aboutParagraphContainer = document.createElement("div");
  const aboutParagraph = document.createElement("p");
  aboutParagraph.classList.add("aboutParagraph");
  const showMore = document.createElement("p");
  showMore.classList.add("showMore");

  aboutTitle.innerText = "Summary";
  showMore.innerText = "Show more!";
  aboutParagraph.innerText = message;

  aboutMeContainer.appendChild(aboutTitle);
  aboutMeContainer.appendChild(aboutParagraphContainer);
  aboutParagraphContainer.appendChild(aboutParagraph);
  aboutParagraphContainer.appendChild(showMore);

  aboutSummary.appendChild(aboutMeContainer);

  showMore.addEventListener("click", () => {
    const openBtn = showMore.closest("#about").querySelector(".aboutParagraph");
    openBtn.classList.toggle("active");
    if (openBtn.clientHeight != 80) {
      showMore.innerText = "Show more";
    } else {
      showMore.innerText = "Show less";
    }
  });
};
updateAboutSummary(aboutMe);
