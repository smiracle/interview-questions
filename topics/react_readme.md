# React Topics

## Table of Contents
- [What is React?](#what-is-react?)
- [What is React's evolutionary history?](#what-is-react's-evolutionary-history?)
- [What are the major features of React?](#what-are-the-major-features-of-react?)
- [What is JSX?](#what-is-jsx?)
- [What is the difference between an Element and a Component?](#what-is-the-difference-between-an-element-and-a-component?)
- [What is JEST?](#what-is-jest?)


### What is React?
React(aka React.js or ReactJS) is an open-source front-end JavaScript library that is used for building composable user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps based on components in a declarative approach.

React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.

[↑ Back to top](#table-of-contents)

### What is React's evolutionary history?
The history of ReactJS started in 2010 with the creation of XHP. XHP is a PHP extension which improved the syntax of the language such that XML document fragments become valid PHP expressions and the primary purpose was used to create custom and reusable HTML elements.

The main principle of this extension was to make front-end code easier to understand and to help avoid cross-site scripting attacks. The project was successful in preventing the malicious content submitted by the scrubbing user.

But there was a different problem with XHP in which dynamic web applications require many roundtrips to the server, and XHP did not solve this problem. Also, the whole UI was re-rendered for each incremental change in the application. Later, the initial prototype of React was created with the name FaxJ by Jordan, inspired from XHP. Finally after sometime React was introduced as a new library into JavaScript ecosystem. JSX comes from the idea of XHP.

[↑ Back to top](#table-of-contents)

### What are the major features of React?
The major features of React are:

 - Uses JSX syntax, a syntax extension of JS that allows developers to write HTML in their JS code.

 - Uses the Virtual DOM instead of the real DOM, since DOM manipulations are expensive.

 - Supports server-side rendering, which is useful for Search Engine Optimization (SEO).

 - Follows unidirectional or 'one-way' data flow or data binding.

 - Has reusable/composable UI components to develop the view.

[↑ Back to top](#table-of-contents)

### What is JSX?
JSX stands for JavaScript XML and it is an XML-like syntax extension to ECMAScript. Basically it just provides the syntactic sugar for the React.createElement(type, props, ...children) function, giving us the expressiveness of JavaScript along with HTML-like template syntax. JSX is stricter than HTML.

In the example below, the text inside the h1 tag is returned as a JavaScript function to the render function.

```javascript
export default function App() { return ( <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1> ); }
```

If you don't use JSX syntax then the respective JavaScript code should be written as below,

```javascript
import { createElement } from 'react';
 export default function App() {
return createElement(
'h1',{
className: 'greeting' }, 
'Hello, this is a JSX Code!' 
);
}
```

[↑ Back to top](#table-of-contents)

### What is the difference between an Element and a Component?
An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it cannot be mutated.

The JavaScript representation (without JSX) of React Element would be as follows:

```javascript
const element = React.createElement("div", { id: "login-btn" }, "Login");
```

The above `React.createElement()` function returns an object as below:

```javascript
{ type: 'div', props: { children: 'Login', id: 'login-btn' } }
```

Finally, this element renders to the DOM using ReactDOM.render(). A component can be declared in several different ways. It can be a class with a render() method or it can be defined as a function. In either case, it takes props as input, and returns a JSX tree as the output:

```javascript
const Button = ({ handleLogin }) => (
<div id={"login-btn"} onClick={handleLogin}>
Login
</div>
);
```

Then JSX gets transpiled to a React.createElement() function tree:

```javascript
const Button = ({ handleLogin }) =>
React.createElement(
"div",
{ id: "login-btn", onClick: handleLogin },
"Login"
);
```

[↑ Back to top](#table-of-contents)

### What is JEST?
JEST is a delightful JavaScript Testing Framework with a focus on simplicity.

```javascript
const myRef = React.createRef();
<SomeComponent ref={myRef} />;
```

[JEST](https://jestjs.io/)

[↑ Back to top](#table-of-contents)
