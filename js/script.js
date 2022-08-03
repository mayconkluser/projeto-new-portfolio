import initMenuScrollSuave from "./modulo/menu-scroll-suave.js";
import initTabHabilidade from "./modulo/habilidade-tab.js";
import initMobileButton from "./modulo/menu-mobile.js";
import initTopPage from "./modulo/topPage.js";
import SlideNav from "./modulo/portfolio-slide.js";
import initForm from "./formulario.js";

initMenuScrollSuave();
initTabHabilidade();
initForm();
initTopPage();
initMobileButton();
const portfolioSlide = new SlideNav(".slide", ".container-slide");
portfolioSlide.init();
portfolioSlide.addArrow(".prev", ".next");

portfolioSlide.addControl(".custom-control");
