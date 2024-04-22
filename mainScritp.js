const animatedText = document.getElementById('animated-text');
const typedLine1 = document.getElementById('typedLine1');
const typedLine2 = document.getElementById('typedLine2');
const typedLine3 = document.getElementById('typedLine3');
const typedLine4 = document.getElementById('typedLine4');
const typedLine5 = document.getElementById('typedLine5');
const typedLineGithub = document.getElementById('typedLineGithub');
const typedLineLinkedIn = document.getElementById('typedLineLinkedIn');
const typedLineInstagram = document.getElementById('typedLineInstagram');
const typedLine6 = document.getElementById('typedLine6');
const typedLineInstrucctions = document.getElementById('typedLineInstrucctions');

const blinkingSymbol = document.getElementById('blinkingSymbol');

// Combine all your text content into separate variables
const line1Text = "Pablo de Vicente-Tutor Moegle";
const line2Text = "I am a computer engineer student at 'Universitat Politecnica de Cataluña'.";
const line3Text = "This are my sites:";
const GithubText = "Github";
const LinkedInText = "LinkedIn";
const InstagramText = "Instagram";
const line4Text = "You can contact me at this email address ---> ";
const emailText = "pablotutormoegle@gmail.com"; // Assuming this is the email text
const line5Text = "Thanks.";
const line6Text = "Back";
const lineInstrucctions = "You can click on the orange words."


// Create an array to store all text content and their corresponding elements
const lines = [
  { element: typedLine1, text: line1Text },
  { element: typedLine2, text: line2Text },
  { element: typedLine3, text: line3Text },
  { element: typedLineGithub, text: GithubText },
  { element: typedLineLinkedIn, text: LinkedInText },
  { element: typedLineInstagram, text: InstagramText },
  { element: typedLine4, text: line4Text },
  { element: typedLine4, text: emailText },
  { element: typedLine5, text: line5Text },
  { element: typedLineInstrucctions, text: lineInstrucctions },
  { element: typedLine6, text: line6Text }
];

let currentLine = 0;
let i = 0;

function typeLine() {
  const currentLineElement = lines[currentLine].element;
  const currentLineText = lines[currentLine].text;

  if (i < currentLineText.length) {
    currentLineElement.textContent += currentLineText.charAt(i);
    i++;
    setTimeout(typeLine, 60); // Adjust speed here
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

typedLineGithub.addEventListener('click', function() {
    window.location.href = "https://github.com/PabloTutorMoegle";
  });
typedLineLinkedIn.addEventListener('click', function() {
    window.location.href = "https://www.linkedin.com/in/pablo-tutor-moegle/";
  });
typedLineInstagram.addEventListener('click', function() {
    window.location.href = "https://www.instagram.com/pablitoclavito17/";
  });
typedLine6.addEventListener('click', function() {
    window.location.href = "Start.html";
  });
