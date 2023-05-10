import React from 'react';
import { Image } from '@chakra-ui/react'
import header_image from './images/header_image.jpg';

function Header () {
    return (
      <div className='header-background'>
        <div className='header-text'>
          Welcome to the Fuzz
        </div>
        <div className='header-container'>
          <Image
            className='header-image'
            src={header_image}
            alt='Header Image'
            borderRadius='lg'
          />
        </div>
      </div>
      );
    }
    
 export default Header;