import dotenv from 'dotenv';
import Server from './models/server.js';

// Setting up the env
dotenv.config();

const server = new Server();
server.listen();