import express from 'express';
import dbConnection from '../db/connection.js';
import cors from 'cors';
import {router as UserRoutes} from '../routes/users.js';


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            users: '/api/users'
        }

        //Connect to db
        this.connecteDB();

        //Middlewares
        this.middlewares()

        //Routes
        this.routes()
    }

    async connecteDB() {
        await dbConnection();
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //Parsing body request to JSON
        this.app.use(express.json());

        //Setting public directory
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.paths.users, UserRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server runnig in this port', this.port);
        })
    }
}

export default Server;