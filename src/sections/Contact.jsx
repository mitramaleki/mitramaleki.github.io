import SectionReveal from '../components/SectionReveal';
import './Sections.css';
import './Contact.css';

const links = [
  {
    label: 'Email',
    value: 'm.maleki@astro.uni.edu',          // ← Replace with your email
    href: 'mailto:m.maleki@astro.uni.edu',
    icon: '✉',
  },
  {
    label: 'GitHub',
    value: 'mitramaleki',
    href: 'https://github.com/mitramaleki',
    icon: '⌥',
  },
  {
    label: 'LinkedIn',
    value: 'Mitra Maleki',
    href: 'https://www.linkedin.com/in/mitramaleki', // ← Replace with your URL
    icon: '⊞',
  },
  {
    label: 'Google Scholar',
    value: 'Mitra Maleki',
    href: 'https://scholar.google.com',              // ← Replace with your profile URL
    icon: '◉',
  },
  {
    label: 'ORCID',
    value: '0000-0000-0000-0000',                    // ← Replace with your ORCID
    href: 'https://orcid.org/0000-0000-0000-0000',
    icon: '◈',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section section--alt contact">
      <div className="container container--narrow">
        <SectionReveal>
          <p className="section__eyebrow">07 — Contact</p>
          <h2 className="section__title">Get in Touch</h2>
          <p className="section__lead">
            I'm always glad to hear from fellow researchers, students, or anyone 
            curious about cosmology. Feel free to reach out about collaborations, 
            talks, or just to talk about the Universe.
          </p>
        </SectionReveal>

        <SectionReveal delay={100}>
          <ul className="contact-list">
            {links.map((link) => (
              <li key={link.label} className="contact-item">
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-link__icon" aria-hidden="true">{link.icon}</span>
                  <span className="contact-link__label">{link.label}</span>
                  <span className="contact-link__value">{link.value}</span>
                  <span className="contact-link__arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal delay={180}>
          <div className="contact-cv">
            {/* Replace '/assets/cv/mitra-maleki-cv.pdf' with the path to your CV */}
            <a
              href="/assets/cv/mitra-maleki-cv.pdf"
              download
              className="btn btn--outline"
            >
              Download CV (PDF)
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={240}>
          <footer className="site-footer">
            <p>© {new Date().getFullYear()} Mitra Maleki · Built with curiosity</p>
            <p className="footer-sub">
              The background contains {' '}
              <span style={{ color: 'var(--color-nebula)' }}>1,000 stars</span>
              {' '}— fewer than the Milky Way by a factor of 10<sup>11</sup>.
            </p>
          </footer>
        </SectionReveal>
      </div>
    </section>
  );
}
