import Cta from '../Cta/Cta'
import './TextBlock.css'

function TextBlock({ text, ctaLabel, ctaHref }) {
  return (
    <section className="text-block">
      <p className="text-block__text">{text}</p>
      {ctaLabel && <Cta label={ctaLabel} href={ctaHref} />}
    </section>
  )
}

export default TextBlock