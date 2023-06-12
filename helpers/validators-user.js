import User from "../models/user"





//verifying if the email exist
const existEmail = async(email) => {
    const emailExist = await User.findOne({email});
    if(emailExist){
        throw new Error(`The email ${email} already exist`);
    }
}

//POST
export const validatorUserPOST = [
    
]