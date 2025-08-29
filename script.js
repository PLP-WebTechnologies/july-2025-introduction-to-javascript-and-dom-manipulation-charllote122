// Assignment: Mastering JavaScript Fundamentals

// ===============================
// Part 1: Variables & Conditionals
// ===============================
let userName = "Alex";
let userAge = 20;

// Simple conditional
if (userAge >= 18) {
    console.log(`${userName} is an adult`);
} else {
    console.log(`${userName} is a minor`);
}

// ===============================
// Part 2: Functions
// ===============================

// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
    return price + (price * taxRate);
}
console.log("Total with tax:", calculateTotal(100, 0.15));

// Function 2: Toggle content on the page
function toggleMessage() {
    const welcome = document.getElementById("welcome");
    if (welcome.innerText.includes("magic")) {
        welcome.innerText = "Message has been toggled!";
    } else {
        welcome.innerText = "Click the button to see some magic";
    }
}

// ===============================
// Part 3: Loops
// ===============================

// Loop 1: Simple countdown
function countdown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
    console.log("Liftoff!");
}

// Loop 2: Generate dynamic list items
function generateList() {
    let items = ["JavaScript", "Functions", "Loops", "DOM"];
    let list = document.getElementById("dynamicList");
    list.innerHTML = ""; // clear before adding
    items.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });
}

// ===============================
// Part 4: DOM Manipulation
// ===============================

// Interaction 1: Button click to toggle text
document.getElementById("actionBtn").addEventListener("click", toggleMessage);

// Interaction 2: Button click to start countdown (console + page)
document.getElementById("countdownBtn").addEventListener("click", () => {
    let counter = 5;
    let interval = setInterval(() => {
        document.getElementById("welcome").innerText = `Countdown: ${counter}`;
        counter--;
        if (counter < 0) {
            clearInterval(interval);
            document.getElementById("welcome").innerText = "Liftoff!";
        }
    }, 1000);
});

// Interaction 3: Generate a dynamic list on page load
window.onload = generateList;
