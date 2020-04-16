import React from 'react'
import PropTypes from 'prop-types'

const CounterButton = ({ initialValue }) => <input type="button" value={initialValue} />


CounterButton.propTypes = {
    initialValue: PropTypes.number.isRequired
}


export default CounterButton