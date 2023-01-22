import Topics from './Topics'
import helper from '../utils/helper'

const SingleResult = ({ result }) => {
  return (
    <div className="singleResult">
      <img src={result.thumbnail} style={{float: 'left'}}/>
	  <div>
	  	<h2 id="title">{result.title}</h2>
	  	<div id="authors" style={{whiteSpace: 'nowrap', fontWeight: 'normal'}}>
          {result.authors.map((author, key) => <li key={key}>{author}</li>)}
        </div>
        <div>{helper.formatDate(result.published_on)}</div>
        <div className="secondaryText">{result.snippet}</div>
        {result.topics.length
          ?<Topics topics={result.topics} />
          :null}
		  </div>
    </div>
  )
}

export default SingleResult
