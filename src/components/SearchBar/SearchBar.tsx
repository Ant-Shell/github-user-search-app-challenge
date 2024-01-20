import '/src/components/SearchBar/SearchBar.scss'
import searchIcon from '/src/assets/icon-search.svg'

const SearchBar = () => {
  return (
    <section className='searchbar'>
      <img className='searchbar-search-icon' src={searchIcon}/>
      <input type='search'
      className='searchbar-search'
      placeholder='Search GitHub username...'
      >

      </input>
      <button>Search</button>
    </section>
  )
}

export default SearchBar