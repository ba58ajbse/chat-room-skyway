import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText, Button } from '@material-ui/core'
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

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
  })
)
const RoomCreate: React.FC<PropType> = ({ close }) => {
  const classes = useStyles()
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
    <List className={classes.root}>
      {roomList &&
        roomList.map((room) => {
          return (
            <ListItem key={room.id}>
              <ListItemText id={room.name} primary={room.name} />
              <Button type="button">接続</Button>
            </ListItem>
          )
        })}
    </List>
  )
}

export default RoomCreate
