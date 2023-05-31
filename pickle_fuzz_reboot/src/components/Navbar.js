import { Box, IconButton, Link, } from "@chakra-ui/react";
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar () {
    return (
        <div>
          <div className='nav-container'>
            <div className='nav-links'>
            {/* Left side */}
            <Box>
            {/* Add a mobile menu button here */}
            </Box>
            <Box className='nav-tabs'>
              <Box className='products-tab'>
                <Link href="Products">
                  Products
                </Link>
              </Box>
              <Box className='faq-tab'>
                <Link href="FAQ">
                  FAQ
                </Link>
              </Box>
              <Box className='contact-tab'>
                <Link href="Contact">
                  Contact
                </Link>
              </Box>
            </Box>
            </div>

            {/* Right side */}
            <div className='icon-btns'>
            <IconButton
              className='shopping-cart' 
              icon={<ShoppingCartIcon />}
            />
            <Link href="https://www.instagram.com/lilpicklefuzz/" isExternal> 
            <IconButton
              className='instagram'
              aria-label="Instagram"
              icon={<InstagramIcon />}
            />
            </Link>
            </div>
          </div>

        </div>
      );
    }
    
 export default Navbar;