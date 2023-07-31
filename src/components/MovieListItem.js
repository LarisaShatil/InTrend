import { GridItem, Card, CardBody, Heading, Image, Text, Box } from '@chakra-ui/react'
import React from 'react';

import Like from '../images/like.svg';

export const MovieListItem = ({ movie }) => {
  const { title, name, poster_path, release_date, first_air_date
    , vote_average } = movie;
  let date;

  if (release_date || first_air_date) {
    date = release_date ? release_date.slice(0, 4) : first_air_date.slice(0, 4);;
  } else {
    date = undefined;
  }
  
  return (
    <GridItem width='90%' ml='auto' mr='auto' _hover={{ padding: '2px' }} >
      <Card overflow='hidden' m='0 auto' >
        <Image
          objectFit='cover'
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title || name}
        />
        <CardBody p='4' height='96px' overflow='hidden' >
          <Heading as='h2' size='xs' filter='blur(0.4px)'>
            {title || name}
          </Heading>
          <Box display='flex' color='blue.700'>
            <Text >{date }</Text>
            <Text ml='2' mr='2' fontWeight='bold' color='orange.500'>|</Text>
            <Text mr='1' fontWeight='semibold'>{vote_average.toFixed(2)}</Text>
            <Image src={Like} alt='average votes' w='22px' />
          </Box>

        </CardBody>
      </Card>
    </GridItem>
  )
}
