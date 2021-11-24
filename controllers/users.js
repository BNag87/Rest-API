import {v4 as uuidv4 } from 'uuid';

//GET all users
export const getUsers = ('/', (req, res) => {
    res.send(users)
})

//CREATE a user
export const createUser = ('/', (req, res) => {
    //bark("POST Route reached! req.body = "+req.body,"router.post", "users.js");

    const user = req.body
    
    users.push({... user, id: uuidv4()})
    
    res.send(`User with the name ${user.firstName} ${user.lastName} was added to the database`);
});

//GET a single user
export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
}

//DELETE a user
export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user => user.id != id))
    res.send(`User ${users.firstName} with id ${id} was deleted from the DB`);
}

//UPDATE a user
export const updateUser = (req, res) => {
    const { id } = req.params; //id supplied in the URL
    const { firstName, lastName, age } = req.body; //must be passed by the body

    const user = users.find((user) => user.id == id); 

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    
    res.send(`User ${firstName} with the id ${id} was updated`);
}