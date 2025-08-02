// Starter examples (function output expectations are provided in README)

// Start coding here...
const makeMultiplier = (factor) => {
    return (number) => number * factor;
};

const double = makeMultiplier(2);
console.log(double(5)); // Output: 10

const makeGreeter = (greeting) => {
    return (name) => `${greeting}, ${name}!`;
};

const sayHi = makeGreeter("Hi");
console.log(sayHi("Mia")); // Output: "Hi, Mia!"
