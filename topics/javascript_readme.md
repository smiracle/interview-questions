# Javascript Topics

## Table of Contents
- [What is JavaScript?](#what-is-javascript)
- [What is the difference between var and let?](#what-is-the-difference-between-var-and-let)
- [What is a callback, when would you use one?](#what-is-a-callback-when-would-you-use-one)
- [What is hoisting?](#what-is-hoisting)
- [What is a closure?](#what-is-a-closure)
- [What is the event loop?](#what-is-the-event-loop)
- [What are the bitwise operators in JavaScript?](#what-are-the-bitwise-operators-in-javascript)

### What is JavaScript?

JavaScript is a high-level, interpreted scripting language that conforms to the ECMAScript specification. It is a language that is characterized by dynamic typing, first-class functions, and prototype-based object-orientation. Initially designed to make web development easier by allowing developers to add interactive elements to websites, JavaScript has grown into a powerful language used on both the client-side and server-side to build scalable and complex applications. It can be used to create web pages that are interactive, responsive, and user-friendly. JavaScript is universally supported by all modern web browsers without the need for plugins. Its versatility extends to the development of games, mobile applications, and server-side network programming.

[↑ Back to top](#javascript-topics)

### What is the difference between var and let?

VAR
Declaring a var at the global level creates a property on the global object (which is 'window' in browsers). This means that if you declare a global variable with var, you can access it as a property of the global object. Var is function scoped and hoisted to the top of their *function* scope (only the declaration is hoisted, not the initialization). You can redeclare the same variable within the same scope without causing an error, which can lead to bugs.
LET
Let is block scoped and is hoisted to the top of their *block* scope, but they are not declared or initialized. You cannot redeclare the same variable within the same scope. You cannot redeclare let variables. Declaration at the global level does not create a property on the global object. This behavior is helpful in modular JavaScript development, where you wish to avoid polluting the global namespace. Const works the same as let, but contains values that can't be modified.

[↑ Back to top](#javascript-topics)

### What is a callback, when would you use one?

A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. In JavaScript, callbacks are used extensively, particularly in asynchronous operations such as web API requests, file operations, or timers. They provide a way to ensure that certain code does not execute until other code has already finished execution, which is crucial in operations that take an unknown amount of time to complete, like fetching data from a server.
When you would use a callback:
- Asynchronous Operations: The most common use case for callbacks is in asynchronous operations, where you need to wait for an operation to complete without blocking the execution of subsequent code. For example, when making API calls, you might provide a callback function to be executed once the data is received.
- Event Listeners: Callbacks are used to define behavior that should happen in response to an event, such as a user clicking a button or a form being submitted.
- Higher-Order Functions: In JavaScript, functions that take other functions as arguments or return them as output are called higher-order functions. Callbacks are often used in this context to allow for custom behavior to be inserted into reusable functions. For example, array methods like .map(), .filter(), and .reduce() accept callback functions to perform operations on array elements.
- Continuation Passing: Callbacks can be used in Continuation-Passing Style (CPS), a pattern where control is passed to the next step of a program through a callback. This can be seen in Node.js style error-first callbacks, where the first argument to the callback is an error object, and subsequent arguments represent resulting data from the async operation.
```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { user: "John Doe", age: 30 };
    callback(data);
  }, 1000);
}
fetchData((userData) => {
  console.log(userData);
});

```
In this example, fetchData simulates an asynchronous operation that takes 1 second to complete. The callback function is passed as an argument to fetchData and is called with the "fetched" data once it is available.

Advantages:
Callbacks provide a simple way to handle asynchronous operations.
They allow for flexible code where functions can be passed around and used dynamically.

Disadvantages:
Excessive use of callbacks can lead to "callback hell," where multiple nested callbacks become hard to read and maintain. This issue is also known as "Pyramid of Doom." 
Difficulties in error handling in nested callbacks.

To mitigate some of these disadvantages, Promises and async/await syntax were introduced in JavaScript, offering a cleaner and more readable way to handle asynchronous operations.

[↑ Back to top](#javascript-topics)

### What is hoisting?

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution. Regardless of where functions and variables are declared, they are hoisted to the top of their scope by the JavaScript engine. However, only the declarations are hoisted, not initializations.

For variables, this means that referencing a variable before it is declared will result in undefined because only the declaration (var x;), not the initialization (x = 5;), is hoisted to the top. For functions, because the entire function declaration is hoisted, it can be called before it is declared in the code.

Here's how hoisting works with variables:
```javascript
console.log(x);
var x = 5;
console.log(x); // Outputs: undefined, 5

```
And for functions:
```javascript
hoistedFunction();
function hoistedFunction() {
  console.log("I am hoisted!");
} // Outputs: I am hoisted!

```
It's important to note that let and const declarations are hoisted as well, but they maintain a temporal dead zone from the start of the block until the declaration is initialized, resulting in a ReferenceError if accessed before initialization.

[↑ Back to top](#javascript-topics)

### What is a closure?

A closure in JavaScript is a feature where a function retains access to its lexical scope even when the function is executed outside that scope. In simpler terms, closures allow functions to remember and access variables from the place where they were defined, even after the outer function has finished executing. This behavior enables powerful programming patterns, such as data encapsulation, currying, and creating function factories.
```javascript
function createGreeting(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}
const greetHello = createGreeting("Hello");
greetHello("Alice"); // Output: "Hello, Alice!"

```

[↑ Back to top](#javascript-topics)

### What is the event loop?

The event loop is a fundamental concept that is not specific to React or TypeScript but is a core part of the JavaScript runtime environment, such as in browsers or Node.js. It's responsible for handling asynchronous operations and managing the execution order of scripts, handling events, and executing queued tasks and callbacks.
- 1. Call Stack: It's where the JavaScript runtime keeps track of the function calls currently running. When a function executes, it's pushed onto the stack, and when it returns, it's popped off the stack. The call stack is LIFO (Last In, First Out).
- 2. Callback Queue: When asynchronous operations (like setTimeout, network requests, or event handlers) complete, their callbacks are added to the callback queue. These are tasks waiting to be moved to the call stack for execution.
- 3. Event Loop: Its job is to look at the call stack and the callback queue. If the call stack is empty, it takes the first event from the queue and pushes it onto the call stack, which effectively runs it. This loop allows JavaScript to perform non-blocking operations, despite being single-threaded.
Event Loop in the Context of React and TypeScript:
- React: React's updates and rendering can be asynchronous. React 16 and above versions (with the introduction of Fiber architecture) improve handling of asynchronous tasks by breaking work into chunks and spreading them over multiple frames. React's state updates may be batched or deferred to optimize performance, but this scheduling is managed internally by React and is abstracted away from the developer.
- TypeScript: The event loop concept applies to the JavaScript that TypeScript compiles to. TypeScript does not change how the event loop works; it only provides types and other syntactical constructs that are stripped away during the compilation process.

[↑ Back to top](#javascript-topics)

### What are the bitwise operators in JavaScript?

Bitwise operators in JavaScript are used to perform bit-level operations on operands, treating their arguments as a set of 32 bits (zeroes and ones). These operators are not commonly used in daily programming but are essential in low-level programming, such as graphics or device driver operations, and for optimization of certain types of algorithms.
- AND (&): Returns a 1 in each bit position for which the corresponding bits of both operands are 1s.
- OR (|): Returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.
- XOR (^): Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
- NOT (~): Inverts the bits of its operand.
- Left Shift (<<): Shifts the first operand the specified number of bits to the left. Excess bits shifted off to the left are discarded, and zeroes are shifted in from the right.
- Sign-propagating Right Shift (>>): Shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded, and copies of the leftmost bit are shifted in from the left.
- Zero-fill Right Shift (>>>): Shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded, and zeroes are shifted in from the left.
- The left shift assignment operator (<<=) shifts the bits of the left operand to the left by the number of positions specified by the right operand, assigning the result to the left operand. This operation multiplies the left operand by 2 to the power of the right operand, effectively increasing its value by magnitudes of two for unsigned integers.
- The right shift assignment operator (>>=) shifts the bits of the left operand to the right by the number of positions specified by the right operand, assigning the result to the left operand. It effectively divides the left operand by 2 to the power of the right operand for unsigned integers.
Using bitwise operators can be very efficient for certain types of calculations. However, since JavaScript numbers are floating point and bitwise operations are 32-bit, the operands are converted to 32-bit integers for calculation, which may lead to unexpected results if not used carefully.

[↑ Back to top](#javascript-topics)


