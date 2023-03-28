let form = document.querySelector('[data-js="form__form"]');
let questionText = document.querySelector('[data-js="form__question-text"]');
let answerText = document.querySelector('[data-js="form__answer-text"]');
let tagsText = document.querySelector('[data-js="form__tags"]');
let submitButton = document.querySelector('[data-js="form__submit-button"]');
let questionCharacters = document.querySelector(
  '[data-js="form__question-text-characters"]'
);
let answerCharacters = document.querySelector(
  '[data-js="form__answer-text-characters"]'
);
console.log(questionText, answerText, tagsText, submitButton, form);

let newQuestion = document.createElement("section");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(questionText.value, answerText.value, tagsText.Value);
  form.append(newQuestion);

  newQuestion.innerHTML = `
 <section class="card">
        <img
          src="../assets/bookmark.png"
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

questionText.addEventListener("input", () => {
  let length = 300 - questionText.value.length;
  questionCharacters.innerText = "characters left: " + length;
});

answerText.addEventListener("input", () => {
  let length = 300 - answerText.value.length;
  answerCharacters.innerText = "characters left: " + length;
});
/////////////////////////////////////////////////////

let bookmark = document.getElementsByClassName("card__bookmark");

// console.log(bookmark);
// bookmark[0].addEventListener("click", () => {
//   if (bookmark[0].src.includes("bookmark_filled") == true) {
//     bookmark[0].src = "../assets/bookmark.png ";
//   } else {
//     bookmark[0].src = "../assets/bookmark_filled.png";
//   }
//   console.log(bookmark[0].src);
// });

let answerButton = document.getElementsByClassName("card__button");
let answerTexts = document.getElementsByClassName("card__answer");

console.log(answerButton, answerText);

// for (i = 0; i < answerButton.length; i++) {
//   console.log(i);

//   answerButton[i].addEventListener("click", () => {
//     console.log("i is now:", i);
//     let x = i;
//     // answerText[x].classList.toggle("card__answer__visibility");
//     console.log("hahahaha");
//     console.log("x is now", x);
//   });
// }

[...answerButton].forEach((button, indexOfButton) => {
  // console.log(button, indexOfButton);
  button.addEventListener("click", (event) => {
    // console.log(event.target, indexOfButton);
    // console.log(answerText);
    answerTexts[indexOfButton].classList.toggle("card__answer__visibility");
    if (answerButton[indexOfButton].innerText == "Show answer!") {
      answerButton[indexOfButton].innerText = "Hide answer";
    } else if (answerButton[indexOfButton].innerText == "Hide answer") {
      answerButton[indexOfButton].innerText = "Show answer!";
    }
  });
});
