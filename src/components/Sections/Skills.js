import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Container, Typography, Box, Paper, Grid } from "@material-ui/core";
import { SkillBar } from "components";

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
  `;

  const data = useStaticQuery(query);

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
                          <SkillBar label={skill.type} level={skill.level} />
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
  );
}
