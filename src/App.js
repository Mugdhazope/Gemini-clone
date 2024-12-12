import React from 'react'
import Siderbar from './Components/Sidebar/Siderbar'
import Main from './Components/Main/Main'

const App = () => {
  //only link pages in app.js and not the display content or logic
  return (
    <>
    <Siderbar/>
    <Main/>

    </>
  )
}

export default App