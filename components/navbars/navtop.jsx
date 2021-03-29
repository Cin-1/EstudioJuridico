import React from 'react';
import Link from 'next/link';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import {
    Box
} from '@material-ui/core';

const NavTop = () => {
    return ( 
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Box display="flex">
                <Box display="flex">
                    <Box>
                        <PhoneIcon />
                    </Box>
                    <Box>
                    <Link href="#">123456789</Link> 
                    </Box>
                </Box>
                <Box display="flex">
                    <Box>
                        <MailOutlineIcon />
                    </Box>
                    <Box>
                        <Link href="#">lorem@lorem.com.ar</Link> 
                    </Box>
                </Box>
            </Box>
            <Box>
                <FacebookIcon />
                <InstagramIcon />
            </Box>
        </Box>
     );
}
 
export default NavTop;