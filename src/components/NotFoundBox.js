import React from 'react'
import { Image, Box, Heading, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import Error from '../images/404-not-found.png';

const NotFoundBox = () => {
  return (
    <Box display='flex' alignItems='center' height='70vh' alignContent='center' justifyContent='center' marginTop='2rem'>
      <Image src={Error} alt='Nothing was found' />
      <Box _hover={{ color: 'orange.400', fontWeight: '500' }}>
        <NavLink to={'/'}>
          <Heading>Oops! Something went wrong...</Heading>
          <Text marginBottom='0.5rem' >Maybe it is time to go home?</Text>
        </NavLink>
      </Box>
    </Box>
  )
}

export default NotFoundBox;