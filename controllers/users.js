import { request, response } from "express";
import User from '../models/user.js';



export const userGet = async(req=request, res= response) => {

    const {limit = 5, since = 0} = req.query;
    const query = {state:true};

    const [total, users] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
            .skip(+since)
            .limit(+limit)
    ]);

    res.json({
        total,
        users
    })
}