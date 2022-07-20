import initMenuScrollSuave from "./modulo/menu-scroll-suave.js";
import PortfolioSlide from "./modulo/portfolio-slide.js";

initMenuScrollSuave();
const portfolioSlide = new PortfolioSlide(".slide", ".container-slide");
portfolioSlide.init();
// console.log(portfolioSlide);
