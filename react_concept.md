
# React & JavaScript Core Concepts

## 1. What is the DOM?

The **DOM (Document Object Model)** is a programming interface for web documents. It represents the page structure as a tree of objects, allowing programming languages like JavaScript to interact with and manipulate HTML and CSS elements dynamically.

---

## 2. What is the difference between Imperative vs Declarative Programming?

- **Imperative Programming** tells the computer *how* to do something step-by-step.
  - Example: Like giving exact steps to make a pizza (roll dough, add sauce, sprinkle cheese, bake).
  
- **Declarative Programming** tells the computer *what* the desired outcome is.
  - Example: Like ordering a pizza and letting the restaurant handle the process.

In React, you write declaratively by describing what the UI should look like, and React takes care of updating the DOM.

---

## 3. What is JSX – the syntax extension for JavaScript?

**JSX (JavaScript XML)** is a syntax extension for JavaScript used in React. It allows developers to write HTML-like code inside JavaScript files. JSX makes it easier to visualize the UI structure and integrate dynamic content using JavaScript expressions.

Example:

```jsx
const greeting = <h1>Hello, world!</h1>;
```

---

## 4. What is the Babel interpreter?

**Babel** is a JavaScript compiler that converts modern JavaScript and JSX into backwards-compatible code for older browsers or environments that don't support newer syntax. It enables features like JSX to work in browsers that don't natively understand them.

---

## 5. What is the difference between props and state?

| Feature | Props | State |
|--------|-------|-------|
| Definition | Short for “properties”, passed from parent to child components | Local data storage managed within the component |
| Mutability | **Read-only** – cannot be changed by the receiving component | **Mutable** – can be updated using `setState()` or React Hooks |
| Use case | For configuring components and passing data down the component tree | For managing internal component logic and dynamic data |