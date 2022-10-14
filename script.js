function calcular() {
  const horaInicial = document.getElementById("horas");
  const horaValor = horaInicial.value;
  if (horaValor > 0) {
    const valorInicial = document.getElementById("valor");
    const valorValor = valorInicial.value;
    if (valorValor > 0) {
      const porcentagemInicial = document.getElementById("porcentagem");
      const porcentagemValor = porcentagemInicial.value;
      if (porcentagemValor > 0) {
        const resultado = horaValor * valorValor * [porcentagemValor / 100 + 1];
        const resultadoFixed = resultado.toFixed(2);
        const mostrarResultado = document.getElementById("resultado");
        mostrarResultado.innerHTML =
          "O valor das horas extras deste funcionário é de R$ " +
          resultadoFixed +
          ".";
      } else {
        const mostrarResultado = document.getElementById("resultado");
        mostrarResultado.innerHTML =
          "Você deve inserir um valor maior do que 0";
      }
    } else {
      const mostrarResultado = document.getElementById("resultado");
      mostrarResultado.innerHTML = "Você deve inserir um valor maior do que 0";
    }
  } else {
    const mostrarResultado = document.getElementById("resultado");
    mostrarResultado.innerHTML = "Você deve inserir um valor maior do que 0";
  }
}