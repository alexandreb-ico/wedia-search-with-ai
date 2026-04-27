import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import MediaTransferInterface from "./components/MediaTransferInterface";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workspace" element={<MediaTransferInterface />} />
      </Routes>
    </BrowserRouter>
  );
}
