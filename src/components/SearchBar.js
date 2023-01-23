import { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

const Suggestions = ({ data, setFilter }) => (
  <ul id="suggestions">
    {data.map((dat, key) => (
      <li key={key} onClick={() => setFilter(dat.key)}>
        {dat.key}
      </li>
    ))}
  </ul>
)

const SearchBox = ({ data, placeholder }) => {
  const [suggested, setSuggested] = useState(data.slice(0, 5))
  const [filter, setFilter] = useState('')

  const onChange = (value) => {
    if (value) {
      setFilter(value)

      const suggest = data
        .filter((i) =>
          String(i.key).toLowerCase().includes(String(value).toLowerCase())
        )
        .sort((a, b) => a.doc_count > b.doc_count)
        .slice(0, 5)

      setSuggested(suggest)
    } else {
      setFilter(value)
      setSuggested(data.slice(0, 5))
    }
  }

  return (
    <div id="searchBox">
      <h4 style={{ padding: '0px', margin: '2px' }}>{placeholder}:</h4>
      <input
        value={filter}
        onChange={(event) => onChange(event.target.value)}
        placeholder="search"
      />
      <Suggestions data={suggested} setFilter={onChange} />
    </div>
  )
}

const SearchBar = ({ authors, publishedYear, topics }) => {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div>
      <h3>
        {' '}
        Filters
        {showFilters ? (
          <AiOutlineUp
            onClick={() => setShowFilters(false)}
            className="dropDownArrow"
          />
        ) : (
          <AiOutlineDown
            onClick={() => setShowFilters(true)}
            className="dropDownArrow"
          />
        )}
      </h3>
      <div id="searchBar" style={{ display: showFilters ? '' : 'none' }}>
        <SearchBox data={authors} placeholder="Authors" />
        <SearchBox data={topics} placeholder="Topics" />
        <SearchBox data={publishedYear} placeholder="Year" />
      </div>
    </div>
  )
}

export default SearchBar
