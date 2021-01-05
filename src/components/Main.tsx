import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core'
import SimpleModal from './Modal'

type PropType = {
  name: string
  id: string
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 12,
    marginBottom: 12,
  },
  button: {
    display: 'block',
  },
})

const Main: React.FC<PropType> = ({ name, id }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [modalType, setModalType] = useState('')

  const modalOpen = (type: 'create' | 'list') => {
    setOpen(true)
    setModalType(type)
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Button size="small">アイコンを変更する</Button>
        <Avatar className={classes.avatar} />
        <Typography variant="h5" component="h2">
          <span className={classes.name}>name: </span>
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          ID: {id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => modalOpen('create')}>
          CREATE ROOM
        </Button>
        <br />
        <Button size="small" onClick={() => modalOpen('list')}>
          SHOW ROOM
        </Button>
      </CardActions>
      <SimpleModal open={open} setOpen={setOpen} type={modalType} />
    </Card>
  )
}

export default Main
