const express = require('express');
const bodyParser = require('body-parser');

const { PORT }= require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const db = require('./models/index');


const app = express();


const setupAndStartServer= ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);




    app.listen(PORT,()=>{
        console.log(`server is started on port ${PORT}`);
        if(process.env.DB_SYNC){
            db.Sequelize.sync({alter:true});
        }

    })
}


setupAndStartServer();