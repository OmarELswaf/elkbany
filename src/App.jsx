import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentList from './components/ContentList';
import About from './components/About';
import Supplies from './components/Supplies';
import Waterproofing from './components/Waterproofing';
import Polyurea from './components/Polyurea';
import Bitumen from './components/Bitumen';
import ThermalInsulationXbS from './components/ThermalInsulationXbS';
import FoamInsulation from './components/FoamInsulation';
import LightweightConcrete from './components/LightweightConcrete';
import Polyurethane from './components/Polyurethane';
import ChemicalInsulation from './components/ChemicalInsulation';
import Epoxy from './components/Epoxy';
import ProjectsShowcase from './components/ProjectsShowcase';
import ClientsReferences from './components/ClientsReferences';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <ContentList />
        <About />
        <Supplies />
        <Waterproofing />
        <Polyurea />
        <Bitumen />
        <ThermalInsulationXbS />
        <FoamInsulation />
        <LightweightConcrete />
        <Polyurethane />
        <ChemicalInsulation />
        <Epoxy />
        <ProjectsShowcase />
        <ClientsReferences />
        <Contact />
      </main>
    </div>
  );
}

export default App;
