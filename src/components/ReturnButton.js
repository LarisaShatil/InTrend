import { Box, Image, Text } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';

import Arrow from '../images/left-arrow.svg';

export const ReturnButton = () => {
  const location = useLocation();

  return (
    <NavLink
      to={location?.state?.from ?? '/'}
      type="button"
    >
      <Box display='flex' marginLeft='1rem' width='1rem' _hover={{ width: '1.2rem', color: 'orange.500' }}>
        <Image src={Arrow} width='inherit' marginRight='0.5rem' />
        <Text display='inline' fontWeight='500'>back</Text>
      </Box>
    </NavLink>
  );
};
