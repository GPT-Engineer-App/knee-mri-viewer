import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Atlas from "./pages/Atlas.jsx";
import Upload from "./pages/Upload.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/atlas" element={<Atlas />} />
      </Routes>
    </Router>
  );
}

export default App;
