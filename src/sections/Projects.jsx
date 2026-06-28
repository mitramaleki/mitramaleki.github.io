import SectionReveal from '../components/SectionReveal';
import './Sections.css';

const projects = [
  {
    title: 'CosmoPower-Void',
    description:
      'A Python library for fast emulation of void statistics in galaxy surveys. Trained on 5000 FLASK simulations, it delivers sub-percent accuracy on void number counts and profiles across a 7-dimensional cosmological parameter space.',
    tech: ['Python', 'PyTorch', 'NumPy', 'FLASK', 'Jupyter'],
    github: 'https://github.com/mitramaleki/cosmopower-void',
    demo: null,
    status: 'Active',
  },
  {
    title: 'BaryonFlow',
    description:
      'Analysis pipeline for quantifying baryon feedback effects in hydrodynamical simulations. Compares matter power spectrum suppression across IllustrisTNG, BAHAMAS, and EAGLE with a unified API.',
    tech: ['Python', 'h5py', 'nbodykit', 'matplotlib', 'Slurm'],
    github: 'https://github.com/mitramaleki/baryonflow',
    demo: null,
    status: 'Active',
  },
  {
    title: 'CMBLensNet',
    description:
      'Deep neural network emulator for CMB lensing power spectra. Achieves 0.3% accuracy over the Planck 2018 parameter space with a 10,000× speedup over CLASS — enabling fast MCMC inference for lensing analyses.',
    tech: ['Python', 'TensorFlow', 'CLASS', 'GetDist', 'CosmoSIS'],
    github: 'https://github.com/mitramaleki/cmblensnet',
    demo: 'https://mitramaleki.github.io/cmblensnet-demo',
    status: 'Complete',
  },
  {
    title: 'VoidFinder-Euclid',
    description:
      'Void-finding algorithm optimized for photometric survey geometry, incorporating photo-z uncertainties and survey mask effects. Designed for the Euclid Wide Survey DR1 analysis.',
    tech: ['Python', 'ZOBOV', 'HEALPix', 'scipy', 'mpi4py'],
    github: 'https://github.com/mitramaleki/voidfinder-euclid',
    demo: null,
    status: 'Active',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionReveal>
          <p className="section__eyebrow">04 — Code &amp; Projects</p>
          <h2 className="section__title">Open Source &amp; Tools</h2>
          <p className="section__lead">
            Scientific software I've developed for cosmological analysis. 
            All code is open source and documented for reproducibility.
          </p>
        </SectionReveal>

        <div className="card-grid card-grid--2col">
          {projects.map((proj, i) => (
            <SectionReveal key={i} delay={i * 80}>
              <div className="card card--project">
                <div className="card__header">
                  <h3 className="card__title">{proj.title}</h3>
                  <span className={`tag tag--${proj.status === 'Active' ? 'active' : 'done'}`}>
                    {proj.status}
                  </span>
                </div>
                <p className="card__body">{proj.description}</p>
                <div className="tech-tags">
                  {proj.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="card__links">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card__link"
                  >
                    GitHub ↗
                  </a>
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card__link"
                    >
                      Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
