import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  tagSkill: {
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    color: "#222",
    fontSize: 12,
    display: "inline-block",
    cursor: "default",
    padding: "0.25rem 0.25rem",
    lineHeight: 1,
  }
});

export default function SkillTag({ skill }) {
  const classes = useStyles();
  return (
    <Paper className={classes.tagSkill}>{skill}</Paper>
  );
}
