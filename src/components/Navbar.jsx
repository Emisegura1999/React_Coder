import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const Navbar = () => {
  return (
   <Box backgroundColor='orange'>
    <div>

              <Flex>
                   <Box p='4' >
                     TecnoCommerce
                   </Box>
                   <Spacer />

                     <Menu>
                       <MenuButton>
                           Categorias
                       </MenuButton>
                       <MenuList>
                            <MenuItem>Perifericos</MenuItem>
                            <MenuItem>Notebooks</MenuItem>
                       </MenuList>
                     </Menu>

                     <Spacer />


                   <Box p='4' >
                     <CartWidget />
                   </Box>
              </Flex>


          
    </div>
  </Box> 
  )
}

export default Navbar