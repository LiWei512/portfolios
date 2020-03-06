import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

import SocialGroup from '../SocialGroup';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  leftPaper: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  rightPaper: {
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '1rem',
  },
  splashImageWrapper: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    position: 'absolute !important',
    overflow: 'hidden',
  },
  splashImage: {
    height: '100%'
  },
  splashContent: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid white',
  },
  avatar: {
    width: 160,
    height: 160
  }
}));

export default function AboutMe() {
  const query = graphql`
    query {
      file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          description
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth={false} className={classes.root}>
      <div className={classes.splashImageWrapper}>
        <Img
          className={classes.splashImage}
          fluid={data.file.childImageSharp.fluid}
          alt="Borys Lee"
        />
      </div>
      <Container maxWidth={"lg"} className={classes.splashContent}>
        <Box display="flex" flexDirection="column" alignItems="center">

          <Box pb={4}>
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/128" className={classes.avatar} />
          </Box>

          <Box pb={4}>
            <Typography variant="h2" component="h1" align="center">
              <b>Learn to Create, Learn to Innovate</b>
            </Typography>
          </Box>

          <Box pb={4}>
            <Typography variant="h6" component="h6" align="center">
              <b>This is Borys Lee, full-stack developer and crypto enthusiast</b>
            </Typography>
          </Box>

          <Box pb={4}>
            <Typography variant="h6" component="span" align="center">
              I am a freelancer based in Shenyang, Liaoning, China.
          </Typography>
          </Box>

          <Box pb={2}>
            <Typography variant="h6" component="span" align="center">
              Contact me at <Link href="mailto:developer.clear@gmail.com">developer.clear@gmail.com</Link>
            </Typography>
          </Box>

          <SocialGroup />
        </Box>
      </Container>
    </Container>
  )
}
