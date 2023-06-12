import { Schema, model } from "mongoose";

const RoleSchema = Schema({
    role:{
        type: String,
        required: [true, 'The role is required']
    },
    state: {
        type: Boolean,
        default: true
    }
});

RoleSchema.methods.toJSON = function() {
    const {__v, ...role} = this.toObject();
    return role;
}

export default model('Role', RoleSchema);