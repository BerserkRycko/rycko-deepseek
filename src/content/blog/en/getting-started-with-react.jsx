import React from 'react';

const GettingStartedWithReact = () => {
  return (
    <div className="blog-content">
      <h2>Introduction to React</h2>
      <p>React is a popular JavaScript library for building user interfaces, especially web applications. Created by Facebook, it allows developers to create large web applications that can change data without reloading the page.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Component-Based Architecture:</strong> Build encapsulated components that manage their own state</li>
        <li><strong>Virtual DOM for Performance:</strong> React creates an in-memory data structure cache</li>
        <li><strong>Unidirectional Data Flow:</strong> Data flows down from parent to child components</li>
        <li><strong>JSX Syntax:</strong> JavaScript syntax extension that looks similar to HTML</li>
      </ul>
      
      <h2>Setting Up Your First Project</h2>
      <p>To get started with React, you can use Create React App or Vite. These tools set up your development environment so you can use the latest JavaScript features.</p>
      
      <pre><code>{`// Example React component
function Welcome() {
  return <h1>Hello, React!</h1>;
}

// Using the component
function App() {
  return (
    <div>
      <Welcome />
      <p>Welcome to React development!</p>
    </div>
  );
}`}</code></pre>
      
      <h2>Why Choose React?</h2>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
      
      <div className="tip-box">
        <strong>💡 Tip:</strong> Start with small components and gradually build more complex ones as you become comfortable with React's concepts.
      </div>
    </div>
  );
};

export default GettingStartedWithReact;