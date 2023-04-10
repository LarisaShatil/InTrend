import React, { useState } from 'react'
import { Text } from '@chakra-ui/react';

const ExpandableText = ({ text, number }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const ofLines = show ? 'auto' : [number];

  return (
    <>
      <Text color='inherit' fontSize='inherit' noOfLines={ofLines} onClick={handleToggle}>{text}</Text>
    </>
  )
}

export default ExpandableText