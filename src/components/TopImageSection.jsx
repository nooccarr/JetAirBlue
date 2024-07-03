const TopImageSection = ({ title, description }) => (
  <div className="tour-other-image-container">
    <section className="tour-other-image">
      <div className="tour-other-image-caption-container item-start">
        <div>
          <h1 className="tour-other-image-caption-title text-3xl md:text-6xl animate-fadeIn">
            {title}
          </h1>
          {description && (
            <h2 className="tour-other-image-caption-description text-lg md:text-2xl text-center animate-fadeIn">
              {description}
            </h2>
          )}
        </div>
      </div>
    </section>
  </div>
);

export default TopImageSection;
