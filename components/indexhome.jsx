import React from 'react';
import Image from 'next/image'

import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {
    Box,
    Button
} from '@material-ui/core';

const IndexHome = () => {

    const classes = useStyles();

    return ( 
            <Box align="center" className={classes.container}>
                <Image 
                    src="/images/fondo.jpg" alt="" 
                    width={1350} 
                    height={700} 
                    objectFit="cover" 
                    quality={100} 
                    className={classes.filtering}
                />
                <Box className={classes.centered}>
                    <h2 className={classes.title}>Lorem ipsum dolor sit amet</h2>
                    <p className={classes.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at corrupti tempore amet inventore magni!</p>
                    <Button variant="contained" color="secondary" className={classes.homeButton}>
                        Lorem ipsum dolor
                        <ArrowRightAltIcon className={classes.arrow} aria-hidden="true" />
                    </Button>
                </Box>
            </Box>
     );
}
 
export default IndexHome;

const useStyles = makeStyles({
    container: {
        position: "relative",
        display: "inline-block",
        textAlign: "center",
    },
    filtering: {
        filter: `brightness(40%)`,
    },
    centered: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -40%)`,
    },
    title: {
        color: "#fff",
        fontSize: "3.5rem",
        lineHeight: "3.5rem",

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
    }
  });

