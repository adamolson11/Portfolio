

// import Test from "./components/Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar"; 
import Sidebar from "./components/sidebar/Sidebar"; // Correct import path and uppercase component name
import Parallax from "./components/parallax/Parallax"; 
import Services from "./components/services/Services"; 
import Portfolio from "./components/portfolio/Portflio";

const App = () => {
  return <div>
    <section id = "Homepage">
      <Navbar/>
      <Hero/>
      </section>
      <section id = "Services"><Parallax type = "services" /> </section>
      <section><Services/></section>
      <section id ="Portfolio"><Parallax type="portfolio"/>
      </section>
    <Portfolio/>
      <section id = " Contact"> Contact</section>
      <Sidebar /> 
    
     
    </div>
  
};

export default App;
