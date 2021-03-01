import express from 'express';

const app = express();


app.get('/', (request, response) => {
    response.status(200).json({
        message: 'message'
    })
})


app.listen(3000, () => {
    console.log('foi');
})
