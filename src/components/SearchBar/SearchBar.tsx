import { useState } from "react";
import '/src/components/SearchBar/SearchBar.scss'
import searchIcon from '/src/assets/icon-search.svg'


interface SearchBarProps {
  getUser: (username:string) => void
}

const SearchBar = (props: SearchBarProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('')

  const submitAction = (value:string) => {
    const { getUser } = props
    getUser(value)
  }

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