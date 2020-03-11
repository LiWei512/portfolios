import React from 'react'
import { Container, Typography, Box } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'

export default function Bio() {
  const query = graphql`
    query {
      markdownRemark(fileAbsolutePath: {regex: "/bio.md/"}) {
        id
        html
        frontmatter {
          title
        }
      }
    }
  `;

  const data = useStaticQuery(query);

  return (
    <Container maxWidth="md">
      <Box paddingY={8}>

        <Box p={2}>
          <Typography variant="h4" align="center">
            {data.markdownRemark.frontmatter.title}
          </Typography>
        </Box>

        <Box p={2}>
          <Typography variant="h6" component="div" align="center" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}>
          </Typography>
        </Box>
      </Box>
    </Container >
  )
}
