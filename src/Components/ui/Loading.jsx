import React from 'react'
import { Loader,Flex } from '@mantine/core';
import '@mantine/core/styles.css';
function Loading() {
  return (
    <Flex className='w-screen h-screen items-center justify-center' ><Loader color="blue" size="xl"/></Flex>
  )
}

export default Loading