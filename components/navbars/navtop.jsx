import React from 'react';
import Link from 'next/link';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import { makeStyles } from '@material-ui/core/styles';
import {
    Box
} from '@material-ui/core';

const NavTop = () => {

    const classes = useStyles();

    return ( 
        <Box 
            display="flex" 
            justifyContent="space-between"
            style={{backgroundColor: "#2A2A2A"}}
        >
            <Box display="flex" ml={5} pt={1.5} pb={1.5} >
                <Box mr={3} display="flex" alignItems="center">
                    <Box mr={0.5}>
                        <PhoneIcon color="secondary" />
                    </Box>
                    <Box>
                        <Link href="#"><a className={classes.textnavtop}>123456789</a></Link> 
                    </Box>
                </Box>
                <Box display="flex" alignItems="center">
                    <Box mr={0.5}>
                        <MailOutlineIcon color="secondary" />
                    </Box>
                    <Box>
                        <Link href="#"><a className={classes.textnavtop}>lorem@lorem.com.ar</a></Link> 
                    </Box>
                </Box>
            </Box>
            <Box mr={5} pt={1.5} pb={1.5} display="flex">
                <Box>
                    <FacebookIcon color="secondary" />
                </Box>
                <Box ml={2}>
                    <InstagramIcon color="secondary" />
                </Box>
            </Box>
        </Box>
     );
}
 
export default NavTop;

const useStyles = makeStyles({
    textnavtop: {
        color: "lightgrey",
        fontSize: "1rem",

        "&:hover": {
            color: "#fff",
        }
    },
  });