import React, { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Modal, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import RoomCreate from './RoomCreate'
import RoomList from './RoomList'

type PropType = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  type: string
}

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    close: {
      position: 'absolute',
      top: 0,
      right: 0,
    },
  })
)

const SimpleModal: React.FC<PropType> = ({ open, setOpen, type }) => {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)

  const close = () => {
    setOpen(false)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <IconButton className={classes.close} onClick={close}>
        <CloseIcon />
      </IconButton>
      {type === 'create' && <RoomCreate />}
      {type === 'list' && <RoomList />}
    </div>
  )

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  )
}

export default SimpleModal
