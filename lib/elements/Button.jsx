import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  text, onClick, type, disabled,
}) => (
  <button type={type} disabled={disabled} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  text: 'button',
  onClick: () => {},
  type: '',
  disabled: false,
};

export default Button;
