import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { IconButton, Box } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialGroup = () => {
  const data = useStaticQuery(graphql`
    query {
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
    <Box display="flex">
      {data.site.siteMetadata.socials.map(media => (
        <IconButton
          key={media.name}
          aria-label={media.name}
          edge={false}
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={JSON.parse(media.icon)} />
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialGroup;
