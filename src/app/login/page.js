'use client';

import { useState } from 'react';
import { supabase } from '@/lib/db';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import axios from 'axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
       
        const response = await axios.post('https://bacynvqtjyezwfokcxic.supabase.co/auth/v1/token?grant_type=password', {
            grant_type: 'password',
            email: email,
            password: password
          }, {
            headers: {
              'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
              'Content-Type': 'application/json'
            }
          });
      
          const { access_token } = response.data;
      
          localStorage.setItem('supabase_access_token', access_token);
      
 
          router.push('/');
    
       
        const userResponse = await axios.get('https://bacynvqtjyezwfokcxic.supabase.co/auth/v1/signup', {
          headers: {
            'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            'Content-Type': 'application/json',
          },
          params: {
            email: email,
            password: password
          }
        });
    
        if (userResponse.data.length > 0) {
          // User found, redirect to user dashboard
          router.push('/user/dashboard');
        } else {
          setError('Invalid email or password');
        }
      } catch (error) {
        console.error('Error during login:', error);
        setError('Something went wrong');
      }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col w-1/3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 my-2 border  bg-slate-50"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 my-2 border  bg-slate-50"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="p-2 my-2 bg-blue-500 text-white">
          Login
        </button>
       <Link href={"/register"} className='text-center'>Create Account</Link>
      </form>
    </div>
  );
}
