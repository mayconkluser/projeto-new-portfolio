import initMenuScrollSuave from "./modulo/menu-scroll-suave.js";
import SlideNav from "./modulo/portfolio-slide.js";

initMenuScrollSuave();
const portfolioSlide = new SlideNav(".slide", ".container-slide");
portfolioSlide.init();
portfolioSlide.addArrow(".prev", ".next");

portfolioSlide.addControl();
