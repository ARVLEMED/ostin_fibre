
import Header from './Components/Header';
import Hero from './Components/Hero';
import InternetPackages from './Components/InternetPackages';
import PaymentSection from './Components/PaymentSection';
import Contact from './Components/ContactSection';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <InternetPackages />
      <PaymentSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;