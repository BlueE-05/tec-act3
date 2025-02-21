'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/rectangulo");
  };

  return (
    <main className="min-h-screen flex">
      {/* Formulario en la mitad izquierda */}
      <div className="w-1/2 flex justify-center items-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label className="block">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-stone-500 rounded-xl mt-1"
              placeholder="Enter Name and Last name"
            />
          </div>

          <div className="mb-4">
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-stone-500 rounded-xl mt-1"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border border-stone-500 rounded-xl mt-1"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="w-full bg-stone-500 text-white p-2 rounded-xl hover:shadow-xl">Sign Up</button>
        </form>
      </div>

      {/* Rectángulo negro en la mitad derecha */}
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