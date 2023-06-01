import './App.css';
import { Reimplement } from './components/Reimplement';
import { Second } from './components/Second';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from './components/Layout'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Reimplement />} />
                    <Route path="second" element={<Second />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
