import './ImageDuo.css'

function ImageDuo({ items, credits }) {
  return (
    <section className="image-duo">
      {items.map((item, index) => (
        <figure
          key={index}
          className={`image-duo__item ${item.desktopOnly ? 'image-duo__item--desktop-only' : ''}`}
        >
          {item.video ? (
            <video
              className="image-duo__media"
              src={item.video}
              poster={item.poster}
              aria-label={item.imageAlt}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              className="image-duo__media"
              src={item.image}
              alt={item.imageAlt}
              loading="lazy"
            />
          )}

          {item.caption && (
            <figcaption className="image-duo__caption">{item.caption}</figcaption>
          )}
        </figure>
      ))}

      {credits && (
        <div className="image-duo__credits">
          {credits.map((credit) => (
            <p key={credit} className="image-duo__credit">
              {credit}
            </p>
          ))}
        </div>
      )}
    </section>
  )
}

export default ImageDuo