import React from 'react';
import { Box } from "@chakra-ui/react";

let calcScrollValue = () => {
  let scrollProgress = document.getElementById('progress');
  let pos = document.documentElement.scrollTop;

  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = 'grid';
  } else {
    scrollProgress.style.display = 'none';
  }

  scrollProgress.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#FF602E ${scrollValue}%, #f5f0e1 ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

const ScrollUp = () => {
  return (
    <Box id='progress'
      zIndex='12'
      position='fixed'
      display='grid'
      placeItems='center'
      cursor='pointer'
      bottom='5rem'
      right={{ base: '2rem', md: '3rem', lg: '5rem' }}
      height='3rem'
      width='3rem'
      color='blue.700'
      borderRadius='50%'
      boxShadow='dark-lg'
      _hover={{ color: '#FF3D00' }}
    >
      <Box id='progress-value'
        display='block'
        height='calc(100% - 10px)'
        width='calc(100% - 10px)'
        background='#f5f0e1'
        fontSize='2.2rem'
        fontWeight='900'
        lineHeight='0.9'
        borderRadius='50%'
        textAlign='center'
        transform='rotate(180deg)'
        _hover={{transform:'rotate(0deg)'}}
      >
        &#8593;
      </Box>
    </Box>
  )
}

export default ScrollUp