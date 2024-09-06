'use client';

import { useState } from 'react';
import { supabase } from '../lib/db';
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
        // ลองล็อกอินในตาราง admin ก่อน
        const response = await axios.post('https://bacynvqtjyezwfokcxic.supabase.co/auth/v1/token?grant_type=password', {
            grant_type: 'password',
            email: email,
            password: password
          }, {
            headers: {
              'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhY3ludnF0anllendmb2tjeGljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0Mjg1NzUsImV4cCI6MjA0MDAwNDU3NX0.oE22VVOP8uobV4fmldtWaN2JLU-aifnHQPhPMA0W6hI',
              'Content-Type': 'application/json'
            }
          });
      
          const { access_token } = response.data;
      
          localStorage.setItem('supabase_access_token', access_token);
      
 
          router.push('/');
    
        // ลองล็อกอินในตาราง users ถ้าไม่เจอใน admin
        const userResponse = await axios.get('https://bacynvqtjyezwfokcxic.supabase.co/auth/v1/signup', {
          headers: {
            'apikey': '<your-supabase-anon-key>',
            'Authorization': `Bearer <your-supabase-service-role-key>`,
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
