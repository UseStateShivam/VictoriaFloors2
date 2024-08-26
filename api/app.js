import express from 'express';
import cors from 'cors';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import phoneNumberRoute from './routes/phoneNumber.route.js';
import flatWiseDataRequestRoute from './routes/flatWiseData.route.js';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import healthCheckRouter from './routes/healthCheckRoute.js';
dotenv.config();

const prisma = new PrismaClient();
const ADMIN_PASSWORD = process.env.PWORD_ADMIN;

const app = express();
app.use(express.json());

// Update CORS options to handle multiple origins
const corsOptions = {
  origin: [process.env.CLIENT_URL, 'https://usestateshivam.github.io', 'https://usestateshivam.github.io/victoriaDeploy', 'http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true, // if you need to include cookies in CORS requests
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
  optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json("Hello");
});

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/phoneNumber', phoneNumberRoute);
app.use('/api/flatWiseDataRequest', flatWiseDataRequestRoute);
app.use('/healthCheck', healthCheckRouter);

app.post('/adminCheck', (req, res) => {
  const { adminPass } = req.body;
  console.log(adminPass);
  console.log(ADMIN_PASSWORD);
  if (adminPass === ADMIN_PASSWORD) {
    res.status(200).send('Admin Authenticated');
  } else {
    res.status(401).send('Admin Not Authenticated');
  }
});

app.get('/user/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Error fetching user');
  }
});

app.listen(8000, () => {
  console.log('server listening on port: 8000');
});
