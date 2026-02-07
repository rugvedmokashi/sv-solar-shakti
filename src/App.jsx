import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact'; // 1. Import Contact

function App() {
  return (
    <div className="relative font-sans text-slate-900">
      <Navbar />
      <Hero />
      <About /> 
      <Services />

      {/* 2. Replaced the placeholder footer with the Contact component */}
      <Contact />
    </div>
  );
}

export default App;