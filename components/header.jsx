import React from 'react';
import NavTop from './navbars/navtop';
import NavBottom from './navbars/navbottom';

import {
    Box
} from '@material-ui/core';

const Header = () => {
    return ( 
        <Box style={{
            position: "fixed",
            width: "100%", 
            zIndex: "999995",
         }}>
            <NavTop />
            <NavBottom />
        </Box>
     );
}
 
export default Header;