const typedText = document.getElementById('typedText');
const typedText2 = document.getElementById('typedText2');
const text = "Click START to continue."; // The text to be typed (replace with your full text)

let i = 0;

function typeLine() {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(typeLine, 50);
  }
}

typeLine();

typedText.addEventListener('click', function() {
  window.location.href = "./mainView"; /* "./mainView" works for github "mainView.html" works for visual */
});

