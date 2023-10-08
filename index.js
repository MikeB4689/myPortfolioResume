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
  for (i = 0; i < MyPortfolio.length; i++) {
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

    NameHolder.innerText = MyPortfolio[i].Fullname;
    SkillTitle.innerText = MyPortfolio[i].Skill;
    SkillDersctiption.innerText = MyPortfolio[i].Decription;
  }
};

updateSlidesContainer();
