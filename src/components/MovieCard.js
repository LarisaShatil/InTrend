import { Heading, Text, Box, Image } from '@chakra-ui/react';
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

  const companyLogo = production_companies.length > 0 ? production_companies[0]['logo_path'] : false;
  const releaseDate = new Date(release_date);
  const [month, day, year] = [
    releaseDate.toString().slice(3, 8),
    releaseDate.getDate(),
    releaseDate.getFullYear(),
  ];

  return (
    <>
      <Box display={{ base: 'box', md: 'flex'}}>
        <Box >
          <Image
            borderRadius='lg'
            objectFit='cover'
            maxWidth='480px'
            maxHeight='362px'
            margin={{ base: '0 auto' }}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `http://blog.aspneter.com/Images/no-thumb.jpg`
            }
            alt={title || name}
          />
        </Box>
        <Box ml='4'>
          <Box display='flex' mt={{ base: '1rem', md: '0' }}>
            <Heading as='h2' size='lg' mr='1rem' >
              {title || name}
            </Heading>
            {companyLogo && (
              <Box maxWidth='4rem' ml='auto' position='relative'>
                <Image maxWidth='4rem' maxHeight='4rem' ml='auto' position='absolute' top='0' left='0' src={`https://image.tmdb.org/t/p/w200${companyLogo}`} />
              </Box>
               
            )}
          </Box>

          {tagline && <Text as='cite'>{tagline}</Text>}
         
          <Heading as='h3' size='md' color='white' marginTop='0.5rem'>Release date: </Heading>
          <Text>{month} {day}, {year}</Text>
          <Heading as='h3' size='md' color='white' marginTop='0.5rem'>Rating: </Heading>
          <Text><b>{vote_average.toFixed(2)}</b>  ( {vote_count.toLocaleString('fr-FR')} ) </Text>
          <Heading as='h3' size='md' color='white' marginTop='0.5rem'>Genres:</Heading>
          <Text>{genres.map(genre => genre.name).join(', ')}</Text>
          {overview && (
            <>
              <Heading as='h3' size='md' color='white' marginTop='0.5rem'>Overview: </Heading>
              <ExpandableText text={overview} number={3} />
            </>
          )}
        </Box>
      </Box>
    </>
  );
};
