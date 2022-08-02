import initMenuScrollSuave from "./modulo/menu-scroll-suave.js";
import initTabHabilidade from "./modulo/habilidade-tab.js";
import SlideNav from "./modulo/portfolio-slide.js";

initMenuScrollSuave();
initTabHabilidade();
const portfolioSlide = new SlideNav(".slide", ".container-slide");
portfolioSlide.init();
portfolioSlide.addArrow(".prev", ".next");

portfolioSlide.addControl(".custom-control");
