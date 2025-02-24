'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';

export default function Home() {
  const router = useRouter();
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required!');
      return;
    }

    setUser({
      name: formData.name,
      email: formData.email,
    });

    const paths = ["/rectangulo", "/contador-clicks"];
    const randomPath = paths[Math.floor(Math.random() * paths.length)];

    router.push(randomPath);
  };

  return (
    <main className="min-h-screen flex">
      <div className="w-1/2 flex justify-center items-center p-8 flex flex-col">
        
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label className="block" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border border-stone-500 rounded-xl mt-1"
              placeholder="Enter Name and Last name"
            />
          </div>

          <div className="mb-4">
            <label className="block" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border border-stone-500 rounded-xl mt-1"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-2 border border-stone-500 rounded-xl mt-1"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="w-full bg-stone-500 text-white p-2 rounded-xl hover:shadow-xl">
            Sign Up
          </button>
        </form>

        <div className="mt-4" style={{ height: '50px' }}>
          {error && <p className="text-red-500 font-bold">{error}</p>}
        </div>
        
      </div>

      <div className="w-1/2 h-screen bg-black flex justify-center items-center text-white">
        <div className="relative w-40 h-40">
          <div className="w-full h-1/2 bg-white rounded-tl-full rounded-tr-full absolute"/>
          <div>
            <div className="w-full h-1/2 bg-white rounded-b-full absolute bottom-0 opacity-50"/>
            <div className="w-full h-1/2 bg-white rounded-b-2xl absolute bottom-0 blur-2xl"/>
          </div>
        </div>
      </div>
    </main>
  );
}