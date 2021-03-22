import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TweetForm from '../components/TweetForm'
import TweetList from '../components/TweetList'

const TweetsContainer = () => {
  const [tweets, setTweets] = useState([]);
  const renderForm = () => {
    return document.querySelector("#root")
  }

  useEffect(() => {
    axios
      .get('/tweets')
      .then(({ data }) => {
        setTweets(data.tweets)
      })
  }, [tweets.length])

  return (
    <>
      { renderForm() && <TweetForm onCreate={setTweets} tweets={tweets}/> }
      <TweetList tweets={tweets} />
    </>
  )
};


export default TweetsContainer
