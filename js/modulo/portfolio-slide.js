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
    let tipoDeMovimento;
    if (event.type === "mousedown") {
      event.preventDefault();
      this.distancias.inicioX = event.clientX;
      tipoDeMovimento = "mousemove";
    } else {
      this.distancias.inicioX = event.changedTouches[0].clientX;
      tipoDeMovimento = "touchmove";
    }
    this.ulPortfolio.addEventListener(tipoDeMovimento, this.quandoMover);
  }

  terminarEvento(event) {
    const tipoMovimento = event.type === "mouseup" ? "mousemove" : "touchmove";
    this.ulPortfolio.removeEventListener(tipoMovimento, this.quandoMover);
    this.distancias.posicaoFinal = this.distancias.posicaoDoMovimento;
  }

  quandoMover(event) {
    const posicaoInicial =
      event.type === "mousemove"
        ? event.clientX
        : event.changedTouches[0].clientX;
    const posicaoFinal = this.atualizarPosicao(posicaoInicial);
    this.moverEvento(posicaoFinal);
  }

  adicionarEventoSlide() {
    this.ulPortfolio.addEventListener("mousedown", this.comecarEvento);
    this.ulPortfolio.addEventListener("touchstart", this.comecarEvento);
    this.ulPortfolio.addEventListener("mouseup", this.terminarEvento);
    this.ulPortfolio.addEventListener("touchend", this.terminarEvento);
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
