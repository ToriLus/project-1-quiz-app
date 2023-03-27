let form = document.querySelector('[data-js="form__form"]');
let questionText = document.querySelector('[data-js="form__question-text"]');
let answerText = document.querySelector('[data-js="form__answer-text"]');
let tagsText = document.querySelector('[data-js="form__tags"]');
let submitButton = document.querySelector('[data-js="form__submit-button"]');

console.log(questionText, answerText, tagsText, submitButton, form);

let newQuestion = document.createElement("section");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(questionText.value, answerText.value, tagsText.Value);
  form.append(newQuestion);

  let sanitiser1 = new Sanitizer();
  setHTML(questionText.value, { sanitiser: sanitiser1 });

  //   , answerText.value, tagsText.Value

  newQuestion.innerHTML = `
 <section class="card">
        <img
          src="./assets/bookmark.png"
          alt="bookmark"
          class="card__bookmark"
        />

        <h2 class="card__question">Your Question</h2>

        <section class="card__tag-section">
          <p class="card__tag">${tagsText.value}</p>

        </section>

        <section class="card__text-box">>${questionText.value}</section>

        <button class="card__button">Show answer!</button>
        <p class="card__answer">${answerText.value}</p>
      </section>`;
});
