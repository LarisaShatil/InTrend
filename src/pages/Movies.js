import { Outlet, useParams } from "react-router-dom";
import { Heading } from '@chakra-ui/react';

import SearchForm from "components/SearchForm";

export const Movies = () => {
  const { movieId } = useParams();

  return (
    <>

      {movieId ? <></> :
        <>
          <Heading as='h2' textAlign='center' m='1rem 1rem 0 0 ' color='white'>Find movie by name</Heading>
          <SearchForm />
        </>
      }
      <Outlet />
    </>
  )
};