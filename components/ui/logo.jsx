import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
    Box
} from '@material-ui/core';

const Logo = () => {
    return ( 
        <Box>
            <Link href="/#">
                <Image 
                    src="/images/joker.png" alt="" 
                    width={100} 
                    height={40} 
                    objectFit="cover" 
                    quality={100} 
                />
            </Link>
        </Box>
     );
}
 
export default Logo;