import {v4 as uuid} from 'uuid';
import path from 'path';


export const uploadFile = (files, validExtension = ['png', 'jpg', 'jpeg', 'gif', 'img'], directory = '') => {

    return new Promise((resolve, reject) => {

        const {file} = files;

        const cutName = file.name.split('.');
        const extension = cutName[cutName.length - 1];

        if(!validExtension.includes(extension)){
            return reject(`The extension ${extension} isn't allow - ${validExtension}`);
        }

        const tempName = uuid() + '.' + extension;
        const uploadPath = path.join(__dirname, '../uploads/', directory, tempName);

        file.mv(uploadPath, (err) => {
            if(err){
                reject(err);
            }

            resolve(tempName);
        });
    });
} 