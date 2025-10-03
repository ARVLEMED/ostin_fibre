
import Header from './Components/Header';
import Hero from './Components/Hero';
import InternetPackages from './Components/InternetPackages';
import PaymentSection from './Components/PaymentSection';
import Contact from './Components/ContactSection';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  // Example advertisement data - set to null to hide ads
  const leftAdvertisement = {
  image: '/ad-left.jpg',
  title: 'Special Offer',
  description: 'Get 20% off on annual subscriptions!',
  link: `https://wa.me/254717447792?text=${encodeURIComponent(
    `Hello, I would like to learn more about the Special Offer.`
  )}`,
};

const rightAdvertisement = {
  image: '/ad-right.jpg',
  title: 'Upgrade Today',
  description: 'Switch to our premium plan for better speeds.',
  link: `https://wa.me/254717447792?text=${encodeURIComponent(
    `Hello, I would like to learn more about the Upgrade Today.`
  )}`,
};

  // To hide ads, simply set to null or undefined:
  // const leftAdvertisement = null;
  // const rightAdvertisement = null;

  return (
    <div className="App">
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
  );
};

export default App;