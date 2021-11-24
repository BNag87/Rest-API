import express from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';
import bark from '../index.js'


const router = express.Router();

let users = []

//all routes in here will start with /users
    //this code gets all users, console logs them and sends them to the webpage
router.get("/", (req, res) => {
    console.log(users)
    res.send(users);
    bark("router.get was fired and showed the users.js route!","router.get","users.js");
    bark("users object contains "+users, "router.get", "users.js");
});

//remember, browsers can only make GET requests. We need software
//to test our api. (postman in this case)

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

//PUT methods completely overwrite an entry
//PATCH partially overwrites

router.patch('/:id' , updateUser);

export default router;