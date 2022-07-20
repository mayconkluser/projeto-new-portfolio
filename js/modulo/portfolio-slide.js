export default class PortfolioSlide {
  constructor(slide, containerSlide) {
    this.slide = document.querySelector(slide);
    this.containerSlide = document.querySelector(containerSlide);
    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
    };
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(event) {
    let movetype;
    if (event.type === "mousedown") {
      event.preventDefault();
      this.dist.startX = event.clientX;
      movetype = "mousemove";
    } else {
      this.dist.startX = event.changedTouches[0].clientX;
      movetype = "touchmove";
    }
    this.containerSlide.addEventListener(movetype, this.onMove);
  }

  onMove(event) {
    const poiterPosition =
      event.type === "mousemove"
        ? event.clientX
        : event.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(poiterPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(event) {
    const movetype = event.type === "mouseup" ? "mousemove" : "touchmove";
    this.containerSlide.removeEventListener(movetype, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
  }

  addSlideEvents() {
    this.containerSlide.addEventListener("mousedown", this.onStart);
    this.containerSlide.addEventListener("touchstart", this.onStart);
    this.containerSlide.addEventListener("mouseup", this.onEnd);
    this.containerSlide.addEventListener("touchend", this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  // slide config

  slidePosition(slide) {
    const margin = (this.containerSlide.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slidesConfg() {
    this.slideArray = [...this.slide.children].map((item) => {
      const position = this.slidePosition(item);
      return {
        position,
        item,
      };
    });
  }

  slidesIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    };
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.dist.finalPosition = activeSlide.position;
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    this.slidesConfg();
    return this;
  }
}
