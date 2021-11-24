import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000; //port to use with this app

const bark = (input, blockName, fileName) => {
    console.log("•--------→ DEV MESSAGE FROM:\n  •---FILE→["+fileName+"]---CODE BLOCK→{"+blockName+"}\n        \""+input+"\"")
}

app.use(bodyParser.json()) //use json data
    

app.use('/users', usersRoutes) //when a user vists 'users' page, display userRoutes
    

app.get('/', (req, res) => {
    res.send('Hello from the hompage!');
})


app.listen(PORT, () => {bark(`YayA! Server is running on: http://localhost:${PORT}`,'app.listen','index.js')})

export default bark;