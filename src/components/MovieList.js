import { SimpleGrid } from '@chakra-ui/react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import { MovieListItem } from './MovieListItem';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        <SimpleGrid
          spacing={4}
          templateColumns='repeat(auto-fill, minmax(260px, 1fr))'
        >
          {movies.map(({ id, ...movie }) => {
            return (
              movie.poster_path && <li key={id}>
                  <NavLink
                    to={`/movies/${id}`}
                    state={{ from: location }}
                  >
                    <MovieListItem key={id} movie={movie} />
                  </NavLink>
              </li>
            );
          })}
        </SimpleGrid>
      </ul>

      <Outlet />
    </>
  );
};
