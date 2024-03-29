import { Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from 'components/Box';
import { MovieList } from 'components/MovieList';
import { getTrendingMovies, getTrendingPeople } from 'services/services';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularPeople, setpopularPeople] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies);
    // getTrendingPeople().then(setpopularPeople);
  }, []);
  // console.log("popularPeople", popularPeople);
  return (
    <Box >
      <Box pt='10px' pb='10px'>
        <Heading as='h2' textAlign='center' m='1rem 0' color='white' opacity='0.8'>Trending today</Heading>
        <MovieList movies={trendingMovies} />
      </Box>

      <Outlet />
    </Box>
  );
};
