import StarCanvas from './components/StarCanvas';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Research from './sections/Research';
import Publications from './sections/Publications';
import Projects from './sections/Projects';
import Notes from './sections/Notes';
import Beyond from './sections/Beyond';
import Contact from './sections/Contact';
import './App.css';

export default function App() {
  return (
    <>
      <StarCanvas />
      <Nav />
      <main>
        <Hero />
        <Research />
        <Publications />
        <Projects />
        <Notes />
        <Beyond />
        <Contact />
      </main>
    </>
  );
}
