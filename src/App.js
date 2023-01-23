import { useState, useEffect } from 'react'
import axios from 'axios'
import config from './utils/config'

import SingleResult from './components/SingleResult'
import SearchBar from './components/SearchBar'

const App = () => {
  const [results, setResults] = useState(null)
  const [facets, setFacets] = useState(null)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    axios.get(`${config.url}${config.APIKey}`)
      .then((res) => {
        setResults(res.data.results)
        setFacets(res.data.facets)
      })
      .catch(error => console.log(error))
  }, [])

  if (results) {
    return (
      <div>
        <section className="container" id="heading">
          <h1>Policy Explorer</h1>
          <SearchBar
            authors={facets.authors}
            publishedYear={facets.published_year}
            topics={facets.topics}
          />
        </section>
        <div>
          {results.map((result, key) => (
            <SingleResult result={result} key={key} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
