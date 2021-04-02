import React from "react";
import theme from "../components/theme/theme";

import { makeStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Box, Button } from "@material-ui/core";

const IndexHome = () => {
  const classes = useStyles();

  return (
    <Box className={classes.bgimg}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        className={classes.container}
      >
        <h1 className={classes.title}>Abogados Hurlingham</h1>
        <p className={classes.text}>
          Somos un estudio jurídico orientado a áreas de práctica del derecho
          tradicional familia, laboral civil y comercial.
        </p>
        <Button
          variant="contained"
          color="secondary"
          className={classes.homeButton}
        >
          VER MÁS
          <ArrowRightAltIcon className={classes.arrow} aria-hidden="true" />
        </Button>
      </Box>
    </Box>
  );
};

export default IndexHome;

const useStyles = makeStyles({
  container: {
    [theme.breakpoints.down("sm")]: {
      padding: "0 40px 0 40px",
    },
  },
  bgimg: {
    backgroundImage: `url(images/fondo.png)`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100vh",
  },
  title: {
    color: "#fff",
    fontSize: "3.5rem",
    lineHeight: "3.5rem",
    paddingTop: "300px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "240px",
    },
  },
  text: {
    color: "#fff",
    fontSize: "1.3rem",
  },
  homeButton: {
    color: "#fff",
    width: "20rem",
    height: "3rem",
  },
  arrow: {
    marginLeft: "9px",
  },
});
