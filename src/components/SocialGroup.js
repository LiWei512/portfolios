import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    listStyle: 'none',
    display: 'inline-flex',
    paddingLeft: 0,
  },
}));

const SocialGroup = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          socials {
            name
            url
            icon
          }
        }
      }
    }
  `);

  return (
    <ul className={classes.root}>
      {data.site.siteMetadata.socials.map(media => (
        <li key={media.name}>
          <a href={media.url} target="_blank" rel="noopener noreferrer">
            <IconButton aria-label={media.name}>
              <FontAwesomeIcon icon={JSON.parse(media.icon)} />
            </IconButton>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialGroup
