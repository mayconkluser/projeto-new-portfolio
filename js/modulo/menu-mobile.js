import outsideClick from "./clicar-fora.js";
export default function initMobileButton() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click"];

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add("active");
      menuButton.classList.add("active");
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
      console.log(menuButton);
    }
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
