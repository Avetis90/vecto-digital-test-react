import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import s from './button.module.scss';
import Typography  from '../typography';

export type ButtonAvailableElements = 'a' | 'button' | 'div' | 'Link';

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  prefixIcon?: string
  variant?: 'primary' | 'secondary';
  href?: string;
  target?: string;
  rel?: string;
  as?: ButtonAvailableElements;
  to?: string;
  active?: boolean;
  size?: 'lg' | 'md' | 'sm';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      prefixIcon,
      variant = 'primary',
      size = 'lg',
      children,
      onClick,
      type = 'button',
      disabled = false,
      href,
      as,
      ...other
    },
    ref,
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (onClick) {
        onClick(e);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let Element = (as || href ? 'a' : 'button') as any;

    if (as === 'Link') {
      Element = Link;
    }

    const fontSize =
      size === 'lg' ? 'paragraph3' : size === 'md' ? 'body2' : 'small';

    const classNames = cn(
      s.main,
      {
        [s.disabled]: disabled,
        [s.primary]: variant === 'primary',
        [s.secondary]: variant === 'secondary',
        [s.lg]: size === 'lg',
        [s.md]: size === 'md',
        [s.sm]: size === 'sm',
      },
      className,
    );

    return (
      <Element
        className={classNames}
        onClick={handleClick}
        type={Element === 'button' ? type : undefined}
        disabled={disabled}
        href={href}
        {...other}
        ref={ref}
      >
        {prefixIcon && <img src={`assets/icons/${prefixIcon}.png`} alt="Icon"/>}
        <Typography variant={fontSize}>{children}</Typography>
      </Element>
    );
  },
);

export default Button;
