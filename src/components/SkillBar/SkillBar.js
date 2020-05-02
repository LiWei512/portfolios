import React from "react";
import { Typography, Box } from "@material-ui/core";

export default function SkillBar({ type, level }) {
  return (
    <Box bgcolor="#eee" height={24} width="100%">
      <Box bgcolor="primary.main" width={`${level}%`} height="100%">
        <Typography variant="body1">{type}</Typography>
      </Box>
    </Box>
  );
}
