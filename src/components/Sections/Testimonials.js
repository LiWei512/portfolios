import React from "react"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}))

const testimonials = [
  {
    avatar: "https://i.pravatar.cc/96",
    quote:
      "Duis ut nisi dapibus massa gravida cursus. Maecenas vehicula molestie efficitur. Integer non pulvinar orci, eget feugiat lorem.",
    title: "Lorem ipsum dolor sit amet.",
    subtitle: "Lorem ipsum dolor sit amet.",
  },
  {
    avatar: "https://i.pravatar.cc/96",
    quote:
      "Duis ut nisi dapibus massa gravida cursus. Maecenas vehicula molestie efficitur. Integer non pulvinar orci, eget feugiat lorem.",
    title: "Lorem ipsum dolor sit amet.",
    subtitle: "Lorem ipsum dolor sit amet.",
  },
  {
    avatar: "https://i.pravatar.cc/96",
    quote:
      "Duis ut nisi dapibus massa gravida cursus. Maecenas vehicula molestie efficitur. Integer non pulvinar orci, eget feugiat lorem.",
    title: "Lorem ipsum dolor sit amet.",
    subtitle: "Lorem ipsum dolor sit amet.",
  },
]

export default function Testimonials() {
  const classes = useStyles()
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  }

  return (
    <Container maxWidth={"md"}>
      <Box paddingY={8}>
        <Box p={2}>
          <Typography variant="h4" align="center">
            Testimonials
          </Typography>
        </Box>
        <Box p={2}>
          <Typography variant="h5" align="center">
            People I've worked with have said some nice things...
          </Typography>
        </Box>

        <Box mb={4}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  p={2}
                >
                  <Box p={1}>
                    <Avatar
                      alt="Remy Sharp"
                      src={testimonial.avatar}
                      className={classes.avatar}
                    />
                  </Box>
                  <Box p={1}>
                    <Typography variant="body1" component="p" align="center">
                      {testimonial.quote}
                    </Typography>
                  </Box>
                  <Box p={1}>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      align="center"
                    >
                      {testimonial.title}
                    </Typography>
                  </Box>
                  <Box p={1}>
                    <Typography
                      variant="subtitle2"
                      component="h6"
                      align="center"
                    >
                      {testimonial.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </div>
            ))}
          </Slider>
        </Box>
      </Box>
    </Container>
  )
}
