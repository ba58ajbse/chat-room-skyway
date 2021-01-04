import React from 'react'

type PropType = {
  name: string
  id: string
}
const Main: React.FC<PropType> = ({ name, id }) => {
  return (
    <div>
      <p>id: {id}</p>
      <p>name: {name}</p>
    </div>
  )
}

export default Main
