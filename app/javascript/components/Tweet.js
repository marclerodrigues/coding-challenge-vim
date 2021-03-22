import React from 'react'
import ReactDOM from 'react-dom'

const Tweet = ({ id, body, username }) => {
  return (
    <div>
      {username}: {body}
    </div>
  )
}

export default Tweet
