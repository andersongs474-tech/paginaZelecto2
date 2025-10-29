// app/page.tsx
//import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
//import EcosystemSteps from './components/EcosystemSteps';
import Services from './components/Services';
import Results from './components/Results';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import EcosystemSteps from './components/EcosystemSteps';


export default function HomePage() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <TrustedBy />
      <EcosystemSteps />
      <Services />
      <Results />
      <Team />
      <ContactForm />
      {/* Puedes agregar un Footer aquí si lo necesitas */}
    </main>
  );
}