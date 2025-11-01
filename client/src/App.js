import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { ScoketProvider } from "./providers/Socket";

function App() {
  return (
    <div className="App">
      <Routes>
        <ScoketProvider>
          <Route path="/" element={<Homepage></Homepage>} />
        </ScoketProvider>
      </Routes>
    </div>
  );
}

export default App;
