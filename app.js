import express from 'express';
import router from './routes/web.js';

const app = express();
const port = process.env.PORT || 3000;

// set template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));


// load routes
app.use('/', router);
app.use('/services', router);
app.use('/skill', router);
app.use('/contact', router);


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})
