document.addEventListener("DOMContentLoaded", (event) => {
  let marquee = (selector__list, speed) => {
    const list = document.querySelector(selector__list);

    let i = 0;

    // container.insertAdjacentHTML("beforeend", clone)

    setInterval(() => {
      list.style.marginLeft = `-${i}px`;

      if (i > list.clientWidth) {
        i = 0;
      }

      i = i + speed;
    }, 0);
  };

  marquee(".marquee__list", 0.2);
});
