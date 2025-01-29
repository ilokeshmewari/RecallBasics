// Basic JavaScript Operations

// 1. Variables and Data Types
let name = "Lokesh";
const age = 25;
var isDeveloper = true;

// 2. Operators
let sum = 10 + 5;
let difference = 20 - 5;
let product = 4 * 5;
let quotient = 20 / 4;
let remainder = 10 % 3;

// 3. Conditional Statements
if (age > 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// 4. Loops
for (let i = 1; i <= 5; i++) {
    console.log("Iteration: ", i);
}

// 5. Functions
function greet(userName) {
    return `Hello, ${userName}!`;
}
console.log(greet(name));

// 6. Arrays
let skills = ["HTML", "CSS", "JavaScript", "React"];
skills.push("Node.js");
console.log("Skills: ", skills);

// 7. Objects
let user = {
    name: "Lokesh",
    age: 25,
    role: "MERN Stack Developer"
};
console.log("User Info:", user);

// 8. Arrow Functions
const addNumbers = (a, b) => a + b;
console.log("Sum: ", addNumbers(10, 20));

// 9. DOM Manipulation assuming HTML exist
const btn = document.createElement("button");
btn.innerText = "Click Me";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
    alert("Button Clicked!");
});
