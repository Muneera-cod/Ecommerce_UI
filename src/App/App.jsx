import React from 'react'
import { router } from '../Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
function App() {
  return (
   <MantineProvider>
     <RouterProvider router={router}></RouterProvider>
   </MantineProvider>
  )
}

export default App