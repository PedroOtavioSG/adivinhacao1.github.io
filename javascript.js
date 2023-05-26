var randomNumber;
var attempts;
var score;
var resultDiv;

function newGame() {
  randomNumber = Math.floor(Math.random() * 101);
  attempts = 0;
  score = 100;
  resultDiv.textContent = "Tente adivinhar um numero de 0 a 100";
}

function checkGuess() {
  var userGuess = parseInt(document.getElementById("guess-input").value);
  resultDiv = document.getElementById("result");

  if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
    resultDiv.textContent = "Por favor, digite um número válido entre 0 e 100.";
    resultDiv.style.color = "red";
  } else {
    attempts++;
    score--;

    if (userGuess < randomNumber) {
      resultDiv.textContent = "Tente um número maior.";
    } else if (userGuess > randomNumber) {
      resultDiv.textContent = "Tente um número menor.";
    } else {
      resultDiv.textContent = "Parabéns! Você acertou o número em " + attempts + " tentativa(s). Pontuação: " + score;
      resultDiv.style.color = "green";
    }
  }
}

newGame(); // Iniciar um novo jogo ao carregar a página
