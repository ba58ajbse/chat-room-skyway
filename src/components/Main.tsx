import React, { useState, useEffect } from 'react'
import peer from '../skyway-config'

const Main: React.FC = () => {
  const [localId, setLocalId] = useState('')

  useEffect(() => {
    if (peer) {
      peer.once('open', (id) => setLocalId(id))
    }
  }, [localId])

  return (
    <div>
      <p>{localId}</p>
    </div>
  )
}

export default Main
