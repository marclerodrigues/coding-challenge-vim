import React from 'react'
import ReactDOM from 'react-dom'
import Tweet from './Tweet'

const TweetList = ({ tweets }) => {
  return (
    <>
      {
        tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))
      }
    </>
  )
}

export default TweetList
