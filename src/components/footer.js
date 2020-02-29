import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Emoji from './Emoji';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(6),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Made with <Emoji symbol="❤" lavel="love" style={{ color: 'red' }} /> and <Emoji symbol="☕" lavel="love" />.
      </Typography>
    </footer>
  )
}