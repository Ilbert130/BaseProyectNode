import express from 'express';
import dbConnection from '../db/connection.js';
import cors from 'cors'; 
import {router as UserRoutes} from '../routes/users.js';
import {router as RoleRoutes} from '../routes/roles.js';
import {router as AuthRoutes} from '../routes/auth.js';
import {router as ProductRoutes} from '../routes/products.js';
import {router as UploadRoutes} from '../routes/uploads.js';
import fileUpload from 'express-fileupload';


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            users: '/api/users',
            roles: '/api/roles',
            products: '/api/products',
            auth: '/api/auth',
            uploads: '/api/uploads'
        }

        //Connect to db
        this.connecteDB();

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();

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

        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true 
        }));
    }

    routes(){
        this.app.use(this.paths.auth, AuthRoutes);
        this.app.use(this.paths.users, UserRoutes);
        this.app.use(this.paths.roles, RoleRoutes); 
        this.app.use(this.paths.products, ProductRoutes);
        this.app.use(this.paths.uploads, UploadRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server runnig in this port', this.port);
        })
    }
}

export default Server;