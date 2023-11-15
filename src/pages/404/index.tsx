import React from 'react';
import Typography from "components/UI-lib/typography";
import Button from "components/UI-lib/button";

import styles from './404.module.scss'

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <Typography variant="h1">Page not found</Typography>
      <Button variant="primary" as="Link" to="/">Go to Home</Button>
    </div>
  );
};

export default NotFound;
