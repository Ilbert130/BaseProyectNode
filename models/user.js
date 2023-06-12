import { Schema, model } from "mongoose";

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        unique: true
    },
    password: {
        type: String, 
        required: [true, 'The password is required']
    },
    img: {
        type:String
    },
    role: [{
        type: Schema.Types.ObjectId, 
        ref: 'Role',
        required: true,
    }],
    state: {
        type: Boolean,
        default: true
    }
});

UserSchema.methods.toJSON = function() {
    const {__v, password, _id, ...user} = this.toObject();
    user.uuid = _id;
    return user;
}

export default model('User', UserSchema);