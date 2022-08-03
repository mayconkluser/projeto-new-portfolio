export default function initTopPage() {
  const btn = document.getElementById("btnTop");
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  document.addEventListener("scroll", acultar);

  function acultar() {
    if (window.scrollY > 10) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  }
  acultar();
}
