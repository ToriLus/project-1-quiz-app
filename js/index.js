let bookmark = document.getElementsByClassName("card__bookmark");

console.log(bookmark);
bookmark[0].addEventListener("click", () => {
  if (bookmark[0].src.includes("bookmark_filled") == true) {
    bookmark[0].src = "./assets/bookmark.png ";
  } else {
    bookmark[0].src = "./assets/bookmark_filled.png";
  }
  console.log(bookmark[0].src);
});

let answerButton = document.getElementsByClassName("card__button");
let answerText = document.getElementsByClassName("card__answer");

// console.log(answerButton, answerText);

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
    answerText[indexOfButton].classList.toggle("card__answer__visibility");
    if (answerButton[indexOfButton].innerText == "Show answer!") {
      answerButton[indexOfButton].innerText = "Hide answer";
    } else if (answerButton[indexOfButton].innerText == "Hide answer") {
      answerButton[indexOfButton].innerText = "Show answer!";
    }
  });
});
