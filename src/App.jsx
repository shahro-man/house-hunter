import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import "./App.css";
import Compoies from "./components/compaines/Compoies.jsx";
import Residencies from "./components/residencies/Residencies.jsx";
import Value from "./components/value/Value.jsx";
import Contact from "./components/contact/Contact.jsx";
import GetStarted from "./components/getStarted/GetStarted.jsx";
import Footer from "./components/footer/Footer.jsx";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Compoies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
