
import Header from './Components/Header';
import Hero from './Components/Hero';
import InternetPackages from './Components/InternetPackages';
import PaymentSection from './Components/PaymentSection';
import Contact from './Components/ContactSection';
import Footer from './Components/Footer';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './Components/SEO';
const App = () => {
  // Example advertisement data - set to null to hide ads
  const leftAdvertisement = null;

const rightAdvertisement = null;

  // To hide ads, simply set to null or undefined:
  // const leftAdvertisement = null;
  // const rightAdvertisement = null;

    return (
    <HelmetProvider>
      <div className="App">
        <SEO />
        <Header />
        <Hero />
        <InternetPackages />
        <PaymentSection 
          leftAd={leftAdvertisement} 
          rightAd={rightAdvertisement} 
        />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

//artefact for future adds
/**const leftAdvertisement = {
  image: '/ad-left.jpg',
  title: 'Special Offer',
  description: 'Get 20% off on annual subscriptions!',
  link: `https://wa.me/254717447792?text=${encodeURIComponent(
    `Hello, I would like to learn more about the Special Offer.`
  )}`,
}; */
export default App;