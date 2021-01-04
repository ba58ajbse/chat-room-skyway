import Peer from 'skyway-js'

const skywayKey = process.env.REACT_APP_SKYWAY_KEY
const peer = skywayKey !== undefined ? new Peer({ key: skywayKey }) : ''

export default peer
