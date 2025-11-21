
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import CardDetails from "./components/CardDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
