'use client'
import { useState, useEffect } from 'react';

export default function ContadorPage() {
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState('');
    const [vibrate, setVibrate] = useState(false);

    const handlePlus = (e: React.FormEvent) => {
        e.preventDefault();
        setCounter(counter + 1);
        setError('');
    };

    const handleLess = (e: React.FormEvent) => {
        e.preventDefault();
        if (counter <= 0) {
            setError('¡No puedes disminuir a negativos!');
            setVibrate(true);
        } else {
            setCounter(counter - 1);
            setError('');
        }
    };

    useEffect(() => {
        if (vibrate) {
            const timer = setTimeout(() => setVibrate(false), 1000);
            return () => clearTimeout(timer); // Reiniciar el timer para que pueda mostrar un error varias veces sin recargar la página
        }
    }, [vibrate]);

    return (
        <main className="min-h-screen flex justify-center items-center gap-5">
            <div className="text-center">
                <h1 className={`font-bold text-8xl ${vibrate ? 'vibrate' : ''} ${error ? 'text-red-500' : ''}`}>{counter}</h1>

                <form>
                    <button onClick={handleLess} className="bg-stone-900 rounded-l-full font-bold w-20 p-4 mt-4 text-white hover:bg-stone-800 hover:bg-stone-100">-</button>
                    <button onClick={handlePlus} className="bg-stone-900 rounded-r-full font-bold w-20 p-4 mt-4 text-white hover:bg-stone-800 hover:bg-stone-100">+</button>
                </form>
                
                <div className="mt-4" style={{ height: '50px' }}>
                    {error && <p className="text-red-500">{error}</p>}
                </div>
            </div>
        </main>
    );
}