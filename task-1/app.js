let flashcards = [];
let currentCard = 0;
let score = 0;

// Add a flashcard
function addFlashcard() {
    const questionInput = document.getElementById("question").value;
    const answerInput = document.getElementById("answer").value;
    
    if (questionInput && answerInput) {
        flashcards.push({ question: questionInput, answer: answerInput });
        alert("Flashcard added!");
        
        // Clear the input fields
        document.getElementById("question").value = '';
        document.getElementById("answer").value = '';
    } else {
        alert("Please fill in both question and answer fields.");
    }
}

// Show the answer to the current flashcard
function showAnswer() {
    const answerDisplay = document.getElementById("answerDisplay");
    
    if (flashcards.length > 0) {
        answerDisplay.textContent = flashcards[currentCard].answer;
        answerDisplay.style.display = "block";
    } else {
        alert("No flashcards to show.");
    }
}

// Mark the answer as correct
function correct() {
    if (flashcards.length > 0) {
        score++;
        document.getElementById("score").textContent = score;
        nextCard();
    }
}

// Mark the answer as incorrect
function incorrect() {
    if (flashcards.length > 0) {
        nextCard();
    }
}

// Move to the next card
function nextCard() {
    document.getElementById("answerDisplay").style.display = "none";
    if (flashcards.length > 0) {
        currentCard = (currentCard + 1) % flashcards.length;
        document.getElementById("questionDisplay").textContent = flashcards[currentCard].question;
    } else {
        document.getElementById("questionDisplay").textContent = "No flashcards available";
    }
}