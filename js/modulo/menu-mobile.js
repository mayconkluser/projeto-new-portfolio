import outsideClick from "./clicar-fora.js";
export default function initMobileButton() {
  const btnMobile = document.querySelector('[data-menu="button"]');
  const listMenu = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function openMenu(event) {
    const nav = document.querySelector('[data-nav="nav"]');
    const active = nav.classList.contains("active");
    btnMobile.classList.add("active");
    listMenu.classList.add("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
      event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
    outsideClick(listMenu, eventos, () => {
      btnMobile.classList.remove("active");
      listMenu.classList.remove("active");
    });
  }
  btnMobile.addEventListener("click", openMenu);
  btnMobile.addEventListener("touchstart", openMenu);
}
