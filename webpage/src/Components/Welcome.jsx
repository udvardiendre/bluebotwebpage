import React from 'react'
import { Link } from 'react-router-dom'
import design1 from '../Media/design1.png'

const Welcome = () => {
  return (
    <div id="welcomeMain">
      <div id="welcomeText">
        <h2>Automatizálja üzleti folyamatait velünk!</h2>
        <button><Link to="/contactUs">Kapcsolatfelvétel</Link></button>
      </div>
      <div id="welcomeImg">
        <img src={design1} alt="infograph" />
      </div>
    </div>
  )
}

export default Welcome