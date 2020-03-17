import * as React from 'react';
import classnames from 'classnames';

import styles from './style.css';

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
};

export const ButtonTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
};

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const Button = props => {
  const {type, onClick, children, theme, size, className, disabled} = props;
  const classProps = classnames(
    styles.button,
    styles[theme],
    styles[size],
    {
      [styles.disabled]: disabled,
    },
    className,
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  className: '',
  disabled: false,
};

export default Button;
