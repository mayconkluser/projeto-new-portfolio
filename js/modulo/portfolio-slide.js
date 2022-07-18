export default class PortfolioSlide {
  constructor(divPortfolio, ulPortfolio) {
    this.divPortfolio = document.querySelector(divPortfolio);
    this.ulPortfolio = document.querySelector(ulPortfolio);
  }

  ComecarEvento(event) {
    event.preventDefault();
    this.ulPortfolio.addEventListener("mousemove", this.quandoMover);
  }

  terminarEvento(event) {
    this.ulPortfolio.removeEventListener("mousemove", this.quandoMover);
  }

  quandoMover(event) {}

  adicionarEventoSlide() {
    this.ulPortfolio.addEventListener("mousedown", this.ComecarEvento);
    this.ulPortfolio.addEventListener("mouseup", this.terminarEvento);
  }

  eventosBind() {
    this.ComecarEvento = this.ComecarEvento.bind(this);
    this.quandoMover = this.quandoMover.bind(this);
    this.terminarEvento = this.terminarEvento.bind(this);
  }

  iniciarEvento() {
    this.eventosBind();
    this.adicionarEventoSlide();
    return this;
  }
}
