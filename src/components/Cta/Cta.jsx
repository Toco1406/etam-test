import './Cta.css'

function Cta({ label, href, onClick }) {
  if (href) {
    return (
      <a className="cta" href={href}>
        {label}
      </a>
    )
  }

  return (
    <button className="cta" type="button" onClick={onClick}>
      {label}
    </button>
  )
}

export default Cta