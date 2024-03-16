

// import Test from "./components/Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar"; 
import Sidebar from "./components/sidebar/Sidebar"; // Correct import path and uppercase component name
const App = () => {
  return <div>
    <section id = "Homepage">
      <Navbar/>
      <Hero/>
      </section>
      <section id = "Services">Parallax</section>
      <section>Services</section>
      <section id ="Portfolio">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id = " Contact"> Contact</section>
      <Sidebar /> 
    
     
    </div>
  
};

export default App;
