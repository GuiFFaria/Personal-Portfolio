import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
