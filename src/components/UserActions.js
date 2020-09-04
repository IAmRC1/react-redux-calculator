import React from 'react'
import { connect } from 'react-redux'
import { digitPressed, operationPressed, evaluationPressed } from '../actions/calc.action'
import { ActionButton } from '../container/ActionButton'

class UserActions extends React.Component {

  _number = (val) => {
    this.props.digit_pressed(val)  
  }

  _operation = (operator) => {
    if(operator === "evaluate"){
      return this.props.evaluation_pressed(this.props.operator)
    }
    this.props.operation_pressed(operator);
  }

  render() {
    return (
      <div className="user_actions">
        <div className="calc_row one">
          <ActionButton operation={() => this._operation("clear")} value={"AC"} />
          <ActionButton operation={() => this._operation("plus-minus")} value={<>&#43;/&#8722;</>} />
          <ActionButton operation={() => this._operation("percent")} value={<>&#37;</>} />
          <ActionButton operation={() => this._operation("divide")} value={<>&#247;</>} />
        </div>
        <div className="calc_row two">
          <ActionButton number={() => this._number(7)} value={7} />
          <ActionButton number={() => this._number(8)} value={8} />
          <ActionButton number={() => this._number(9)} value={9} />
          <ActionButton operation={() => this._operation("multiply")} value={<>&#215;</>} />
        </div>
        <div className="calc_row three">
          <ActionButton number={() => this._number(4)} value={4} />
          <ActionButton number={() => this._number(5)} value={5} />
          <ActionButton number={() => this._number(6)} value={6} />
          <ActionButton operation={() => this._operation("minus")} value={<>&#8722;</>} />
        </div>
        <div className="calc_row four">
          <ActionButton number={() => this._number(1)} value={1} />
          <ActionButton number={() => this._number(2)} value={2} />
          <ActionButton number={() => this._number(3)} value={3} />
          <ActionButton operation={() => this._operation("plus")} value={<>&#43;</>} />
        </div>
        <div className="calc_row five">
          <ActionButton number={() => this._number(0)} value={0} />
          <ActionButton operation={() => this._operation("dot")} value={<>&#x2219;</>} />
          <ActionButton operation={() => this._operation("evaluate")} value={<>&#61;</>} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { digit1, digit2, operator } = state.calc
  return {
    digit1, digit2, operator
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    digit_pressed: (value) => dispatch(digitPressed(value)),
    operation_pressed: (value) => dispatch(operationPressed(value)),
    evaluation_pressed: (value) => dispatch(evaluationPressed(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserActions);
