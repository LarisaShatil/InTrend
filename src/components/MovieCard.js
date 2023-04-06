import { Heading, Container, Text, Box, Image } from '@chakra-ui/react';
import ExpandableText from './ExpandableText';

export const MovieCard = ({ movie }) => {
  const {
    poster_path,
    title,
    tagline,
    name,
    release_date,
    vote_average,
    vote_count,
    production_companies,
    overview,
    genres,
  } = movie;

  const companyLogo = production_companies[0]['logo_path'];
  const releaseDate = new Date(release_date);
  const [month, day, year] = [
    releaseDate.toString().slice(3, 8),
    releaseDate.getDate(),
    releaseDate.getFullYear(),
  ];
  if (!poster_path) {
    console.log('no path');
  }

  return (
    <>
      <Container as='section' maxWidth='4xl' borderRadius='lg' p='4'>
        <Box display='flex'>
          <Box >
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
          <Box ml='4' position='relative'>
            <Heading as='h2' size='lg' >
              {title || name}
            </Heading>
            {tagline && <Text as='cite'>{tagline}</Text>}
            {companyLogo && (
              <Box maxWidth='4rem' position='absolute' top='1rem' right='1rem'>
                <Image src={`https://image.tmdb.org/t/p/w200${companyLogo}`} />
              </Box>
            )}
            <Heading as='h3' size='md' color='white' marginTop='0.5rem'>Release date: </Heading>
            <Text>{month} {day}, {year}</Text>
            <Heading as='h3' size='md' color='white' marginTop='0.5rem'>Rating: </Heading>
            <Text><b>{vote_average.toFixed(2)}</b>  ( {vote_count.toLocaleString('fr-FR')} ) </Text>
            <Heading as='h3' size='md' color='white' marginTop='0.5rem'>Genres:</Heading>
            <Text>{genres.map(genre => genre.name).join(', ')}</Text>
            {overview && (
              <>
                <Heading as='h3' size='md' color='white' marginTop='0.5rem'>Overview: </Heading>
                <ExpandableText text={overview} />
              </>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
};
