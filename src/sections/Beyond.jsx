import SectionReveal from '../components/SectionReveal';
import './Sections.css';
import './Beyond.css';

/**
 * Beyond Research section
 *
 * HOW TO ADD YOUR IMAGES:
 * 1. Place your images in /public/assets/images/  (e.g., violin.jpg, hockey.jpg)
 * 2. Update each entry's `image` field below to the path:
 *    image: '/assets/images/violin.jpg'
 * 3. If you prefer to import images from src/assets/images/, update imports at the top
 *    e.g.: import violinImg from '../assets/images/violin.jpg';
 *    then use: image: violinImg
 */
const entries = [
  {
    id: 'orchestra',
    // ── REPLACE image path with your photo ────────────────────────────────
    image: null,            // e.g. '/assets/images/orchestra.jpg'
    placeholder: '♩',      // shown when no image is set
    title: 'Orchestra',
    description:
      'I perform with the University Symphony Orchestra as a violist. Music has always been a parallel language for me — a way of thinking about structure, tension, and resolution that mirrors theoretical physics in unexpected ways.',
  },
  {
    id: 'violin',
    image: null,            // e.g. '/assets/images/violin.jpg'
    placeholder: '♪',
    title: 'Violin & Viola',
    description:
      'I began studying violin at age six and took up viola in my teens. Chamber music is my favourite form — the conversation between instruments feels like collaborative research.',
  },
  {
    id: 'hockey',
    image: null,            // e.g. '/assets/images/hockey.jpg'
    placeholder: '⬡',
    title: 'Ice Hockey',
    description:
      'I play defense for a recreational league. Hockey taught me how to think spatially under pressure — not so different from tracking trajectories in phase space.',
  },
  {
    id: 'advocacy',
    image: null,            // e.g. '/assets/images/advocacy.jpg'
    placeholder: '◎',
    title: 'Student Advocacy',
    description:
      'As a graduate student representative, I advocate for equitable funding, mental health support, and inclusive policies in academic physics. Science is shaped by who gets to do it.',
  },
  {
    id: 'journey',
    image: null,            // e.g. '/assets/images/journey.jpg'
    placeholder: '✦',
    title: 'Personal Journey',
    description:
      'Growing up between Tehran and Europe, I learned early that curiosity crosses borders. The night sky looked the same everywhere — that constancy pulled me toward cosmology.',
  },
  {
    id: 'dog',
    image: null,            // e.g. '/assets/images/dog.jpg'
    placeholder: '◈',
    title: 'Sirius',
    description:
      'My dog, named after the brightest star in the sky. He keeps me grounded — a reminder that the Universe contains things far more important than publication deadlines.',
  },
];

export default function Beyond() {
  return (
    <section id="beyond" className="section">
      <div className="container">
        <SectionReveal>
          <p className="section__eyebrow">06 — Beyond Research</p>
          <h2 className="section__title">A Wider Field of View</h2>
          <p className="section__lead">
            Science happens inside a life. Here is some of mine.
          </p>
        </SectionReveal>

        <div className="beyond-grid">
          {entries.map((entry, i) => (
            <SectionReveal key={entry.id} delay={i * 70}>
              <div className="beyond-card">
                <div className="beyond-card__image">
                  {entry.image ? (
                    <img
                      src={entry.image}
                      alt={entry.title}
                      loading="lazy"
                    />
                  ) : (
                    <div className="beyond-card__placeholder" aria-hidden="true">
                      <span>{entry.placeholder}</span>
                    </div>
                  )}
                </div>
                <div className="beyond-card__content">
                  <h3 className="beyond-card__title">{entry.title}</h3>
                  <p className="beyond-card__text">{entry.description}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
