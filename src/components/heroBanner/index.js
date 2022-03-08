import heroBanner from "./hero-banner.jpg";
import heroBannerSm from "./hero-banner-sm.jpg";
import "./HeroBanner.scss";

const HeroBanner = () => {
  return (
    <div className="app-hero">
      <picture>
        <source media="(max-width: 370px)" srcSet={heroBannerSm} />
        <source media="(min-width: 371px)" srcSet={heroBanner} />
        <img src={heroBanner} alt="Hero Banner" />
      </picture>
      <div className="app-caption">
        <h1>Creative motion projects</h1>
        <p>Discover client work to pitch on.</p>
      </div>
    </div>
  );
};

export default HeroBanner;
