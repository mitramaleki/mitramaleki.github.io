import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow">Astrophysicist · Researcher</p>
        <h1 className="hero__name">Mitra Maleki</h1>
        <p className="hero__tagline">
          Astrophysics &nbsp;·&nbsp; Cosmology &nbsp;·&nbsp; Computational Physics
        </p>
        <p className="hero__intro">
          I study the large-scale structure of the Universe — from the earliest 
          fluctuations in the primordial plasma to the cosmic web that binds 
          galaxies across billions of light-years. My work sits at the intersection 
          of theory, simulation, and observation.
        </p>
        <div className="hero__cta">
          <a href="#research" className="btn btn--outline">Explore Research</a>
          <a href="#contact" className="btn btn--ghost">Get in Touch</a>
        </div>
      </div>
      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-label">scroll</span>
      </div>
    </section>
  );
}
