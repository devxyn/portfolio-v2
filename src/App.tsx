import Navbar from './components/Navbar';
import Contact from './section/Contact';
import Experience from './section/Experience';
import FeaturedCards from './section/FeaturedCards';
import Footer from './section/Footer';
import Hero from './section/Hero';
// import LogoSection from './section/LogoSection';
import Showcase from './section/Showcase';
import TechStack from './section/TechStack';
import Testimonials from './section/Testimonials';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      {/* <LogoSection /> */}
      <FeaturedCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
