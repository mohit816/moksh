import React, { cloneElement } from 'react';
import { makeStyles } from '@mui/styles';
import {Button, Typography} from '@mui/material';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    borderRadius: '4px',
    width: '85%',
    height: '60vh', // 60% of viewport height
    margin: '0 auto',
    overflow: 'hidden',
    marginTop: "30px"
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
  },
  button: {
    display: 'block',
  },
}));

const SellWithUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src="https://images.unsplash.com/photo-1633878353697-f751870d1d76?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sell With Us"
      />
      <div className={classes.content}>
        <Typography variant="h6" align="center">
          Join our platform and start selling your products today.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            // Handle click event
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default SellWithUs;