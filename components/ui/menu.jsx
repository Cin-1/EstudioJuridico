import React from 'react';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import {
    Box
} from '@material-ui/core';

const Menu = () => {

    const classes = useStyles();

    return ( 
        <Box display="flex">
            <Link href="/"><a className={classes.textmenu}>Lorem</a></Link>
            <Link href="/"><a className={classes.textmenu}>Lorem</a></Link>
            <Link href="/"><a className={classes.textmenu}>Lorem</a></Link>
            <Link href="/"><a className={classes.textmenu}>Lorem</a></Link>
            <Link href="/"><a className={classes.textmenu}>Lorem</a></Link>
            <Link href="/"><a className={classes.textmenu}>Lorem</a></Link>
        </Box>
     );
}
 
export default Menu;

const useStyles = makeStyles({
    textmenu: {
        color: "lightgrey",
        fontSize: "1rem",
        fontWeight: "bold",
        paddingLeft: "2rem",

        "&:hover": {
            color: "#fff",
        }
    },
  });