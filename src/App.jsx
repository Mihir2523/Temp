import Header from "./components/header.jsx"
import Services from "./components/services.jsx"
import About from "./components/about.jsx"
import Contact from "./components/contact.jsx"
import Form from "./components/form.jsx"
import Main from "./components/home.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route index element={<Main />} />
          <Route path="/enquiry" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}