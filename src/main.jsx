import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import App from './App.jsx'
import './index.css'

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "power3.out" });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
