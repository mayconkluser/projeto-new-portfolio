export default class PortfolioSlide {
  constructor(divPortfolio, ulPortfolio) {
    this.divPortfolio = document.querySelector(divPortfolio);
    this.ulPortfolio = document.querySelector(ulPortfolio);
    this.distancias = {
      posicaoFinal: 0,
      inicioX: 0,
      totalMovimento: 0,
    };
  }

  moverEvento(distanciaX) {
    this.distancias.posicaoDoMovimento = distanciaX;
    this.divPortfolio.style.transform = `translate3d(${distanciaX}px,0,0)`;
  }

  atualizarPosicao(clientX) {
    this.distancias.totalMovimento = (this.distancias.inicioX - clientX) * 1.6;
    return this.distancias.posicaoFinal - this.distancias.totalMovimento;
  }

  comecarEvento(event) {
    event.preventDefault();
    this.distancias.inicioX = event.clientX;
    this.ulPortfolio.addEventListener("mousemove", this.quandoMover);
  }

  terminarEvento(event) {
    this.ulPortfolio.removeEventListener("mousemove", this.quandoMover);
    this.distancias.posicaoFinal = this.distancias.posicaoDoMovimento;
  }

  quandoMover(event) {
    const posicaoFinal = this.atualizarPosicao(event.clientX);
    this.moverEvento(posicaoFinal);
  }

  adicionarEventoSlide() {
    this.ulPortfolio.addEventListener("mousedown", this.comecarEvento);
    this.ulPortfolio.addEventListener("mouseup", this.terminarEvento);
  }

  eventosBind() {
    this.comecarEvento = this.comecarEvento.bind(this);
    this.quandoMover = this.quandoMover.bind(this);
    this.terminarEvento = this.terminarEvento.bind(this);
  }

  iniciarEvento() {
    this.eventosBind();
    this.adicionarEventoSlide();
    return this;
  }
}
