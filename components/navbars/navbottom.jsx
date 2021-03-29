import React from 'react';
import Logo from '../ui/logo';
import Menu from '../ui/menu';

import {
    Box
} from '@material-ui/core';

const NavBottom = () => {
    return ( 
        <Box display="flex" justifyContent="space-between">
                <Logo />
                <Menu />
        </Box>
     );
}
 
export default NavBottom;