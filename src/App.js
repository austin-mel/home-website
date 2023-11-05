import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Row, Col, Container} from 'react-bootstrap';
import Navbar from "./components/Navbar";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import NoPage from "./NoPage";

export default function App() {
    return (
        <div>
            <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
        );
    }
