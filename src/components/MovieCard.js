import { Heading, Container, Text, Box, Image } from '@chakra-ui/react';

export const MovieCard = ({ movie }) => {
  const {
    id,
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  return (
    <>
      <Container as='section' maxWidth='4xl' borderRadius='lg' p='4'>
        <Box display='flex'>
          <Box>
            <Image
              borderRadius='lg'
              objectFit='cover'
              maxWidth='480px'
              maxHeight='362px'
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `http://blog.aspneter.com/Images/no-thumb.jpg`
              }
              alt={title || name}
            />
          </Box>
          <Box ml='4'>
            <Heading as='h2' size='lg' >
              {title || name} ({release_date.slice(0, 4)})
            </Heading>
            <Heading as='h3' size='md' color='white'>Score: </Heading>
            <Text>{Math.round((vote_average / 10) * 100)}%</Text>
            {overview ? (
              <>
                <Heading as='h3' size='md' color='white'>Overview: </Heading>
                <Text>{overview}</Text>
              </>
            ) : (
              <></>
            )}
            <Heading as='h3' size='md' color='white'>Genres:</Heading>
            <Text>{genres.map(genre => genre.name).join(', ')}</Text>
          </Box>
        </Box>
      </Container>
    </>
  );
};
