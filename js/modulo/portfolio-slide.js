export default class PortfolioSlide {
  constructor(slide, containerSlide) {
    this.slide = document.querySelector(slide);
    this.containerSlide = document.querySelector(containerSlide);
  }

  onStart(event) {
    event.preventDefault();
    this.containerSlide.addEventListener("mousemove", this.onStart);
    console.log("mousemove");
  }

  onMove(event) {
    console.log("movendo");
  }

  onEnd(event) {
    this.containerSlide.removeEventListener("mousemove", this.onStart);
    console.log("mouseup");
  }

  addSlideEvents() {
    this.containerSlide.addEventListener("mousedown", this.onStart);
    this.containerSlide.addEventListener("mouseup", this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
