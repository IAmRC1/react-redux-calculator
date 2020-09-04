import React from 'react'
import { ResultWindow, UserActions, } from '../components'

class HomePage extends React.Component {

  render() {
    return (
      <div className="container main_wrapper">
        <h3 className="title">calculator</h3>
        <div className="calculator_wrapper">
          <ResultWindow />
          <UserActions />
        </div>
      </div>
    )
  }
}

export default HomePage
