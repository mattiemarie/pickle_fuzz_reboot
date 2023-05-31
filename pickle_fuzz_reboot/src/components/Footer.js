import React from 'react';
import {Image } from "@chakra-ui/react";
import footer_image from './images/footer_image.png'

function Footer () {
    return (
        <div>
          <div className='thanks_text'>
            Thanks for Visiting!
          </div>
          <div className='footer-image-container'>
            <Image
            className='footer_image'
            src={footer_image}
            alt='footer_image'
            borderRadius='lg'
            />
          </div>
        </div>
      );
    }
    
 export default Footer;