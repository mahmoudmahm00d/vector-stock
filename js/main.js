document.querySelectorAll(".list a.link").forEach((element) =>
  element.addEventListener("click", function (event) {
    event.target.parentElement
      .querySelector(".active")
      .classList.remove("active");
    event.target.classList.toggle("active");
  })
);


document.querySelector().classList.remove('active')