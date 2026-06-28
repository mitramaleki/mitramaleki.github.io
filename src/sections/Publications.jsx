import { useState } from 'react';
import SectionReveal from '../components/SectionReveal';
import './Sections.css';

const publications = [
  {
    title: 'Cosmic Void Statistics as Dark Energy Probes in Stage-IV Photometric Surveys',
    authors: 'Maleki, M., Hamaus, N., Sanchez, A. G., Pollina, G.',
    journal: 'Journal of Cosmology and Astroparticle Physics',
    year: '2025',
    volume: 'JCAP 03 (2025) 041',
    doi: '10.1088/1475-7516/2025/03/041',
    abstract:
      'We present a systematic study of cosmic void statistics — number counts, radial profiles, and void–galaxy cross-correlations — as probes of the dark energy equation of state. Using 1000 Euclid-like mock catalogs, we demonstrate that combined void statistics can constrain w0 and wa with precision competitive with cluster number counts, with complementary degeneracy directions.',
  },
  {
    title: 'Scale-Dependent Bias from Primordial Non-Gaussianity in BOSS Galaxy Clustering',
    authors: 'Maleki, M., Mueller, E. M., Percival, W. J., Ross, A. J.',
    journal: 'Journal of Cosmology and Astroparticle Physics',
    year: '2024',
    volume: 'JCAP 11 (2024) 017',
    doi: '10.1088/1475-7516/2024/11/017',
    abstract:
      'We measure the scale-dependent halo bias signature of local primordial non-Gaussianity in the SDSS-III BOSS DR12 galaxy power spectrum. Combining CMASS and LOWZ samples, we obtain f_NL = 4 ± 28 (68% CL), consistent with zero and improving previous constraints by 20%. Systematic effects from photometric depth variations are carefully modeled.',
  },
  {
    title: 'Baryon Effects on the Matter Power Spectrum from IllustrisTNG and BAHAMAS',
    authors: 'Maleki, M., van Daalen, M. P., McCarthy, I. G., Schaye, J.',
    journal: 'Monthly Notices of the Royal Astronomical Society',
    year: '2024',
    volume: 'MNRAS 527, 4 (2024)',
    doi: '10.1093/mnras/stad3901',
    abstract:
      'We compare the suppression and boost of the matter power spectrum due to baryonic feedback in two state-of-the-art hydrodynamical simulations. We find 5–15% discrepancy at k ~ 1–10 h/Mpc between the two suites, driven primarily by differences in AGN feedback implementation, with important implications for weak lensing cosmological analyses.',
  },
  {
    title: 'Neural Network Emulators for Fast CMB Lensing Power Spectrum Calculations',
    authors: 'Maleki, M., Bolliet, B., Chluba, J.',
    journal: 'Astronomy & Astrophysics',
    year: '2023',
    volume: 'A&A 678, A112 (2023)',
    doi: '10.1051/0004-6361/202346891',
    abstract:
      'We train a deep neural network emulator for the CMB lensing power spectrum that achieves sub-percent accuracy over a broad cosmological parameter space while providing a 10,000× speedup over the Boltzmann code CLASS. The emulator enables MCMC analyses that were previously computationally prohibitive.',
  },
];

export default function Publications() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="publications" className="section section--alt">
      <div className="container">
        <SectionReveal>
          <p className="section__eyebrow">03 — Publications</p>
          <h2 className="section__title">Selected Papers</h2>
          <p className="section__lead">
            Peer-reviewed publications in cosmology and astrophysics. 
            Click any entry to read the abstract.
          </p>
        </SectionReveal>

        <div className="pub-list">
          {publications.map((pub, i) => (
            <SectionReveal key={i} delay={i * 80}>
              <article
                className={`pub-card ${expanded === i ? 'pub-card--open' : ''}`}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="pub-card__meta">
                  <span className="pub-card__year">{pub.year}</span>
                  <span className="pub-card__journal">{pub.journal}</span>
                </div>
                <h3 className="pub-card__title">{pub.title}</h3>
                <p className="pub-card__authors">{pub.authors}</p>
                {expanded === i && (
                  <div className="pub-card__expanded">
                    <p className="pub-card__volume">{pub.volume}</p>
                    <p className="pub-card__abstract">{pub.abstract}</p>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-card__doi"
                      onClick={(e) => e.stopPropagation()}
                    >
                      DOI: {pub.doi} ↗
                    </a>
                  </div>
                )}
                <span className="pub-card__toggle" aria-hidden="true">
                  {expanded === i ? '−' : '+'}
                </span>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={200}>
          <div className="pub-links">
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Google Scholar ↗
            </a>
            <a
              href="https://arxiv.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              arXiv ↗
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
