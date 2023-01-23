import { useState } from 'react'

const DisplayTopics = ({ topics }) => (
  <div>
    {topics.map((topic, key) => (
      <div className="topic" key={key}>
        {topic}
      </div>
    ))}
  </div>
)

const Topics = ({ topics }) => {
  const [showAll, setShowAll] = useState(false)

  return (
    <div id="topics">
      <DisplayTopics topics={showAll ? topics : topics.slice(0, 3)} />
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'show less' : 'show more'}
      </button>
    </div>
  )
}

export default Topics
