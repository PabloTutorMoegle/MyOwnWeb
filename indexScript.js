const typedText = document.getElementById('typedText');
const typedText2 = document.getElementById('typedText2');
const text = "Click START to continue or"; // The text to be typed (replace with your full text)
const text2 = "Type it here: ";

const lines = [
  {element: typedText, text: text},
  {element: typedText2, text: text2}
]

let currentLine = 0;
let i = 0;

function typeLine() {
  const currentLineElement = lines[currentLine].element;
  const currentLineText = lines[currentLine].text;

  if (i < currentLineText.length) {
    currentLineElement.textContent += currentLineText.charAt(i);
    i++;
    setTimeout(typeLine, 40); // Adjust speed here
  } else {
    // Move to the next line if there is one
    if (currentLine + 1 < lines.length) {
      currentLine++;
      i = 0; // Reset index for the new line
      typeLine();
    }
  }
}

typeLine();

typedText.addEventListener('click', function() {
  window.location.href = "./mainView"; /* "./mainView" works for github "mainView.html" works for visual */
});

