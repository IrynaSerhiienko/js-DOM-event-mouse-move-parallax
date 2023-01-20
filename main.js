// 1 ревлізувати паралакс
// 2 відаляти подію на телефонах

let wrap = document.querySelector(".wrapper");
let item = document.querySelectorAll(".images-parallax__item");

if (document.documentElement.clientWidth > 1024) {
  wrap.addEventListener("mousemove", function (event) {
    item.forEach((item) => {
      let depth = item.getAttribute("data-depth");
      console.log(depth);
      item.style.transform = `translate(${(event.clientX - 150) * depth}px, ${
        (event.clientY - 150) * depth
      }px)`;
    });
  });
}
