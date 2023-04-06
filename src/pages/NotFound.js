import { Image, Box, Heading, Text } from '@chakra-ui/react';
import { ReturnButton } from 'components/ReturnButton';

import Error from '../images/404-not-found.png';

const NotFound = () => {
  return (
    <>

      <Box display='flex' alignItems='center' justifyContent='center' marginTop='2rem'>
        <Image src={Error} alt='Nothing was found' />
        <Box>
          <Heading>Oops! Something went wrong...</Heading>
          <Text marginBottom='0.5rem'>Maybe it is time to go home?</Text>
          <ReturnButton />
        </Box>

      </Box>

    </>
  );
};

export default NotFound;
