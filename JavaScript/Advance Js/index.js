// Advanced JavaScript Concepts
//Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("fetched successfully");
            } else {
                reject("Error in fetching");
            }
        }, 2000);
    });
};

fetchData()
    .then(response => console.log(response))
    .catch(error => console.error(error));

//Async/Await
const asyncFunction = async () => {
    try {
        let response = await fetchData();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};

asyncFunction();

//Fetch API
const fetchUserData = async () => {
    try {
        let response = await fetch("https://randomapi.com");
        let data = await response.json();
        console.log("data:", data);
    } catch (error) {
        console.error("error:", error);
    }
};

fetchUserData();

//Event Loop & Callbacks
console.log("Start");
setTimeout(() => console.log("Timeout"), 1000);
Promise.resolve().then(() => console.log("Promise Resolv"));
console.log("End");

// import { exportedFunction } from "./export.js";
// exportedFunction();

// Map, Filter, Reduce
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubled);
const filtered = numbers.filter(num => num > 2);
console.log("Filtered Numbers:", filtered);
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);

//Local Storage
localStorage.setItem("username", "Lokesh");
console.log("Username:", localStorage.getItem("username"));
