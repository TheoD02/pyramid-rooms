import socketIOClient from 'socket.io-client';

const ENDPOINT = '192.168.1.50:3001';
const socket = socketIOClient(ENDPOINT, {transports: ['websocket']});

export default socket;