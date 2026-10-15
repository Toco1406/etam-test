import { useEffect, useState } from 'react'
import './Header.css'

function Header({ image, imageMobile }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      {/* Header fourni en image, comme autorisé par les consignes du test */}
      <picture>
        <source media="(min-width: 1024px)" srcSet={image} />
        <img className="header__image" src={imageMobile} alt="" />
      </picture>
    </header>
  )
}

export default Header