import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

import SkillBar from "../SkillBar"

export default function Skills() {
  const query = graphql`
    query MyQuery {
      allSkillsJson {
        edges {
          node {
            id
            title
            desc
            skills {
              type
              level
            }
            icon {
              publicURL
            }
          }
        }
      }
    }
  `

  const data = useStaticQuery(query)

  return (
    <Container maxWidth="md">
      <Box py={8}>
        <Paper>
          <Grid container>
            {data.allSkillsJson.edges.map(({ node }) => (
              <Grid item xs={12} sm={4} key={node.id}>
                <Box
                  p={2}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Box py={2}>
                    <figure>
                      <img
                        src={node.icon.publicURL}
                        alt="Trulli"
                        style={{ width: 64, height: 64 }}
                      />
                    </figure>
                  </Box>

                  <Box py={2}>
                    <Typography variant="h6" align="center">
                      {node.title}
                    </Typography>
                  </Box>

                  <Box py={2}>
                    <Typography variant="h6">Skills</Typography>
                  </Box>

                  <Box py={2} width="100%">
                    <Grid container spacing={2}>
                      {node.skills.map((skill, index) => (
                        <Grid item xs={12} key={index}>
                          <SkillBar type={skill.type} level={skill.level} />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  )
}
