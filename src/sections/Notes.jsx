import SectionReveal from '../components/SectionReveal';
import './Sections.css';

const notes = [
  {
    title: 'Perturbation Theory in Large-Scale Structure',
    type: 'Lecture Notes',
    pages: '48 pp.',
    description:
      'Comprehensive notes on standard perturbation theory, Eulerian and Lagrangian frameworks, loop corrections, and connections to observed galaxy power spectra.',
    tags: ['Cosmology', 'SPT', 'Lagrangian PT'],
    file: '/assets/notes/perturbation-theory-lss.pdf', // Replace with your PDF path
  },
  {
    title: 'CMB Anisotropy Derivations',
    type: 'Handwritten Notes',
    pages: '32 pp.',
    description:
      'Detailed derivations of the Boltzmann hierarchy for photons and baryons, Sachs-Wolfe effect, and tight-coupling approximation from first principles.',
    tags: ['CMB', 'Boltzmann', 'Tight Coupling'],
    file: '/assets/notes/cmb-derivations.pdf', // Replace with your PDF path
  },
  {
    title: 'Statistical Methods in Cosmology',
    type: 'Tutorial Notes',
    pages: '56 pp.',
    description:
      'A practical guide to Bayesian inference, MCMC sampling, Fisher forecasting, and covariance matrix estimation for cosmological survey analysis.',
    tags: ['Statistics', 'MCMC', 'Bayesian'],
    file: '/assets/notes/stats-cosmo.pdf', // Replace with your PDF path
  },
  {
    title: 'Void Physics & Dynamics',
    type: 'Review Notes',
    pages: '24 pp.',
    description:
      'Notes on cosmic void formation, excursion set theory for voids, the void-in-void problem, and the linear void velocity profile model.',
    tags: ['Voids', 'Excursion Set', 'Dynamics'],
    file: '/assets/notes/void-physics.pdf', // Replace with your PDF path
  },
];

export default function Notes() {
  return (
    <section id="notes" className="section section--alt">
      <div className="container">
        <SectionReveal>
          <p className="section__eyebrow">05 — Notes &amp; Derivations</p>
          <h2 className="section__title">Written Knowledge</h2>
          <p className="section__lead">
            Lecture notes, worked derivations, and study materials I've compiled 
            over the years. Shared freely for other researchers and students.
          </p>
        </SectionReveal>

        <div className="card-grid card-grid--2col">
          {notes.map((note, i) => (
            <SectionReveal key={i} delay={i * 80}>
              <a
                href={note.file}
                target="_blank"
                rel="noopener noreferrer"
                className="card card--note"
              >
                <div className="note-card__icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <div className="card__header">
                  <h3 className="card__title">{note.title}</h3>
                </div>
                <p className="note-meta">{note.type} · {note.pages}</p>
                <p className="card__body">{note.description}</p>
                <div className="tech-tags">
                  {note.tags.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <span className="card__link">Download PDF ↓</span>
              </a>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
