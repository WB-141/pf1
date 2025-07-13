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

accordion();