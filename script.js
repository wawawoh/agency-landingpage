const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".hidden");
hamburger.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
