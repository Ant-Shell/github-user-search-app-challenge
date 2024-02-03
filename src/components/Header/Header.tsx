import Moon from '/src/assets/icon-moon.svg'
// import Sun from '/src/assets/icon-sun.svg'
import '/src/components/Header/Header.scss'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-logo">devfinder</h1>
      <div className='header-toggle-container'>
        <h2 className="header-dark-toggle">DARK</h2>
        <img className='header-moon-image' src={Moon} alt='Moon'/>
      </div>
    </header>
  )
}

export default Header