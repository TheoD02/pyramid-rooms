import socketIOClient from 'socket.io-client';

const ENDPOINT = 'pyramidsgame.herokuapp.com:3001'
const socket = socketIOClient(ENDPOINT, {transports: ['websocket']});

export default socket;