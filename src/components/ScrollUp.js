import React from 'react';
import { Box } from "@chakra-ui/react";

let calcScrollValue = () => {
  let scrollProgress = document.getElementById('progress');
  let progressValue = document.getElementById('progress-value');
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos*100)/calcHeight)
  if (pos > 100) {
    scrollProgress.style.display = 'grid';
  } else {
    scrollProgress.style.display = 'none';
  }
  scrollProgress.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  })
}

window.onscroll = calcScrollValue;
window.onload=calcScrollValue;

const ScrollUp = () => {
  return (
    <Box id='progress'
      zIndex='12'
      bg='blue.800'
      position='fixed'
      bottom='5rem'
      right={{ base: '2rem', md: '3rem', lg: '5rem' }}
      height='3rem'
      width='3rem'
      borderRadius='50%'
      boxShadow='dark-lg'
      display='grid'
      placeItems='center'
      border='3px solid white'
      cursor='pointer'
      _hover={{ bg: 'blue.900', border: '3px solid #FF3D00', color:'#FF3D00' }}
    >
      <Box id='progress-value'
        
        // display='block'
        // height='100%'
        // width='100%'
        // border='2px solid white'
        // borderRadius='50%'
        // m='auto'
        // textAlign='center'
      >Up</Box>
    </Box>
  )
}

export default ScrollUp