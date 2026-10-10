import { useEffect, useState } from 'react'

const ArrowIcon = () => (
  <svg className="arrow" viewBox="0 0 26 12" aria-hidden="true">
    <path d="M0 6h24M19 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="4" width="19" height="17" rx="3" />
      <path d="M7 2v4M17 2v4M2.5 9h19" />
      <path d="M7 13h1M11.5 13h1M16 13h1M7 17h1M11.5 17h1M16 17h1" />
    </g>
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 30" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
      <path d="M12 28C6 20 3 16 3 11a9 9 0 0 1 18 0c0 5-3 9-9 17Z" />
      <circle cx="12" cy="11" r="3.4" />
    </g>
  </svg>
)

const artists = ['Артист 1', 'Артист 2', 'Артист 3', 'Артист 4']

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const headerClass = ['site-header', isScrolled || isMenuOpen ? 'scrolled' : ''].join(' ').trim()

  return (
    <main className="page">
      <header className={headerClass}>
        <button className="brand" onClick={() => scrollTo('home')}>
          Lucid Dream Show
        </button>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={isMenuOpen ? 'navigation open' : 'navigation'}>
          <button className="active" onClick={() => scrollTo('home')}>Главная</button>
          <button onClick={() => scrollTo('about')}>О событии</button>
          <button onClick={() => scrollTo('artists')}>Артисты</button>
          <button onClick={() => scrollTo('tickets')}>Купить билет</button>
        </nav>
      </header>

      <section className="hero" id="home">
        <h1 className="visually-hidden">Welcome to the Lucid Dream Show</h1>
        <div className="hero-content">
          <button className="pill-button" onClick={() => scrollTo('tickets')}>
            Купить билет <ArrowIcon />
          </button>
          <div className="event-details">
            <span><CalendarIcon />01.01.2000</span>
            <span><PinIcon />г. Такой-то</span>
          </div>
        </div>
      </section>

      <div className="lower">
        <section className="artists" id="artists">
          <h2 className="neon-title">Артисты</h2>
          <div className="artist-grid">
            {artists.map((name) => (
              <article className="artist-card" key={name} aria-label={name} />
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <h2 className="neon-title">О концерте</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the
            librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to
            make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the
            leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these
            sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word
            including versions of Lorem Ipsum.
          </p>
        </section>

        <section className="tickets" id="tickets">
          <div className="ticket-bar">
            <h2 className="neon-title">Купить билет</h2>
            <button className="pill-button">
              Купить билет <ArrowIcon />
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
