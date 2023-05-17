import { Box, Flex, IconButton, Link, } from "@chakra-ui/react";
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar () {
    return (
        <div>
          <Flex className='nav-container'>
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

          {/* Right side */}
          <Flex className='icon-btns'>
            <IconButton
              className='shopping-cart' 
              icon={<ShoppingCartIcon />}
            />
            <IconButton
              className='instagram'
              aria-label="Instagram"
              icon={<InstagramIcon />}
              href="#"
            />
          </Flex>
          </Flex>

        </div>
      );
    }
    
 export default Navbar;