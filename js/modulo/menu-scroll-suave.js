export default function initScrollMenuSuave() {
  const linksMenu = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollParaSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  linksMenu.forEach((itens) => {
    itens.addEventListener("click", scrollParaSection);
  });
}
