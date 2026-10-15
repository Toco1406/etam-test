import './Hero.css'

function Hero({ titleImages, image, imageAlt }) {
  return (
    <section className="hero">
      <img className="hero__image" src={image} alt={imageAlt} />

      <h1 className="hero__title">
        {titleImages.map((title) => (
          <img
            key={title.src}
            className="hero__title-line"
            src={title.src}
            alt={title.alt}
          />
        ))}
      </h1>
    </section>
  )
}

export default Hero