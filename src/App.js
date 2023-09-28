import React from 'react';
import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion";

export const MyComponent = ({ isVisible }) => (
  <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </header>
    </div>
  );
}

export default App;
