var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var appconfig = require("./config/appconfig");

async function createserver() {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json()); 
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", req.headers.origin);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
        next();
    }); 

    require('./app/Routes')(app,console);
//require('./app')(app,console);


    return app;
  }


async function startServer(){
    let app = await createserver();
    await app.listen({ port: appconfig.apiport });
    console.log("Server has started on port " + appconfig.apiport);
}

if(process.env.NODE_ENV ==="dev" || "prod") startServer();


module.exports= createserver