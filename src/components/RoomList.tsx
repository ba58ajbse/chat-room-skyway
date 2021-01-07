import React, { useState, useEffect } from 'react'
import { roomsRef } from '../firebase'

type PropType = {
  close: () => void
}
type EntryType = [string, { name: string; password: string }]
type RoomType = {
  id: string
  name: string
  password: string
}

const RoomCreate: React.FC<PropType> = ({ close }) => {
  const [roomList, setRoomList] = useState<RoomType[]>([])

  useEffect(() => {
    roomsRef.orderByKey().on('value', (snapshot) => {
      const rooms = snapshot.val()
      const entries = Object.entries(rooms)
      const newRoomList = entries.map((entry) => {
        const [id, nameAndPass] = entry as EntryType
        return { id, ...nameAndPass }
      })
      setRoomList(newRoomList)
    })
  }, [])

  return (
    <div>
      <span>Room List Modal</span>
    </div>
  )
}

export default RoomCreate
