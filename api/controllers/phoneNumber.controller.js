// phoneNumber.controller.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const phoneNumber = async (req, res) => {
    let { phoneNumber } = req.body;
    phoneNumber = phoneNumber.replace(/\D/g, '');   
    // console.log('received phone number', phoneNumber);
    if (phoneNumber.startsWith('91')) {
        phoneNumber = phoneNumber.slice(2); // Remove country code '91'
    }
    try {
        // console.log('executing db query', phoneNumber)
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { OwnerContact: phoneNumber },
                    { TenantContact: phoneNumber }
                ]
            }
        });
        // console.log('user found', user)

        const phoneNumberExists = !!user;
        res.status(200).json({ phoneNumberExists, user }); // Send phoneNumberExists and user in the response
    } catch (error) {
        console.error('Error checking phone number:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
