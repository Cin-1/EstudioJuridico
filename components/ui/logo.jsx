import React from 'react';
import Image from 'next/image'

import {
    Box
} from '@material-ui/core';

const Logo = () => {
    return ( 
        <Box>
            <Image 
                src="/images/joker.png" alt="" 
                width={100} 
                height={40} 
                objectFit="cover" 
                quality={100} 
            />
        </Box>
     );
}
 
export default Logo;