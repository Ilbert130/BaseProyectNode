import express, {Application} from 'express';


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
    }

}