const slidesContainer = document.querySelector(".slideS-Container");

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
      "As a web developer, my objective is to create user- friendly and efficien websites that are visually appealing and ease to navigate.I utilize my skills in HTML, CSS, JavaScript, and PHP to develop websites that meet all the requirements of the client ",
  },
  {
    Fullname: "Michael Dean",
    Skill: "Technical Support ",
    Decription:
      "Detail-oriented IT support specialist with great problem-solving skills anda customer service-oriented work ethic.Eager to contribute to company using my scomputer and network analysis,installation,troubleshooting, administrative support, management. ",
  },
];

const updateSlidesContainer = () => {
  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("sliderContainer");

  const NameHolder = document.createElement("h1");
  NameHolder.classList.add("NameHolder");

  const SkillTitle = document.createElement("h3");
  SkillTitle.classList.add("SkillTitle");

  const SkillDersctiption = document.createElement("p");
  SkillDersctiption.classList.add("SkillDersctiption");

  sliderContainer.appendChild(NameHolder);
  sliderContainer.appendChild(SkillTitle);
  sliderContainer.appendChild(SkillDersctiption);

  slidesContainer.appendChild(sliderContainer);

  MyPortfolio.forEach((CardInfo) => {
    const inSertName = slidesContainer.querySelectorAll(".NameHolder");
    const inSertSkillTitle = slidesContainer.querySelectorAll(".SkillTitle");
    const inSertskillDescription =
      slidesContainer.querySelectorAll(".SkillDersctiption");

    inSertName.innerText = CardInfo.Fullname;
    inSertSkillTitle.innerText = CardInfo.Skill;
    inSertskillDescription.innerText = CardInfo.Decription;

    console.log(inSertName);
    console.log(inSertSkillTitle);
  });
};

updateSlidesContainer();
