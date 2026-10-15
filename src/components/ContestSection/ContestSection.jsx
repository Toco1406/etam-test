import Cta from '../Cta/Cta'
import './ContestSection.css'

function ContestSection({ title, text, highlight, ctaLabel, onCtaClick }) {
  return (
    <section className="contest">
      <h2 className="contest__title">{title}</h2>
      <p className="contest__text">{text}</p>
      <p className="contest__highlight">{highlight}</p>
      <Cta label={ctaLabel} onClick={onCtaClick} />
    </section>
  )
}

export default ContestSection