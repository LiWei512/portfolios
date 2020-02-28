import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

const useStyles = makeStyles(theme => ({
  caption: {
    fontWeight: 700
  },
  tagSkill: {
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    color: '#222',
    fontSize: 12,
    display: 'inline-block',
    cursor: 'default',
    padding: '5px 5px',
    lineHeight: 1,
  },
  detailList: {
    paddingLeft: 16,
  },
  image: {
    marginTop: 12,
    marginBottom: 12
  }
}));

export default function PortfolioModal(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  const { open, onClose, portfolioId } = props;
  const data = useStaticQuery(graphql`
    query {
      allPortfoliosJson {
        edges {
          node {
            id
            skills
            title
            url
            details
            description
            images {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  let { node: portfolio } = data.allPortfoliosJson.edges.find(({ node }) => node.id === portfolioId);
  console.log(portfolio);
  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{portfolio.title}</DialogTitle>
      <DialogContent>
        {
          portfolio.images.map((image, index) => (
            <Img
              key={index}
              fluid={image.childImageSharp.fluid}
              alt=""
              className={classes.image}
            />
          ))
        }

        <Box my={2}>
          <Typography className={classes.caption} variant="caption" component="strong" display="block">
            Skills
          </Typography>
          <Grid container spacing={2}>
            {portfolio.skills.map((skill, index) => <Grid key={index} item><Paper className={classes.tagSkill}>{skill}</Paper></Grid>)}
          </Grid>
        </Box>

        <Box my={2}>
          <Typography className={classes.caption} variant="caption" component="strong" display="block">
            Project description
          </Typography>
          <Typography variant="body2" gutterBottom>
            {portfolio.description}
          </Typography>
        </Box>

        <Box my={2}>
          <Typography className={classes.caption} variant="caption" component="strong" display="block">
            Details
          </Typography>
          <ul className={classes.detailList}>
            {portfolio.details.map((detail, index) => <li key={index}><Typography variant="body2" gutterBottom>{detail}</Typography></li>)}
          </ul>
        </Box>

        <Box my={2}>
          <Typography className={classes.caption} variant="caption" component="strong" display="block">
            URL
          </Typography>
          <Typography variant="body2" gutterBottom>
            {portfolio.url}
          </Typography>
        </Box>

      </DialogContent>
    </Dialog>
  )
}

PortfolioModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}