import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Box display='flex' lineHeight='1'>
      <Box backgroundColor='orange.500' borderRadius='0.5rem' padding=' 0.1rem 0.2rem'>
        <Heading color='white' lineHeight='0.8'>in</Heading>
      </Box>

      <Heading color='orange.500' lineHeight='1' marginLeft='0.2rem'>Trend</Heading>
    </Box>

  )
}

export default Logo