import { Text } from '@chakra-ui/react';
import React, { useState } from 'react'

const ExpandableText = ({ text }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const ofLines = show ? 'auto' : [1, 2, 3];

  return (
    <>
      <Text noOfLines={ofLines} isOpen={show} onClick={handleToggle}>{text}</Text>
    </>
  )
}

export default ExpandableText