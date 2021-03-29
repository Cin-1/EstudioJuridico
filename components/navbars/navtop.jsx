import React from 'react';

import {
    Box
} from '@material-ui/core';

const NavTop = () => {
    return ( 
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Box display="flex">
                <Box>
                    Phone
                </Box>
                <Box>
                    Mail
                </Box>
            </Box>
            <Box>
                Images
            </Box>
        </Box>
     );
}
 
export default NavTop;