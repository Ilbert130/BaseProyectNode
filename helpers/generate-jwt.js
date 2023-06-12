import * as jwt from 'jsonwebtoken';


export const generateJWT = (uuid = '') => {

    //Return a promise
    return new Promise((resolve, reject) => {

        const payload = {uuid};

        //Create the JWT
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, (error, token) => {

            if(error){
                console.log(error);
                reject('The token could not be generated')
            }else{
                resolve(token);
            }
        });
    });
}