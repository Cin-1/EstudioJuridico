import React from "react";
import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const Services = () => {
  const classes = useStyles();

  return (
    <Box mb={5}>
      <Box align="center" mb={4} mt={5}>
        <Box className={classes.servicetitle}>áreas de práctica</Box>
        <Box className={classes.servicetext}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          distinctio recusandae ex architecto adipisci sequi quis facere odio
          quos at.
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <Box ml={1.5} mr={1.5} className={classes.boxstyle}>
          <Box>
            <Image
              src="/images/testamento.jpg"
              width={200}
              height={200}
              objectFit="cover"
              quality={100}
              className={classes.imgcard}
            />
          </Box>
          <Box className={classes.titlecard}>
            <h3>Sucesiones</h3>
          </Box>
          <Box>
            <p className={classes.textcard}>
              Sucesiones en Capital Federal y Provincia de Buenos Aires.
              Presupuestos sin cargo.
            </p>
          </Box>
        </Box>
        <Box ml={1.5} mr={1.5} className={classes.boxstyle}>
          <Box>
            <Image
              src="/images/divorcio.jpg"
              width={200}
              height={200}
              objectFit="cover"
              quality={100}
              className={classes.imgcard}
            />
          </Box>
          <Box className={classes.titlecard}>
            <h3>Divorcios</h3>
          </Box>
          <Box>
            <p className={classes.textcard}>
              Divorcios unilaterales y de común acuerdo. Liquidación de bienes
              de la Sociedad Conyugal. Uniones convivenciales.
            </p>
          </Box>
        </Box>
        <Box ml={1.5} mr={1.5} className={classes.boxstyle}>
          <Box>
            <Image
              src="/images/pensiones.jpg"
              width={200}
              height={200}
              objectFit="cover"
              quality={100}
              className={classes.imgcard}
            />
          </Box>
          <Box className={classes.titlecard}>
            <h3>Jubilaciones</h3>
          </Box>
          <Box>
            <p className={classes.textcard}>
              Tramitamos y gestionamos jubilaciones, pensiones y demás
              beneficios previsionales.
            </p>
          </Box>
        </Box>
        <Box ml={1.5} mr={1.5} className={classes.boxstyle}>
          <Box>
            <Image
              src="/images/laboral.jpg"
              width={200}
              height={200}
              objectFit="cover"
              quality={100}
              className={classes.imgcard}
            />
          </Box>
          <Box className={classes.titlecard}>
            <h3>Laboral</h3>
          </Box>
          <Box>
            <p className={classes.textcard}>
              Asesoramos al trabajador en los reclamos de sus derechos laborales
              para obtener lo que por ley le corresponde.
            </p>
          </Box>
        </Box>
        <Box ml={1.5} mr={1.5} className={classes.boxstyle}>
          <Box>
            <Image
              src="/images/work.webp"
              width={200}
              height={200}
              objectFit="cover"
              quality={100}
            />
          </Box>
          <Box className={classes.titlecard}>
            <h3>Accidentes de Trabajo</h3>
          </Box>
          <Box>
            <p className={classes.textcard}>
              La ART nunca te va a pagar tu real incapacidad si no reclamás por
              tu derecho. Por ello, antes de firmar cualquier cosa, asesoráte.
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;

const useStyles = makeStyles({
  servicetitle: {
    color: "#1E1E1E",
    fontSize: "2.2rem",
    textTransform: "uppercase",
  },
  servicetext: {
    color: "grey",
    fontSize: "1rem",
  },
  boxstyle: {
    backgroundColor: "#F7F7F7",
    border: "solid 1px #e4e8ea",
    borderRadius: "5px",
    height: "450px",
    padding: "20px 15px",
    "&:hover": {
      boxShadow: "1px 4px 9px #e4e8ea",
    },
  },
  titlecard: {
    color: "#2A2A2A",
    fontSize: "1.1rem",
  },
  textcard: {
    color: "grey",
    fontSize: "1rem",
    maxWidth: "200px",
  },
});
