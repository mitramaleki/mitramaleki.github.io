import SectionReveal from '../components/SectionReveal';
import './Sections.css';

const interests = [
  'Large-scale structure of the Universe',
  'Cosmic microwave background physics',
  'Dark matter & dark energy models',
  'N-body & hydrodynamical simulations',
  'Statistical methods in cosmology',
  'Machine learning for astrophysics',
];

const projects = [
  {
    title: 'Void Statistics in Weak Lensing Surveys',
    status: 'Ongoing',
    description:
      'Investigating the constraining power of cosmic void statistics on dark energy equation of state parameters using KiDS and Euclid weak lensing data. Developing novel void-finding algorithms tailored to photometric surveys with shape noise.',
  },
  {
    title: 'Baryon Feedback in Galaxy Clusters',
    status: 'Ongoing',
    description:
      'Studying how AGN and supernova feedback processes redistribute baryons in cluster environments and their effect on the matter power spectrum at small scales — critical for next-generation CMB lensing analyses.',
  },
  {
    title: 'Primordial Non-Gaussianity Constraints',
    status: 'Completed',
    description:
      'Derived new constraints on local-type primordial non-Gaussianity (f_NL) from the scale-dependent halo bias observed in SDSS-III BOSS galaxy clustering data. Published in JCAP 2024.',
  },
];

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <SectionReveal>
          <p className="section__eyebrow">02 — Research</p>
          <h2 className="section__title">Understanding the Cosmos</h2>
          <p className="section__lead">
            My research explores how the Universe evolved from the quantum fluctuations 
            of inflation into the rich tapestry of galaxies, filaments, and voids we 
            observe today. I combine analytical methods, numerical simulations, and 
            statistical inference to decode the large-scale structure of spacetime.
          </p>
        </SectionReveal>

        <SectionReveal delay={100}>
          <h3 className="subsection__title">Current Projects</h3>
          <div className="card-grid card-grid--list">
            {projects.map((p, i) => (
              <div key={i} className="card">
                <div className="card__header">
                  <h4 className="card__title">{p.title}</h4>
                  <span className={`tag tag--${p.status === 'Ongoing' ? 'active' : 'done'}`}>
                    {p.status}
                  </span>
                </div>
                <p className="card__body">{p.description}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={150}>
          <h3 className="subsection__title">Research Interests</h3>
          <ul className="interest-list">
            {interests.map((item, i) => (
              <li key={i} className="interest-list__item">
                <span className="interest-list__dot" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
