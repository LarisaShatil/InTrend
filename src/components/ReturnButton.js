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
      <Box display='flex' width='1rem' fontWeight='500' marginBottom='0.8rem' _hover={{ width: '1.2rem', color: 'orange.500', fontWeight: '700' }}>
        <Image src={Arrow} width='inherit' marginRight='0.5rem' />
        <Text>back</Text>
      </Box>
    </NavLink>
  );
};
