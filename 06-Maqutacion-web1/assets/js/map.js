document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    document.querySelector("#load-iframe-map").innerHTML = `<iframe
        class="contact__inframe"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.216219200805!2d-97.89117552410261!3d22.307661042627423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d7fbc1f66c7fb5%3A0xf00d16fac8894706!2s1%20de%20Mayo%20315%2C%202%20de%20Junio%2C%2089327%20Tampico%2C%20Tamps.!5e0!3m2!1ses!2smx!4v1716492174737!5m2!1ses!2smx"
      ></iframe>`;
  }, 500);
});
