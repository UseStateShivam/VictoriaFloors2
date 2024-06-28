import express from 'express';
import cors from 'cors';
import authRoute from './routes/auth.route.js'
import userRoute from './routes/user.route.js'
import phoneNumberRoute from './routes/phoneNumber.route.js'
import flatWiseDataRequestRoute from './routes/flatWiseData.route.js'
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
dotenv.config()

const prisma = new PrismaClient();
const ADMIN_PASSWORD = process.env.PWORD_ADMIN

const app = express();
app.use(express.json());
app.use(cors({origin: process.env.CLIENT_URL}));

app.get('/', ((req, res) => {
    res.json("Hello")
}))

app.use('/api/auth', authRoute);
// app.use('/api/user', userRoute);
app.use('/api/phoneNumber', phoneNumberRoute);
app.use('/api/flatWiseDataRequest', flatWiseDataRequestRoute);

app.post('/adminCheck', ((req,res) => {
    // res.json("Hello")
    const {adminPass} = req.body
    console.log(adminPass);
    console.log(ADMIN_PASSWORD)
    if(adminPass === ADMIN_PASSWORD) {
        res.send(200).send('Admin Authenticated')
    } else {
        res.send(401).send('Admin Not Authenticated')
    }
}))

app.get('/user/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        // console.log(user.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send('Error fetching user');
    }
});

app.listen(8000, ()=>{
    console.log('server listening')
})
