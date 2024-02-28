const fastify = require('fastify')()
const mongoose = require('mongoose')
require('dotenv').config();
const routes = require('./src/routes/routes')

mongoose.connect('mongodb://localhost:27017/submit_otp')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

fastify.register((instance, opts, done) => {
    routes.forEach(route => {
        instance.route(route);
    });
    done();
})

fastify.listen({ port: process.env.PORT }, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server is running on ${process.env.PORT}`);
});