// phoneNumber.controller.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const flatWiseData = async (req, res) => {
    let { flatNumber } = req.body;
    console.log('Received flat number:', flatNumber);  // Log received flat number
    try {
        console.log('Executing DB query for flat number:', flatNumber);
        const user = await prisma.user.findFirst({
            where: {
                FlatNo: flatNumber
            }
        });
        console.log('User found:', user);

        const flatNumberExists = !!user;
        res.status(200).json({ flatNumberExists, user }); 
    } catch (error) {
        console.error('Error checking flat number:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
