

// import Test from "./components/Test";
import "./app.scss";
import Navbar from "./components/navbar/Navbar"; 
import Sidebar from "./components/sidebar/Sidebar"; // Correct import path and uppercase component name
const App = () => {
  return <div>
      <section>
      
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <Sidebar /> 
    
     
    </div>
  
};

export default App;
