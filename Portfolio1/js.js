function accordion() {
  const dienstQuestions = document.querySelectorAll(".dienst-question");

  dienstQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector(".icon");

      document.querySelectorAll(".dienst-answer").forEach((el) => {
        if (el !== answer) el.classList.remove("open");
      });

      document.querySelectorAll(".dienst-question .icon").forEach((i) => {
        if (i !== icon) i.textContent = "+";
      });

      answer.classList.toggle("open");
      icon.textContent = answer.classList.contains("open") ? "−" : "+";
    });
  });
}

function contactForm() {

  const element = document.getElementsByClassName("cta-button")[0];

  element.addEventListener("click", () => {
    document
      .querySelector(".contact")
      .scrollIntoView({ behavior: "smooth" });
  });
}

contactForm();

accordion();
