```javascript
let points = Number(localStorage.getItem("manaPoints")) || 0;

document.getElementById("points").textContent = points;

const sentences = [
    "Hello! How are you?",
    "My name is Ravi.",
    "I want a glass of water.",
    "How much does this cost?",
    "Where is the bus stop?",
    "Thank you for helping me.",
    "I am learning English.",
    "Please speak slowly."
];

let sentenceIndex = 0;

function startLearning() {
    document.getElementById("lessons").scrollIntoView({
        behavior: "smooth"
    });
}

function openLesson(lesson) {
    const lessonNames = {
        greetings: "Greetings",
        shopping: "Shopping",
        travel: "Travel"
    };

    const lessonContent = {
        greetings: [
            ["What do we say when we meet someone?", "Hello", "Goodbye", "Sorry", 1],
            ["How do you introduce yourself?", "I am fine", "My name is Ravi", "Thank you", 2],
            ["What do you say when someone helps you?", "Thank you", "Good night", "Excuse me", 1]
        ],
        shopping: [
            ["How do you ask the price?", "Where are you?", "How much is this?", "Who are you?", 2],
            ["What do you say when you want to buy something?", "I would like this", "I am sleeping", "Good morning", 1],
            ["What do you say after buying something?", "Thank you", "Goodbye forever", "I am hungry", 1]
        ],
        travel: [
            ["How do you ask about the bus stop?", "Where is the bus stop?", "How are you?", "What is your name?", 1],
            ["How do you ask for a ticket?", "I need a ticket", "I need a pencil", "I am at home", 1],
            ["How do you ask the time?", "What is your name?", "What time is it?", "How much is this?", 2]
        ]
    };

    const questions = lessonContent[lesson];
    let questionIndex = 0;
    let score = 0;

    const box = document.createElement("div");
    box.style.cssText = "position:fixed;inset:0;background:#fffdf5;z-index:1000;overflow:auto;padding:30px 15px;text-align:center";

    document.body.appendChild(box);

    function showQuestion() {
        if (questionIndex >= questions.length) {
            box.innerHTML = `
                <h1>🎉 Lesson Complete!</h1>
                <h2>${lessonNames[lesson]}</h2>
                <p>You answered ${score} out of ${questions.length} correctly.</p>
                <h2>⭐ +${score * 10} XP</h2>
                <button id="finishLesson">Continue</button>
            `;

            points += score * 10;
            localStorage.setItem("manaPoints", points);
            document.getElementById("points").textContent = points;

            document.getElementById("finishLesson").onclick = function () {
                box.remove();
            };

            return;
        }

        const q = questions[questionIndex];

        box.innerHTML = `
            <h2>${lessonNames[lesson]} 📚</h2>
            <p>Question ${questionIndex + 1} of ${questions.length}</p>
            <h3 style="margin:25px 0">${q[0]}</h3>
            <div>
                <button class="answer" data-answer="1">${q[1]}</button>
```
