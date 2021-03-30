import React from 'react';
import Image from 'next/image'

import { makeStyles } from '@material-ui/core/styles';
import {
    Box
} from '@material-ui/core';

const Services = () => {

    const classes = useStyles();

    return ( 
        <Box>
            <Box align="center" mb={4} mt={5}>
                <Box className={classes.servicetitle}>nuestros servicios</Box>
                <Box className={classes.servicetext}>Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Fuga distinctio recusandae ex architecto adipisci sequi quis facere odio quos at.</Box>
            </Box>
            <Box display="flex" justifyContent="center">
                <Box ml={1.5} mr={1.5} className={classes.boxstyle}>
                    <Box>
                        <Image
                            src="/images/dragon.jpg"
                            width={200}
                            height={200}
                            objectFit="cover" 
                            quality={100} 
                            className={classes.imgcard}
                        />
                    </Box>
                    <Box className={classes.titlecard}>
                        <h3>Lorem</h3>
                    </Box>    
                    <Box>
                        <p className={classes.textcard}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Suscipit molestias nam, dolorem corporis recusandae tempora.</p>
                    </Box>
                </Box>
                <Box ml={1.5} mr={1.5} className={classes.boxstyle}>
                    <Box>
                        <Image
                            src="/images/dragon.jpg"
                            width={200}
                            height={200}
                            objectFit="cover" 
                            quality={100} 
                            className={classes.imgcard}
                        />
                    </Box>
                    <Box className={classes.titlecard}>
                        <h3>Lorem</h3>
                    </Box>    
                    <Box>
                        <p className={classes.textcard}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Suscipit molestias nam, dolorem corporis recusandae tempora.</p>
                    </Box>
                 </Box>
                 <Box ml={1.5} mr={1.5} className={classes.boxstyle}>
                    <Box>
                        <Image
                            src="/images/dragon.jpg"
                            width={200}
                            height={200}
                            objectFit="cover" 
                            quality={100} 
                            className={classes.imgcard}
                        />
                    </Box>
                    <Box className={classes.titlecard}>
                        <h3>Lorem</h3>
                    </Box>    
                    <Box>
                        <p className={classes.textcard}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Suscipit molestias nam, dolorem corporis recusandae tempora.</p>
                    </Box>
                 </Box>
                 <Box ml={1.5} mr={1.5} className={classes.boxstyle}>
                    <Box>
                        <Image
                            src="/images/dragon.jpg"
                            width={200}
                            height={200}
                            objectFit="cover" 
                            quality={100} 
                            className={classes.imgcard}
                        />
                    </Box>
                    <Box className={classes.titlecard}>
                        <h3>Lorem</h3>
                    </Box>    
                    <Box>
                        <p className={classes.textcard}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Suscipit molestias nam, dolorem corporis recusandae tempora.</p>
                    </Box>
                 </Box>
                 <Box ml={1.5} mr={1.5} className={classes.boxstyle}>
                    <Box>
                        <Image
                            src="/images/dragon.jpg"
                            width={200}
                            height={200}
                            objectFit="cover" 
                            quality={100} 
                        />
                    </Box>
                    <Box className={classes.titlecard}>
                        <h3>Lorem</h3>
                    </Box>    
                    <Box>
                        <p className={classes.textcard}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Suscipit molestias nam, dolorem corporis recusandae tempora.</p>
                    </Box>
                 </Box>
            </Box>
        </Box>
     );
}
 
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
        padding:"20px 15px",
        "&:hover": {
            boxShadow: "1px 4px 9px #e4e8ea",
        }
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