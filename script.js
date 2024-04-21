const typedText = document.getElementById('typedText');
const text = "START"; // The text to be typed (replace with your full text)
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50); // Adjust speed here (lower for faster typing)
  }
}

typeWriter();