const express = require("express");
const app = express();
const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`server listening on port \x1b[32m${PORT}\x1b[0m`);
});

// require('dotenv').config()
// const express = require('express')
// const jwt = require('jsonwebtoken')
// const app = express()
// const cors = require('cors')
// const { PORT } = process.env
// const router = require('./routes')
// const connectDB = require('./db')

// app.use(
//   express.urlencoded({
//     extended: true,
//   }),
// )
// app.use(
//   cors({
//     origin: '*',
//   }),
// )

// app.options('*', cors())

// /**
//  * USER ON-BOARDING ROUTES
//  */
// app.use('/api', router)

// // app.get('/api/v1', (req, res) => {
// //   res.json({
// //     message: 'Welcome to Biscoff Bakery API',
// //   })
// // })

// // /**
// //  * PRODUCTS ROUTES
// //  */
// // app.get('/api/v1/products/:slug', productsController.getProductBySlug)
// // app.get('/api/v1/products', productsController.listProducts)

// // /**
// //  * MISC ROUTES
// //  */
// // app.post('/api/v1/send-contact-form', contactFormController.sendForm)

// // connect to DB, then inititate Express app
// connectDB
//   .then((response) => {
//     app.listen(PORT, () => {
//       console.log(`server listening on port \x1b[34m${PORT}\x1b[0m`)
//     })
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// function verifyJWT(req, res, next) {
//   // get the jwt token from the request header
//   const authToken = req.headers.auth_token

//   // check if authToken header value is empty, return err if empty
//   if (!authToken) {
//     res.json({
//       success: false,
//       message: 'Auth header value is missing',
//     })
//     return
//   }

//   // verify that JWT is valid and not expired
//   try {
//     // if verify success, proceed
//     const userData = jwt.verify(authToken, process.env.JWT_SECRET, {
//       algorithms: ['HS384'],
//     })
//     next()
//   } catch (err) {
//     // if fail, return error msg
//     res.json({
//       success: false,
//       message: 'Auth token is invalid',
//     })
//     return
//   }
// }
