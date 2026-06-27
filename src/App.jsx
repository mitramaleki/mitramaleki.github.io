import React, { useState } from 'react';
import './App.css';
import MainScene from './scenes/MainScene';
// Import object components
import Telescope from './objects/Telescope';
import StarsConstellation from './objects/StarsConstellation';
import Notebook from './objects/Notebook';
import Laptop from './objects/Laptop';
import Satchel from './objects/Satchel';
import './objects/FloatingLetters';
import ViolinCase from './objects/ViolinCase';
import HockeyStick from './objects/HockeyStick';
import Flowers from './objects/Flowers';
import Dog from './objects/Dog';
import Lantern from './objects/Lantern';
import Girl from './objects/Girl';

function App() {
  const [selected, setSelected] = useState(null);

  // Object data for when clicked
  const objectData = {
    telescope: {
      title: 'Research',
      content: 'My research focuses on cosmology and dark matter simulations. I have collaborated with international teams on projects ranging from observational astrophysics to theoretical modeling.'
    },
    stars: {
      title: 'Publications',
      content: 'My publications cover topics such as early universe formation, dark matter halos, and gravitational lensing. Each star represents a paper, and constellations represent related works.'
    },
    notebook: {
      title: 'Notes & Derivations',
      content: 'Handwritten notes from lectures, derivations of key equations in cosmology, and sketches of ideas for future research.'
    },
    laptop: {
      title: 'Coding & Projects',
      content: 'I develop simulations and analysis tools using Python, C++, and JavaScript. My projects include N-body simulations, machine learning for data analysis, and web visualization tools.'
    },
    satchel: {
      title: 'Resume',
      content: 'My academic and professional experience, including education, research positions, teaching experience, and technical skills.'
    },
    letters: {
      title: 'Advocacy Work',
      content: 'I am involved in student outreach programs, public science lectures, and initiatives to promote diversity in STEM fields.'
    },
    violin: {
      title: 'Music',
      content: 'I have played violin for 15 years, performing in orchestras and chamber ensembles. Music provides a creative balance to my scientific work.'
    },
    hockey: {
      title: 'Sports',
      content: 'I played competitive ice hockey for 10 years, which taught me teamwork, discipline, and resilience.'
    },
    flowers: {
      title: 'Interests',
      content: 'My scientific interests include the early universe, cosmic microwave background, dark matter, and large-scale structure simulations.'
    },
    dog: {
      title: 'Personal',
      content: 'My pug, Nova, has been my loyal companion through graduate school. She reminds me to take breaks and enjoy the simple things.'
    },
    lantern: {
      title: 'Contact',
      content: 'Email: example@email.com<br>GitHub: github.com/username<br>LinkedIn: linkedin.com/in/username<br>ORCID: orcid.org/0000-0000-0000-0000<br><a href="cv.pdf" download>Download CV</a>'
    }
  };

  // Handler for when an object is clicked
  const handleObjectClick = (key) => {
    setSelected(objectData[key]);
  };

  return (
    <>
      <main>
        {/* The 3D scene */}
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
          <MainScene onObjectClick={handleObjectClick} />

          /* We'll need to modify MainScene to accept and use onObjectClick */
        </div>
      </main>

      {/* Overlay panel */}
      {selected && (
        <div className="overlay" onClick={() => setSelected(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <h2>{selected.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: selected.content }} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;