const accTitles = document.querySelectorAll(".accordion__header");
const arrows = document.querySelectorAll(".arrow");
const contents = document.querySelectorAll(".accordion__content");
const rotate = document.querySelectorAll(".rotate");

accTitles.forEach((title, index) => {
  title.addEventListener("click", () => {
    if (contents[index].classList.contains("active")) {
      contents[index].classList.remove("active");
      contents[index].classList.add("hidden");
      arrows[index].classList.add("rotate");
    } else {
      contents.forEach((content) => {
        content.classList.remove("active");
        content.classList.add("hidden");
      });
      contents[index].classList.add("active");
      contents[index].classList.remove("hidden");
      arrows[index].classList.remove("rotate");
    }
  });
});
