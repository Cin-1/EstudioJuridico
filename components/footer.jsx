import React from 'react';

import {
    Box,
    Grid
} from '@material-ui/core';

const Footer = () => {
    return ( 
        <Grid container>
            <Grid item sm={8}>
                <Box>
                    Logo
                </Box>
                <Box>
                    About
                </Box>
                <Box>
                    SocialMedia
                </Box>
            </Grid>
            <Grid item sm={4}>
                <Box>Contact</Box>
                <Box>Location paragraph</Box>
                <Box>Phone number</Box>
                <Box>mail</Box>
                <Box>lorem</Box>
            </Grid>
        </Grid>
     );
}
 
export default Footer;