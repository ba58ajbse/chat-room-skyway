import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField, Typography } from '@material-ui/core'
import { createRoom } from '../firebase'

type PropType = {
  close: () => void
}

const useStyles = makeStyles(() => ({
  form: {
    width: '100%',
    marginTop: 10,
  },
  submit: {
    marginTop: 10,
  },
}))
const RoomCreate: React.FC<PropType> = ({ close }) => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const roomCreate = () => {
    createRoom(name, password)
    close()
  }

  return (
    <form className={classes.form} noValidate>
      <div>
        <Typography component="h1" variant="h5">
          部屋を作成する
        </Typography>
        <TextField
          id="room-name"
          name="room-name"
          label="部屋名"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
      </div>
      <div>
        <TextField
          id="password"
          name="password"
          label="パスワード"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </div>
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={() => roomCreate()}
      >
        作成
      </Button>
    </form>
  )
}

export default RoomCreate
