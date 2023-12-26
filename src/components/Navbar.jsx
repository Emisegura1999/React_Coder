import React from 'react'
import CartWidget from './CartWidget'
<<<<<<< HEAD
import {Link} from 'react-router-dom'
import {Menu, MenuButton, MenuList, MenuItem, Flex, Spacer, Box} from '@chakra-ui/react'
=======
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
>>>>>>> f1e4275cb674659394df947d754fd81671a97415

const Navbar = () => {
  return (
   <Box backgroundColor='orange'>
    <div>

              <Flex>
                   <Box p='4' >
<<<<<<< HEAD
                   <Link to={"/"}>
                     <p>TecnoStore</p>
                   </Link>
                   </Box>
                   <Spacer />

                   <Menu>
        <MenuButton>
          Categorias
        </MenuButton>
        <MenuList>
          <Link to={'/Categoria/Notebooks'}>
            <MenuItem>Notebooks</MenuItem>
          </Link>
          <Link to={'/Categoria/Monitores'}>
            <MenuItem>Monitores</MenuItem>
          </Link>
          <Link to={'/Categoria/Perifericos'}>
            <MenuItem>Perifericos</MenuItem>
          </Link>
        </MenuList>
      </Menu> 
=======
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
>>>>>>> f1e4275cb674659394df947d754fd81671a97415

                     <Spacer />


                   <Box p='4' >
<<<<<<< HEAD
                    <Link to={'/cart'}>
                      <CartWidget />
                    </Link>
=======
                     <CartWidget />
>>>>>>> f1e4275cb674659394df947d754fd81671a97415
                   </Box>
              </Flex>


          
    </div>
  </Box> 
  )
}

export default Navbar