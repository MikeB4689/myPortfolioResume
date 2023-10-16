const clickBtn = document.querySelector(".button");

const form_submit = document.forms.email_form;
const email = form_submit.emailAdd;
const Subject = form_submit.subject;
const message = form_submit.message;

clickBtn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("click");
  if (!email.value) {
    alert(`please complete information`);
  }
  if (!Subject.value) {
    alert(`please complete information`);
  }
  if (!message.value) {
    alert(`please complete information`);
  } else {
    email.value = "";
    Subject.value = "";
    message.value = "";

    alert("this is a test email ");
  }
});
