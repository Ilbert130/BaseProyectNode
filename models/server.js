import express, {Application} from 'express';
import dbConnection from '../db/connection';
import cors from 'cors';
import { UserRoutes } from '../routes';


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            users: '/api/users'
        }
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