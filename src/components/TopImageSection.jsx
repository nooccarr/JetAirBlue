const TopImageSection = ({ title, description }) => (
  <div className='tour-other-image-container'>
    <section className='tour-other-image'>
      <div className='tour-other-image-caption-container item-start'>
        <div>
        <h1 className='tour-other-image-caption-title'>{title}</h1>
        {description && (
          <h2 className='tour-other-image-caption-description'>{description}</h2>
        )}
        </div>
      </div>
    </section>
  </div>
);

export default TopImageSection;