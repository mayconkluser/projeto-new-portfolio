import initMenuScrollSuave from "./modulo/menu-scroll-suave.js";
import PortfolioSlide from "./modulo/portfolio-slide.js";

const portfolioSlide = new PortfolioSlide(
  ".portfolio",
  ".portfolio-container-box"
);
portfolioSlide.iniciarEvento();
initMenuScrollSuave();
