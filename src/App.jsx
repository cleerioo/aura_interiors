import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/Navbar';
import HeroRevamped from './components/HeroRevamped';
import ImageReveal from './components/ImageReveal';
import HorizontalGallery from './components/HorizontalGallery';
import ServicesEnhanced from './components/ServicesEnhanced';
import ProjectShowcase from './components/ProjectShowcase';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />

      <main className="bg-luxury-black text-white selection:bg-luxury-gold selection:text-black">
        <Navbar />
        <HeroRevamped />
        <ImageReveal />
        <HorizontalGallery />
        <ServicesEnhanced />
        <ProjectShowcase />
        <Testimonials />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
