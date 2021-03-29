import React from 'react';
import NavTop from './navbars/navtop';
import NavBottom from './navbars/navbottom';

import {
    Box
} from '@material-ui/core';

const Header = () => {
    return ( 
        <Box>
            <NavTop />
            <NavBottom />
        </Box>
     );
}
 
export default Header;