const aboutSummary = document.querySelector("#summary");
const TechSkill = document.querySelector("#teksills");
const imageshowup = document.querySelector(".image-profile");
const removeProlifeContainer = document.querySelector(
  ".imageProfile-container"
);
const MyPortfolio = [
  {
    Fullname: "Michael Dean",
    Skill: "Front-End Devoloper",
    Decription:
      "As a web developer, my objective is to create user- friendly and efficien websites that are visually appealing and ease to navigate.I utilize my skills in HTML, CSS, JavaScript, and PHP to develop websites that meet all the requirements of the client ",
  },
  {
    Fullname: "Michael Dean",
    Skill: "Customer Service",
    Decription:
      "Customer service representative with five years’ experience providingexcellent servicesto customers in a dynamic workenvironment. Solid communication skilinterpersonal skills and fast in resolvingcustomer complaints withexcellent problem-solving skills",
  },
  {
    Fullname: "Michael Dean",
    Skill: "Virtual Assistant",
    Decription:
      "Amazon virtual assistants can help with tasks such as product research, customer support, product listing, and optimization, running Amazon ad campaigns, order processing, and translation",
  },
  {
    Fullname: "Michael Dean",
    Skill: "Technical Support ",
    Decription:
      "Detail-oriented IT support specialist with great problem-solving skills anda customer service-oriented work ethic.Eager to contribute to company using my scomputer and network analysis,installation,troubleshooting, administrative support, management. ",
  },
];

const school = "Tarlac State  University";

const aboutMe = `Hello my name is Michael, I studied  information technology at  ${school}  due to my passion for web programming. Join me as I talk about my online bootcamp and how I'm applying my knowledge to become the best web developer that I can be. I am confident that my skills and experience in JavaScript, HTML, CSS, React.js will be good fit for this position. I am hoping to be considered  Thank you!.`;

const updateAboutSummary = (message) => {
  const aboutMeContainer = document.createElement("div");
  aboutMeContainer.classList.add("aboutMeContainer");

  const aboutTitle = document.createElement("h1");
  const aboutParagraphContainer = document.createElement("div");
  aboutParagraphContainer.classList.add("aboutParagraphContainer");
  const aboutParagraph = document.createElement("p");
  aboutParagraph.classList.add("aboutParagraph");
  const showMore = document.createElement("p");
  showMore.classList.add("showMore");

  aboutTitle.innerText = "Summary";
  aboutParagraph.innerText = message;

  aboutMeContainer.appendChild(aboutTitle);
  aboutMeContainer.appendChild(aboutParagraphContainer);
  aboutParagraphContainer.appendChild(aboutParagraph);
  aboutParagraphContainer.appendChild(showMore);

  aboutSummary.appendChild(aboutMeContainer);
  let currentHiegth = 0;
  showMore.addEventListener("click", () => {
    const openBtn = showMore.closest("#about").querySelector(".aboutParagraph");
    showMore.innerText = "Show more";
    openBtn.classList.toggle("active");

    if (openBtn.classList[1] === "active") {
      showMore.innerText = "Show Less";
    } else {
      showMore.innerText = "Show More";
    }
  });
};

const updateTechSkills = () => {
  const techSkillsContainer = document.createElement("div");
  techSkillsContainer.setAttribute("class", "techContainer");
  const techSummary = document.createElement("h1");
  techSummary.classList.add("techSummary");

  techSummary.innerHTML = "Work History Summary";

  for (i = 0; i < MyPortfolio.length; i++) {
    const techSummaryContainer = document.createElement("div");
    techSummaryContainer.classList.add("techSummaryContainer");

    const techSummaryTtitle = document.createElement("h1");
    techSummaryTtitle.setAttribute("id", "techSummaryTtitle");

    const techSummaryDescription = document.createElement("p");
    techSummaryDescription.setAttribute("id", "techSummaryDescription");

    techSummaryTtitle.innerText = MyPortfolio[i].Skill;
    techSummaryDescription.innerText = MyPortfolio[i].Decription;

    techSummaryContainer.appendChild(techSummaryTtitle);
    techSummaryContainer.appendChild(techSummaryDescription);

    techSkillsContainer.appendChild(techSummaryContainer);
    TechSkill.appendChild(techSummary);
    TechSkill.appendChild(techSkillsContainer);
  }
};

updateTechSkills();
updateAboutSummary(aboutMe);
