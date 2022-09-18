import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NumAndValidity from "./components/NumAndValidity/NumAndValidity";
import SubmittedData from "./components/SubmittedData/SubmittedData";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step2" element={<NumAndValidity />} />
        <Route path="/submitted" element={<SubmittedData />} />
      </Routes>
    </div>
  );
}

export default App;
