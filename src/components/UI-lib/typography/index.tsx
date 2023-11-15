import React, { ElementType, forwardRef, HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './typography.module.scss';

type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'paragraph1'
  | 'paragraph2'
  | 'paragraph3'
  | 'paragraph4'
  | 'body1'
  | 'body2'
  | 'small';

export interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  variant: TypographyVariants;
}

const elementsByVariants: Record<TypographyVariants, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  paragraph1: 'p',
  paragraph2: 'p',
  paragraph3: 'p',
  paragraph4: 'p',
  body1: 'div',
  body2: 'div',
  small: 'span',
};

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ as, children, variant, className, ...restProps }, ref) => {
    const Tag = as || elementsByVariants[variant];

    return (
      <Tag
        {...restProps}
        className={classNames(styles[variant], className)}
        ref={ref}
      >
        {children}
      </Tag>
    );
  },
);

export default Typography
