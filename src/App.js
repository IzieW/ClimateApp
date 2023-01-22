import {useState, useEffect} from 'react'
import axios from 'axios'

import SingleResult from './components/SingleResult'
import SearchBar from './components/SearchBar'

const App = () => {
  const [results, setResults] = useState(null)
  const [facets, setFacets] = useState(null)

  useEffect( () => {
    // eslint-disable-next-line no-undef
    axios.get(process.env.REACT_APP_API)
      .then(res => {
        setResults(res.data.results)
        setFacets(res.data.facets)
      })
  }, [])


  if (results){
    return (
      <div>
        <SearchBar authors={facets.authors}
          publishedYear = {facets.published_year}
          topics = {facets.topics}
        />
        <div>
          {results.map((result, key) => <SingleResult result={result} key={key}/>)}
        </div>
      </div>
    )
  }

}

export default App
