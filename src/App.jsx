import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Faqs from "./components/Faqs";
import Hero from "./components/Hero";
import HowWeDo from "./components/HowWeDo";
import MobileSlider from "./components/MobileSlider";
import SecondContactForm from "./components/SecondContactForm";
import SecondSection from "./components/SecondSection";
import Testimonials from "./components/Testimonials";
import ThirdContactForm from "./components/ThirdContactForm";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SecondSection />
      <MobileSlider />
      <ContactForm />
      <AboutUs />
      <Testimonials />
      <HowWeDo />
      <SecondContactForm />
      <Faqs />
      <ThirdContactForm />
      <Footer />
    </>
  );
}

export default App;
