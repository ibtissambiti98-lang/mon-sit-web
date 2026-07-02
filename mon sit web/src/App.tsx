import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { Portfolio } from './Portfolio';
import { Process, Testimonials } from './Process';
import { Contact, Footer } from './Contact';
import { WhatsAppButton } from './WhatsAppButton';
import { useReveal } from './hooks';

function App() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen bg-sand-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
