import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Frontend from "./components/languages/Frontend.jsx";
import Backend from "./components/languages/Backend.jsx";
import Chatai from "./Chatbot.jsx";
import Addecards from "./Addecards.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.Theme.theme || 'dark');
  useEffect(() => {
    document.body.className= theme === 'dark' ? 'dark-mode' : 'light-mode';
  }, [theme])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='frontend'  element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
          <Route path="chatai" element={<Chatai/>}/>
          <Route path="addedcards" element={<Addecards/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
