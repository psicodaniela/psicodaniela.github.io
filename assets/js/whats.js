document.getElementById("abrirWhatsApp").addEventListener("click", function () {
  // Substitua "123456789" pelo número de telefone com o código do país (sem espaços ou caracteres especiais)
  var numeroWhatsApp = "5554996678840";

  // Substitua "Mensagem padrão" pela mensagem que deseja incluir
  var mensagemPadrao =
    "Olá, gostaria de informações sobre os seus serviços, pode me ajudar?";

  // Crie a URL de deep link do WhatsApp com a mensagem padrão
  var urlWhatsApp =
    "https://wa.me/" +
    numeroWhatsApp +
    "?text=" +
    encodeURIComponent(mensagemPadrao);

  // Abra o WhatsApp
  window.location.href = urlWhatsApp;
});

document
  .getElementById("abrirWhatsApp2")
  .addEventListener("click", function () {
    // Substitua "123456789" pelo número de telefone com o código do país (sem espaços ou caracteres especiais)
    var numeroWhatsApp = "5554996678840";

    // Substitua "Mensagem padrão" pela mensagem que deseja incluir
    var mensagemPadrao =
      "Olá, gostaria de informações sobre os seus serviços, pode me ajudar?";

    // Crie a URL de deep link do WhatsApp com a mensagem padrão
    var urlWhatsApp =
      "https://wa.me/" +
      numeroWhatsApp +
      "?text=" +
      encodeURIComponent(mensagemPadrao);

    // Abra o WhatsApp
    window.location.href = urlWhatsApp;
  });
