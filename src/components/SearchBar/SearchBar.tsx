import { useState } from "react";
import '/src/components/SearchBar/SearchBar.scss'
import searchIcon from '/src/assets/icon-search.svg'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <section className='searchbar'>
      <form className='searchbar-form'>
        <img className='searchbar-search-icon' src={searchIcon}/>
        <input
          type='search'
          name='search'
          className='searchbar-search'
          placeholder='Search GitHub username...'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className='searchbar-submit-button' type='submit'>
          Search
        </button>
      </form>
    </section>
  )
}

export default SearchBar