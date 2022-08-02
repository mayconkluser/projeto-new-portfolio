export default function initForm() {
  const formulario = document.querySelector("form");

  function formularioEnviado(resposta) {
    if (resposta.ok) {
      formulario.innerHTML =
        "<p class='font-6-1-15-p' style='background:#45b954; color:#fff; border-radius:5px; padding:1rem;'>Mensagem enviada, em breve entraremos em contato. Geralmente responderemos em 24 horas.</p>";
    } else {
      formulario.innerHTML =
        "<p class='font-6-1-15-p' style='background:#ff0200; color:#fff; border-radius:5px; padding:1rem;'>Erro no envio, você pode enviar diretamente para o nosso email em : contato@loomacode.com.br</p>";
    }
  }

  function enviarFormulario(event) {
    event.preventDefault();
    const botao = document.querySelector("form button");
    botao.disabled = true;
    botao.innerHTML = "Enviando...";

    const data = new FormData(formulario);

    fetch("./enviar.php", {
      method: "POST",
      body: data,
    }).then(formularioEnviado);
  }

  formulario.addEventListener("submit", enviarFormulario);
}
