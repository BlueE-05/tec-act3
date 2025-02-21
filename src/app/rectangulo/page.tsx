'use client'
import {useState} from 'react';
import Rectangle from "@/components/Rectangle";

export default function Home() {
    const [color, setColor] = useState("bg-gray-500")

    const handleSubmit = (e: React.FormEvent, color_name:string) => {
        e.preventDefault();
        
        setColor(`bg-${color_name}-500`)
    };

    return(
        <main className="min-h-screen flex flex-col justify-center items-center">
            
            <div className="w-60">
                <Rectangle color={color}/>

                <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-2 gap-5 w-full mt-4">
                    <button className="w-full h-20 bg-blue-500 rounded-xl font-bold text-white shadow-md shadow-blue-500/50 transition-all hover:bg-blue-800 hover:shadow-inner hover:shadow-yellow-500" type="button" onClick={(e) => handleSubmit(e, "blue")}>Azul</button>
                    <button className="w-full h-20 bg-lime-500 rounded-xl font-bold text-white shadow-md shadow-lime-500/50 transition-all hover:bg-lime-800 hover:shadow-inner hover:shadow-purple-500" type="button" onClick={(e) => handleSubmit(e, "lime")}>Verde</button>

                    <button className="w-full h-20 bg-red-500 rounded-xl font-bold text-white shadow-md shadow-red-500/50 transition-all hover:bg-red-800 hover:shadow-inner hover:shadow-green-500" type="button" onClick={(e) => handleSubmit(e, "red")}>Rojo</button>
                    <button className="w-full h-20 bg-cyan-200 rounded-xl font-bold text-white shadow-md shadow-cyan-500/50 transition-all hover:bg-cyan-500 hover:shadow-inner hover:shadow-pink-500" type="button" onClick={(e) => handleSubmit(e, "cyan")}>Cyan</button>
                </form>
            </div>
        </main>
    );
}