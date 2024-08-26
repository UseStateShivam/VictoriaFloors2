import express from 'express';

const healthCheckRouter = express.Router();

healthCheckRouter.get('/', (req, res) => {
    res.status(200).send('API is up and running');
});

export default healthCheckRouter;