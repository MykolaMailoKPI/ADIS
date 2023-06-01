import './App.css';
import { Reimplement } from './components/Reimplement';
import { Second } from './components/Second';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from './components/Layout'

function App() {
  return (
    <div className="App">
        <Second />
    </div>
  );
}

export default App;
