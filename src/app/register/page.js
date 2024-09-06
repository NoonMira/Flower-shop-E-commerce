// pages/register.js
'use client';

import { useState } from 'react';
import { supabase } from '@/lib/db';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function RegisterPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const router = useRouter();
  
    const handleRegister = async (e) => {
      e.preventDefault();
  
      try {
        // Register with Supabase Auth
        const response = await axios.post('https://bacynvqtjyezwfokcxic.supabase.co/auth/v1/signup', {
          email: email,
          password: password
        }, {
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhY3ludnF0anllendmb2tjeGljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0Mjg1NzUsImV4cCI6MjA0MDAwNDU3NX0.oE22VVOP8uobV4fmldtWaN2JLU-aifnHQPhPMA0W6hI',
            'Content-Type': 'application/json'
          }
        });
    
        const { user } = response.data;
    
        // Insert user data into the `user` table
        const { data, error } = await axios.post('https://your-project-url.supabase.co/rest/v1/user', {
          id: user.id,
          email: user.email,
          full_name: fullName,
          last_name: lastName
        }, {
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhY3ludnF0anllendmb2tjeGljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0Mjg1NzUsImV4cCI6MjA0MDAwNDU3NX0.oE22VVOP8uobV4fmldtWaN2JLU-aifnHQPhPMA0W6hI',
            'Content-Type': 'application/json'
          }
        });
    
        if (error) {
          console.error('Error inserting user data:', error);
        } else {
          router.push('/login'); // Redirect after successful registration
        }
      } catch (error) {
        console.error('Error during registration:', error);
        setError('Error during registration');
      }
  }
    
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Create account</h1>
        <form onSubmit={handleRegister} className="flex flex-col w-1/3 ">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 my-2 border bg-slate-50"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 my-2 border  bg-slate-50"
          />
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
          {success && <p className="text-green-500">{success}</p>}
          <button type="submit" className="p-2 my-2 bg-blue-500 text-white">
            Creat
          </button>
        </form>
      </div>
    );
  }