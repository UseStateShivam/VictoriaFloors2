import prisma from "../lib/prisma.js"
// import ('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();

export const register = async (req, res) => {
    const {
        NameOfOwner,
        NameOfTenant,
        FlatNo,
        ResidingSince,
        AdharNo,
        OwnerContact,
        TenantContact,
        WorkPlace,
        PermanentTenantAddress,
        OwnerAddress,
        FourWheelerNo,
        TwoWheelerNo,
        RestNameAdharContact,
        PoliceVerificationSubmitted,
        RentAgreementSubmitted,
    } = req.body

    try{
        const newUser = await prisma.user.create({
            data: {
                NameOfOwner,
                NameOfTenant,
                FlatNo,
                ResidingSince,
                AdharNo,
                OwnerContact,
                TenantContact,
                WorkPlace,
                PermanentTenantAddress,
                OwnerAddress,
                FourWheelerNo,
                TwoWheelerNo,
                RestNameAdharContact,
                PoliceVerificationSubmitted,
                RentAgreementSubmitted, 
            }
        })
        // console.log(newUser)
        res.status(201).json({message: "user created successfully"})
    }catch(err){
        console.log(err)
        res.status(500).json({message: "user not created"})
    }
}
        