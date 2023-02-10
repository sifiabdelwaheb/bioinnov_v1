import "./assets/css/style.css";
import "./assets/css/style-c0b3ba8736f66.css";
import "./assets/css/all.min.css";
import "./animate.min.css";
import Home from "./Home";
import Header from "./Navbar/Header";
import About from "./About";
import Services from "./Service";
import ServiceArea from "./ServiceArea";
import Ourteam from "./Ourteam";
import Blogs from "./Blogs";
import Contacts from "./Contacts";
import CaseStudies from "./CaseStudies";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Home />
        <About />
        <Services />
        <CaseStudies />
        <ServiceArea />
        <Ourteam />

        <Contacts />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
