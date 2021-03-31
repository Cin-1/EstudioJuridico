import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import theme from "../theme/theme";
import { makeStyles } from '@material-ui/core/styles';
import {
    Box
} from '@material-ui/core';

const NavBottom = () => {

    const classes = useStyles();

    const [ toggle, setToggle ] = useState(false);

    return ( 
        <Box pb={2.5} pt={2.5}
        style={{
            backgroundColor: "#1E1E1E", 
        }}>
            <Box ml={5} mr={5} className={ toggle ? null : classes.togglebox}>
                { toggle 
                
                ?

                <Box className={classes.menulogo}>
                    <Link href="/">
                        <Image 
                            src="/images/goldenraven.png" alt="" 
                            width={150} 
                            height={40} 
                            objectFit="cover" 
                            quality={100} 
                            className={classes.imagepointer}
                        />
                    </Link>
                </Box>

                :

                <Box>
                    <Link href="/">
                        <Image 
                            src="/images/goldenraven.png" alt="" 
                            width={150} 
                            height={40} 
                            objectFit="cover" 
                            quality={100} 
                            className={classes.imagepointer}
                        />
                    </Link>
                </Box>
                }
                { toggle 
                    
                    ?                  
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box alignSelf="flex-end">
                            <Box className={classes.navicon}>
                                <CloseIcon
                                    style={{fontSize: "2rem", color: "#ababab" }}
                                    onClick={() => setToggle(!toggle)}
                                />
                            </Box>
                        </Box>
                        <Box mb={5} mt={5}>
                            <Link href="/">
                                <Image 
                                    src="/images/goldenraven.png" alt="" 
                                    width={257} 
                                    height={70} 
                                    objectFit="cover" 
                                    quality={100} 
                                    className={classes.imagepointer}
                                />
                            </Link>
                        </Box>

                        <Box className={classes.sidebar}>
                            <Link href="/"><a className={classes.textiniciosidebar}>Inicio</a></Link>
                            <Link href="/#"><a className={classes.textsidebar}>Lorem</a></Link>
                            <Link href="/#"><a className={classes.textsidebar}>Lorem</a></Link>
                            <Link href="/#"><a className={classes.textsidebar}>Lorem</a></Link>
                            <Link href="/#"><a className={classes.textsidebar}>Lorem</a></Link>
                            <Link href="/#"><a className={classes.textsidebar}>Lorem</a></Link>
                        </Box>
                    </Box>

                    : 

                    <Box display="flex" className={classes.menu}>
                        <Link href="/"><a className={classes.textinicio}>Inicio</a></Link>
                        <Link href="/#"><a className={classes.textmenu}>Lorem</a></Link>
                        <Link href="/#"><a className={classes.textmenu}>Lorem</a></Link>
                        <Link href="/#"><a className={classes.textmenu}>Lorem</a></Link>
                        <Link href="/#"><a className={classes.textmenu}>Lorem</a></Link>
                        <Link href="/#"><a className={classes.textmenu}>Lorem</a></Link>
                    </Box>
                }    
                { toggle 

                    ?

                        null

                    :

                    <Box className={classes.navicon}>
                        <MenuIcon
                            style={{fontSize: "2rem", color: "#ababab" }}
                            onClick={() => setToggle(!toggle)}
                        />
                    </Box>
                } 
            </Box>
        </Box>
     ); 
}
 
export default NavBottom;

const useStyles = makeStyles({
    togglebox: {
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    imagepointer: {
        cursor: "pointer",
    },
    menulogo: {
        display: "none",
    },
    textinicio: {
        color: "#B69D74",
        fontSize: "1rem",
        fontWeight: "bold",
        paddingLeft: "2rem",
    },
    textiniciosidebar: {
        color: "#B69D74",
        fontSize: "1.5rem",
        fontWeight: "bold",
        paddingLeft: "2rem",
        marginBottom: "0.5rem"
    },
    textmenu: {
        color: "#ababab",
        fontSize: "1rem",
        fontWeight: "bold",
        paddingLeft: "2rem",

        "&:hover": {
            color: "#fff",
        }
    },
    textsidebar: {
        color: "#ababab",
        fontSize: "1.5rem",
        fontWeight: "bold",
        paddingLeft: "2rem",
        marginBottom: "0.5rem",

        "&:hover": {
            color: "#fff",
        }
    },
    navicon: {
        color: "#fff",
        fontSize: "23px",
        cursor: "pointer",
        display: "none",

        [theme.breakpoints.down('sm')]: {
            display: "block",
        },
    },
    sidebar: {
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            backgroundColor: "#1E1E1E",
            height: "100vh",
            width: "100%",
            alignItems: "center",
        },
    },
    menu: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            backgroundColor: "#2C4676",
            display: "none",
        }
    }
  });