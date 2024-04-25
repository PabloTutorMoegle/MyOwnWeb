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
const typedLineMail = document.getElementById('typedLineMail');
const typedLineAboutMe = document.getElementById('typedLineAboutMe');

// Combine all your text content into separate variables
const line1Text = "Pablo de Vicente-Tutor Moegle";
const line2Text = "I am a computer engineer student.";
const lineAboutMe = "About me";
const line3Text = "My sites:";
const GithubText = "Github";
const LinkedInText = "LinkedIn";
const InstagramText = "Instagram";
const line4Text = "You can contact me at this email address ---> ";
const emailText = "pablotutormoegle@gmail.com"; 
const line5Text = "Thanks.";
const line6Text = "<---";
const lineInstrucctions = "You can click on the orange words or type here: "


// Create an array to store all text content and their corresponding elements
const lines = [
  { element: typedLine6, text: line6Text },
  { element: typedLine1, text: line1Text },
  { element: typedLine2, text: line2Text },
  { element: typedLineAboutMe, text: lineAboutMe},
  { element: typedLine3, text: line3Text },
  { element: typedLineGithub, text: GithubText },
  { element: typedLineLinkedIn, text: LinkedInText },
  { element: typedLineInstagram, text: InstagramText },
  { element: typedLine4, text: line4Text },
  { element: typedLineMail, text: emailText },
  { element: typedLine5, text: line5Text },
  { element: typedLineInstrucctions, text: lineInstrucctions }
];

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

typedLineAboutMe.addEventListener('click', function() {
  window.location.href = "./aboutMe";
});
typedLineGithub.addEventListener('click', function() {
const link = document.createElement('a');
link.href = "https://github.com/PabloTutorMoegle";
link.target = "_blank";
link.click();
});
typedLineLinkedIn.addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = "https://www.linkedin.com/in/pablo-tutor-moegle/";
  link.target = "_blank";
  link.click();
});
typedLineInstagram.addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = "https://www.instagram.com/pablitoclavito17/";
  link.target = "_blank";
  link.click();
});
typedLine6.addEventListener('click', function() {
  window.location.href = "./"; /* "./" works for github "index.html" works for visual*/
});
