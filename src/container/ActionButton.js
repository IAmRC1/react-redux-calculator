import React from 'react'

export const ActionButton = ({ number, value, operation }) => (
  <div className="button">
    <button onClick={number ? () => number(value) : () => operation(value)}>{value}</button>
  </div>
)
