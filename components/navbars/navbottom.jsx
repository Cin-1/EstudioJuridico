import React from 'react';
import Logo from '../ui/logo';
import Menu from '../ui/menu';

import {
    Box
} from '@material-ui/core';

const NavBottom = () => {
    return ( 
        <Box pb={2.5} pt={2.5}
            style={{
                backgroundColor: "#1E1E1E", 
            }}>
            <Box ml={5} mr={5} display="flex" justifyContent="space-between" alignItems="center">
                <Logo />
                <Menu />
            </Box>
        </Box>
     );
}
 
export default NavBottom;