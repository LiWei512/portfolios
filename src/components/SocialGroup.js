import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Box from "@material-ui/core/Box"

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
  `)

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
  )
}

export default SocialGroup
