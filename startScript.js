const typedText = document.getElementById('typedText');
const blinkingSymbol = document.getElementById('blinkingSymbol');
const text = "Click START to continue."; // The text to be typed (replace with your full text)
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
  window.location.href = "./mainView";
});
