import Navbar from './components/Navbar';
import Experience from './section/Experience';
import FeaturedCards from './section/FeaturedCards';
import Hero from './section/Hero';
// import LogoSection from './section/LogoSection';
import Showcase from './section/Showcase';
import TechStack from './section/TechStack';

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
    </>
  );
};

export default App;
