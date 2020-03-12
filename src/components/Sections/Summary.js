import React from "react"
import { Container, Typography, Box } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"

export default function Summary() {
  const query = graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `

  const data = useStaticQuery(query)

  return (
    <Container maxWidth="md">
      <Box paddingY={8}>
        <Box p={2}>
          <Typography variant="h4" align="center">
            {"Hi, I’m BorysLee. Nice to meet you."}
          </Typography>
        </Box>

        <Box p={2}>
          <Typography
            variant="h6"
            component="div"
            align="center"
            dangerouslySetInnerHTML={{
              __html: data.site.siteMetadata.description,
            }}
          ></Typography>
        </Box>
      </Box>
    </Container>
  )
}
