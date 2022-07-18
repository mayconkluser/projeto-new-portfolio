export default function initMenuScrollSuave() {
  const linksMenu = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollParaSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksMenu.forEach((itens) => {
    itens.addEventListener("click", scrollParaSection);
  });
}
