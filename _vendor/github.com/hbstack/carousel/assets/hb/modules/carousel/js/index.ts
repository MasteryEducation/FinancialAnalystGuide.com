import Carousel from "js/bootstrap/src/carousel";

(() => {
  document.querySelectorAll<HTMLElement>(".carousel").forEach((el) => {
    new Carousel(el)
  })
})()
