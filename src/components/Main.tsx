import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core'

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
        <Button size="small">CREATE ROOM</Button>
        <br />
        <Button size="small">SHOW ROOM</Button>
      </CardActions>
    </Card>
  )
}

export default Main
