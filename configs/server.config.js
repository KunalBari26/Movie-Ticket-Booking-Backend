require('dotenv').config();
let port = 3030
if(process.env.ENVIRONMENT === 'development'){
    port = process.env.PORT
}

module.exports ={
    PORT : port
}