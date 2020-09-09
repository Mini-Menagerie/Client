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

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  content: PropTypes.string.isRequired
}

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
}

export default Button;