'use client'
import { useParams } from 'next/navigation';
import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { app } from '../../config';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  NameOfOwner: string;
  NameOfTenant?: string;
  FlatNo: string;
  ResidingSince: string;
  AdharNo: string;
  OwnerContact: string;
  TenantContact?: string;
  WorkPlace?: string;
  PermanentTenantAddress?: string;
  OwnerAddress?: string;
  FourWheelerNo: string;
  TwoWheelerNo: string;
  RestNameAdharContact?: string;
  PoliceVerificationSubmitted?: string;
  RentAgreementSubmitted?: string;
}

function AdminDashboard() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false)
  const params = useParams();
  const { flatNumber } = params;
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null); // Specify the type for user state

  const adminCheck = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const adminPass = formData.get('adminPass')
    // console.log(adminPass)
    try {
      const response = await fetch('https://victoria-project-api.vercel.app/adminCheck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          adminPass
        })
      })
      if(response.ok){
        setIsAdmin(true)
      } else {
        alert('Wrong admin password')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleBackToView = () => {
    router.push('/viewProfile')
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // console.log('Fetching user data for flat number:', flatNumber);
        const response = await axios.post('https://victoria-project-api.vercel.app/flatWiseDataRequest', { flatNumber });
        // console.log('Response from API:', response.data);
        const { user } = response.data;
        setUser(user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (flatNumber) {
      fetchUserData();
    }
  }, [flatNumber, auth.currentUser]); // Add auth.currentUser to the dependencies array

  return (
    <>
      <div className='w-screen h-screen overflow-hidden relative'>
        <div className='w-full h-full -z-[1000000] bg-black absolute'></div>
        <img src='/vid/69.png' className='object-cover w-screen h-screen -z-[10] absolute blur-sm'/>
        <div className='w-[50%] h-[80%] text-xl bg-white bg-opacity-75 rounded-3xl p-10 mx-auto mt-[4.5vw] overflow-auto'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold text-3xl mx-auto pb-5'>Welcome to the Dashboard!</h1>
          </div>
          {!isAdmin && (
            <>
              <div>
                <form onSubmit={adminCheck}>
                  <div className='flex flex-col -mt-[15vh] ml-[25vh]'>
                    <input type="text" placeholder='Enter the admin password' name='adminPass' className='w-fit rounded-3xl px-5 py-2 mt-[12vw]'/>
                    <button type='submit' className='bg-red-600 w-fit text-white p-3 ml-[15vh] rounded-3xl border-red-900 border-2 mt-5'>Submit</button>
                  </div>
                </form>
                <button onClick={handleBackToView} className='bg-red-600 w-fit text-white p-3 ml-[35vh] rounded-3xl border-red-900 border-2 mt-5'>Not the Admin</button>
              </div>
            </>
          )}
          {user && isAdmin && (
            <>
              {user.id && (
                <p className='mt-2 ml-5'><span className='font-semibold'>User ID</span>: {user.id}</p>
              )}
              {user.NameOfOwner && (
                <p className='mt-2 ml-5'><span className='font-semibold'>Name of Owner</span>: {user.NameOfOwner}</p>
              )}
              {user.NameOfTenant && (
                <p className='mt-2 ml-5'><span className='font-semibold'>Name of Tenant:</span> {user.NameOfTenant}</p>
              )}
              {user.FlatNo && (
                <p className='mt-2 ml-5'><span className='font-semibold'>Flat Number:</span> {user.FlatNo}</p>
              )}
              {user.ResidingSince && (
                <p className='mt-2 ml-5'><span className='font-semibold'>Residing Since:</span> {user.ResidingSince}</p>
              )}
              {user.AdharNo && (
                <p className='mt-2 ml-5'><span className='font-semibold'>Adhar Number:</span> {user.AdharNo}</p>
              )}
              {user.OwnerContact && (
                <p className='mt-2 ml-5'><span className='font-semibold'>Owner Contact:</span> {user.OwnerContact}</p>
              )}
              {user.TenantContact && (
                <p className='mt-2 ml-5'><span className='font-semibold'>Tenant Contact:</span> {user.TenantContact}</p>
              )}
              {user.WorkPlace && (
                <p className='mt-2 ml-5'><span className='font-semibold'>Work Place:</span> {user.WorkPlace}</p>
              )}
              {user.PermanentTenantAddress && (
                <p className='mt-2 ml-5'><span className='font-semibold'>Permanent Tenant Address:</span> {user.PermanentTenantAddress}</p>
              )}
              {user.OwnerAddress && (
                <p className='mt-2 ml-5'><span className='font-semibold'>Owner Address:</span> {user.OwnerAddress}</p>
              )}
              {user.FourWheelerNo && (
                <p className='mt-2 ml-5'><span className='font-semibold'>Four Wheeler Number:</span> {user.FourWheelerNo}</p>
              )}
              {user.TwoWheelerNo && (
                <p className='mt-2 ml-5'><span className='font-semibold'>Two Wheeler Number:</span> {user.TwoWheelerNo}</p>
              )}
              {user.RestNameAdharContact && (
                <p className='mt-2 ml-5'><span className='font-semibold'>Name-Adhar-Contact of other members:</span> {user.RestNameAdharContact}</p>
              )}
              {user.PoliceVerificationSubmitted && (
                <p className='mt-2 ml-5'><span className='font-semibold'>Police-Verification submitted or not:</span> {user.PoliceVerificationSubmitted}</p>
              )}
              {user.RentAgreementSubmitted && (
                <p className='mt-2 ml-5'><span className='font-semibold'>Rent-Agreement submitted or not:</span> {user.RentAgreementSubmitted}</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
