import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

type PropType = {
  setName: React.Dispatch<React.SetStateAction<string>>
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const SignIn: React.FC<PropType> = ({ setName }) => {
  const classes = useStyles()
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [string, setString] = useState('')
  const [isComposed, setIsComposed] = useState(false)

  useEffect(() => {
    const disabled = string === ''
    setBtnDisabled(disabled)
  }, [string])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ようこそ
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="ニックネーム"
            name="name"
            autoFocus
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setString(e.target.value)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (isComposed) return
              if (e.key === 'Enter') {
                setName(string)
                e.preventDefault()
              }
            }}
            onCompositionStart={() => setIsComposed(true)}
            onCompositionEnd={() => setIsComposed(false)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={btnDisabled}
            onClick={() => setName(string)}
          >
            はじめる
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default SignIn
