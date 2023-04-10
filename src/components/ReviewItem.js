import { List, ListItem, Box, Image, Heading } from "@chakra-ui/react"

import ExpandableText from "./ExpandableText"
import Avatar from '../images/avatar-default.svg';

export const ReviewItem = ({ reviews }) => {

  return (
    <List spacing={3}>
      {reviews.map(review =>
        <ListItem key={review.id} display='flex' padding='0.5rem' borderRadius='0.5rem' backgroundColor='blue.700'>
          <Box  textAlign='center' minWidth='20%'>
            <Image display='block' margin='auto' src={Avatar} maxWidth='3rem' />
            <Heading as='h4' size='sm' noOfLines={1}>{review.author}</Heading> 
          </Box>
          <Box _hover={{cursor:'pointer'}} marginLeft='1rem'>
            <ExpandableText text={review.content} number={3} />
          </Box>
        
        </ListItem>
      )}
    </List>


  )
}