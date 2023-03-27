let darkToggle = document.querySelector('[data-js="profile__toggle__button"]');

darkToggle.addEventListener("checked", () => {
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  myFunction();
});
