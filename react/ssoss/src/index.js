
const React = require('react')
const ReactDOM = require('react-dom/client')
require("./index.css")
const App = require("./App.js")

console.log("WAAGH")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
