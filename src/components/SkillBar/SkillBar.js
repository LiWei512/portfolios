import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import VisibilitySensor from "react-visibility-sensor";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  "progress": {
    backgroundColor: "#eee",
    height: 24,
    width: "100%",
    position: "relative"
  },
  "progressBar": (props) => ({
    position: "absolute",
    width: "1%",
    height: "100%",
    transition: "width .5s",
    backgroundColor: theme.palette.primary.main,
    "&.show": {
      width: `${props.level}%`
    }
  }),
  "progressLabel": {
    fontWeight: "bold",
    position: "relative"
  }
}));

export default function SkillBar({ label, level }) {
  const classes = useStyles({
    level: level,
  });

  return (
    <div className={classes.progress}>
      <VisibilitySensor>
        {({ isVisible }) => (
          <div className={clsx(classes.progressBar, isVisible && "show")} />
        )}
      </VisibilitySensor>
      <Typography variant="body1" className={classes.progressLabel}>{label}</Typography>
    </div>
  );
}
