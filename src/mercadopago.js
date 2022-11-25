const mercadopago = require("mercadopago");
require("dotenv").config();

mercadopago.configure({
    access_token : "APP_USR-3490241716933301-102311-9c0e4de551281c5d09a2eefcac82762e-1223457188",
    })

  
    module.exports = {mercadopago};