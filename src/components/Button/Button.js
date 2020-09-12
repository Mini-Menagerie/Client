import React from 'react'
import PropTypes from 'prop-types';

const Button = ({ type, onClick, children }) => {

  return (
    <button
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Declare Proptypes
Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

// Declare Default
Button.defaultProps = {
  type: 'button',
}

export default Button;