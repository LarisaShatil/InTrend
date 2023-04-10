// сторінка з детальною інформацією про кінофільм
import { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { Outlet, Link, useLocation, useParams } from "react-router-dom";
import { Box, Container, Heading } from '@chakra-ui/react';

import { getMovieById } from "services/services";
import { MovieCard } from "../components/MovieCard";
import { ReturnButton } from "../components/ReturnButton";
import NotFoundBox from "components/NotFoundBox";

const InfoLink = styled(Link)`
color: white;
font-weight: 500;
margin-right: 1rem;

&:focus{
  color: #FF3D00;
}

&:hover,
&:active
{
  color: #0F1D24;
}`;

const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId)
      .then(data => {
        setMovie(data);
      });

  }, [movieId]);


  if (!movie) {
    return <NotFoundBox />;
  }

  return (
    <>
      <Container as='section' maxWidth='4xl' borderRadius='lg' p='4'>
        <ReturnButton />
        <MovieCard movie={movie} />
        <Heading as='h3' size='md' m='1rem 0' color='white'>Additional information</Heading>
        <Box display='flex'>
          <InfoLink state={location.state} to="cast">
            Cast
          </InfoLink>
          <InfoLink state={location.state} to="reviews">
            Review
          </InfoLink>
        </Box>
      </Container>
      <Container as='section' maxWidth='4xl' borderRadius='lg' p='4'>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default MovieDetails;