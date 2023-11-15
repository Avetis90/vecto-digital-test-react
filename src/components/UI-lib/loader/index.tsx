import React from 'react';

import styles from './loader.module.scss'
import cn from "classnames";

interface LoaderProps {
  loading: boolean
}



const Loader = ({ loading}: LoaderProps) => {
  return (
    <div className={cn(styles.wrapper, {[styles.loading]: loading })}>
      
    </div>
  );
};

export default Loader;
