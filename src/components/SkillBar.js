import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

export default function SkillBar({ type, level }) {
  return (
    <Box bgcolor="#eee" height={24} width="100%">
      <Box bgcolor="primary.main" width={`${level}%`} height="100%">
        <Typography variant="body">{type}</Typography>
      </Box>
    </Box>
  )
}
