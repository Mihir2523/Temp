import Header from "./components/header.jsx"
import Services from "./components/services.jsx"
import ServicePage from "./components/servicepage.jsx"
import About from "./components/about.jsx"
import Contact from "./components/contact.jsx"
import Form from "./components/form.jsx"
import Main from "./components/home.jsx"
import Gallery from "./components/gallery.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route index element={<Main />} />
          <Route path="/enquiry" element={<Form />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}