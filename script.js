// Assume jsonData contains the JSON data returned from the backend
const jsonData = '{"B":1,"Original":0,"Final":1},{"B":7,"Original":1,"Final":2}, ...';

// Parse JSON data
const movements = JSON.parse(`[${jsonData}]`);

// Initial position for animation
const initialPosition = [/* Array of card values in initial order */];

// Function to initialize card elements
function initializeCards() {
    const container = document.getElementById('card-container');
    for (let i = 0; i < initialPosition.length; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerText = getCardText(initialPosition[i]);
        container.appendChild(card);
    }
}

// Function to update card elements based on movements
function updateCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        const movement = movements.find(m => m.Original === index);
        if (movement) {
            card.style.transform = `translateX(${(movement.Final - index) * 60}px)`;
            card.innerText = getCardText(movement.B);
        }
    });
}

// Helper function to get text for card based on value
function getCardText(value) {
    if (value === 11) return 'J';
    if (value === 12) return 'Q';
    if (value === 13) return 'K';
    return value.toString();
}

// Call the functions
initializeCards().main(null);
updateCards().main(null);

// Assume jsonData contains the JSON data returned from the backend
const jsonData = '{"B":1,"Original":0,"Final":1},{"B":7,"Original":1,"Final":2}, ...';

// Parse JSON data
const movements = JSON.parse(`[${jsonData}]`);

// Initial position for animation
const initialPosition = [/* Array of card values in initial order */];

// Function to initialize card elements
function initializeCards() {
    const container = document.getElementById('card-container');
    for (let i = 0; i < initialPosition.length; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerText = getCardText(initialPosition[i]);
        container.appendChild(card);
    }
}

// Function to update card elements based on movements
function updateCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        const movement = movements.find(m => m.Original === index);
        if (movement) {
            card.style.transform = `translateX(${(movement.Final - index) * 60}px)`;
            card.innerText = getCardText(movement.B);
        }
    });
}

// Helper function to get text for card based on value
function getCardText(value) {
    if (value === 11) return 'J';
    if (value === 12) return 'Q';
    if (value === 13) return 'K';
    return value.toString();
}

// Call the functions
initializeCards.main(null);


// Trigger the updateCards function after a delay to simulate animation
setTimeout(() => {
    updateCards();
}, 1000); // Adjust the delay as needed
