import React from 'react'
import ReactDOM from 'react-dom'
import TweetsContainer from '../containers/TweetsContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TweetsContainer />,
    document.body.appendChild(document.createElement('div')),
  )
})
