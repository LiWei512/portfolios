import React from "react"
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Divider,
} from "@material-ui/core"
import SkillBar from "../SkillBar"
import { graphql, useStaticQuery } from "gatsby"

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
      <Box paddingY={8}>
        <Paper>
          <Grid container>
            {data.allSkillsJson.edges.map(({ node }) => (
              <>
                <Grid item sm={4}>
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
                      <Typography variant="h6">{node.title}</Typography>
                    </Box>

                    <Box py={2} textAlign="center">
                      <Typography variant="body" align="center">
                        {node.desc}
                      </Typography>
                    </Box>

                    <Box py={2}>
                      <Typography variant="h6">Skills</Typography>
                    </Box>

                    <Box py={2}>
                      <Grid container spacing={2}>
                        {node.skills.map(skill => (
                          <Grid item xs={12}>
                            <SkillBar type={skill.type} level={skill.level} />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  )
}
