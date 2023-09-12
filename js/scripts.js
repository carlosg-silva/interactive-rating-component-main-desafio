const submitButton = document.querySelector("#submit-button");
const search = document.getElementById("search");
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".my-button");
const selectedValue = document.getElementById("selected-value");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Remove a classe "active" de todos os botões
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    // Adiciona a classe "active" apenas ao botão clicado
    button.classList.add("active");

    const buttonValue = button.getAttribute("data-value");

    selectedValue.textContent = buttonValue;
  });
});

submitButton.addEventListener("click", function (event) {
  // Verifique se algum botão está ativo
  const anyButtonActive = Array.from(buttons).some((btn) =>
    btn.classList.contains("active")
  );

  if (!anyButtonActive) {
    event.preventDefault(); // Impede o envio do formulário
    alert("Select a note before submitting."); // Exibe uma mensagem de alerta
  } else {
    // Alternar classes "hide" em "search" e "result"
    search.classList.toggle("hide");
    result.classList.toggle("hide");
  }
});
