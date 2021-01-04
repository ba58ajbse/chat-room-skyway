import React, { useState, useEffect } from 'react'
import peer from '../skyway-config'
import '../assets/App.css'
import Main from './Main'
import SignIn from './SignIn'

const App: React.FC = () => {
  const [name, setName] = useState('')
  const [localId, setLocalId] = useState('')

  useEffect(() => {
    if (peer) {
      peer.once('open', (id) => setLocalId(id))
    }
  }, [localId])

  if (name && peer && localId !== '') {
    return <Main name={name} id={localId} />
  }
  return <SignIn setName={setName} />
}

export default App
