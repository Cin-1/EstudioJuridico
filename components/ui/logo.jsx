import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import {
    Box
} from '@material-ui/core';

const Logo = () => {

    const classes = useStyles();

    return ( 
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
     );
}
 
export default Logo;

const useStyles = makeStyles({
    imagepointer: {
        cursor: "pointer",
    },
  });