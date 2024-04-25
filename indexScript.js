const typedText = document.getElementById('typedText');
const blinkingSymbol = document.getElementById('blinkingSymbol');
const text = "Click START to continue or"; // The text to be typed (replace with your full text)
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60); // Adjust speed here (lower for faster typing)
  }
}

typeWriter();

typedText.addEventListener('click', function() {
  window.location.href = "./mainView"; /* "./mainView" works for github "mainView.html" works for visual */
});

const userInput = document.getElementById('userInput');
const resultContainer = document.getElementById('resultContainer');

userInput.addEventListener('keyup', handleUserInput); 

function handleUserInput(event) {
  if (event.keyCode === 13) { 
    const inputText = userInput.value.toLowerCase().trim();
    const triggerText = 'start';

    if (inputText === triggerText) {
      window.location.href = './mainView';
    } else {
      resultContainer.textContent = 'Try again typing "start".';
    }
  }
}
