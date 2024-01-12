const textInput = document.getElementById("text-input");
const undoButton = document.getElementById("undo");
const redoButton = document.getElementById("redo");

let textHistory = []; // Array to store text history
let currentHistoryIndex = 0;

// Function to update text history
function updateHistory() {
  textHistory.splice(currentHistoryIndex + 1); 
  textHistory.push(textInput.value);
  currentHistoryIndex = textHistory.length - 1;
  enableDisableButtons();
}

// Function to enable/disable Undo/Redo buttons
function enableDisableButtons() {
  undoButton.disabled = currentHistoryIndex === 0;
  redoButton.disabled = currentHistoryIndex === textHistory.length - 1;
}

// Event listener for text input changes
textInput.addEventListener("input", updateHistory);

// Undo button click handler
undoButton.addEventListener("click", () => {
  if (currentHistoryIndex > 0) {
    currentHistoryIndex--;
    textInput.value = textHistory[currentHistoryIndex];
    enableDisableButtons();
  }
});

// Redo button click handler
redoButton.addEventListener("click", () => {
  if (currentHistoryIndex < textHistory.length - 1) {
    currentHistoryIndex++;
    textInput.value = textHistory[currentHistoryIndex];
    enableDisableButtons();
  }
});


updateHistory(); // Add the initial text content to history


const fontColorSelect = document.getElementById("font-color");

fontColorSelect.addEventListener("change", (event) => {
  const selectedColor = event.target.value.toLowerCase(); // Get the selected color value (lowercase)
  textInput.style.color = selectedColor; // Apply the color to the text input
});

const fontStyleSelect = document.getElementById("font-style");

fontStyleSelect.addEventListener("change", (event) => {
  const selectedFontFamily = event.target.value;
  textInput.style.fontFamily = selectedFontFamily;
});

function add() {
  const textInput = document.getElementById("text-input");
  const textarea = document.getElementById("text-to-add"); 
  const newText = textarea.value;

  // Add the text from the textarea to the text input
  textInput.value +=" "+ newText;

  // Clear the textarea after adding the text
  textarea.value = "";
}



const quantityInput = document.getElementById("quantity");



function increment() {
  const currentFontSize = parseFloat(quantityInput.style.fontSize) || 16;
  const newFontSize = Math.min(40, currentFontSize + 2);
  textInput.style.fontSize = newFontSize + "px";
}

function decrement() {
  const currentFontSize = parseFloat(quantityInput.style.fontSize) || 16;
  const newFontSize = Math.max(12, currentFontSize - 2);
  textInput.style.fontSize = newFontSize + "px";
}















