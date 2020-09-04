import React from 'react'
import { connect } from 'react-redux'

class ResultWindow extends React.Component{

  render(){
    return (
      <div className="result_window">
        <div className="result">
          {this.props.digit1 && !this.props.digit2 && <span>{this.props.digit1}</span>}
          {!this.props.digit1 && this.props.digit2 && <span>{this.props.digit2}</span>}
          {this.props.digit1 === "" && this.props.digit2 === "" && this.props.result && <span>{this.props.result}</span>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { digit1, digit2, result } = state.calc;
  return {
    digit1, digit2, result
  }
}

export default connect(mapStateToProps, null)(ResultWindow);
