import './EditorialBlock.css'

function EditorialBlock({ eventInfo, image, imageAlt, manifesto, caption }) {
  return (
    <section className="editorial">
      <div className="editorial__grid">
        <p className="editorial__info">{eventInfo}</p>
        <img
          className="editorial__image"
          src={image}
          alt={imageAlt}
          loading="lazy"
        />
        <p className="editorial__manifesto">{manifesto}</p>
      </div>

      <p className="editorial__caption">{caption}</p>
    </section>
  )
}

export default EditorialBlock