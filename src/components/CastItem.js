import React from 'react'
import { Card, CardBody, Image, Heading } from '@chakra-ui/react'

import ExpandableText from './ExpandableText'

const CastItem = ({ actor }) => {

  return (
    <Card key={actor.id} margin='0 0.5rem 0.5rem' overflow='hidden' backgroundColor='none'>
      <Image
        objectFit='cover' 
        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
        alt={actor.name}
      />
      <CardBody fontSize='xs' color='blue.100'>
        <Heading as='h4' size='xs' filter='blur(0.4px)'>{actor.name}</Heading>
        <ExpandableText text={actor.character || "No info"} number={1} />
      </CardBody>
    </Card>
  )
}

export default CastItem