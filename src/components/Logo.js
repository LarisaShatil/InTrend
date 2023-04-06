import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Box display='flex' alignItems='center'>
      <Box backgroundColor='orange.500' borderRadius='0.5rem' padding=' 0rem 0.2rem 0.1rem'>
        <Heading color='white' lineHeight='1'>in</Heading>
      </Box>

      <Heading color='orange.500' marginLeft='0.2rem'>Trend</Heading>
    </Box>

  )
}

export default Logo