"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function Navbar() {
    const { user } = useUser();
    const pathname = usePathname();
    const showBoxes = pathname === "/rectangulo" || pathname === "/contador-clicks";

    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-sm p-4 z-50 flex justify-between items-center">
            <h1 className="font-poppins text-xl font-bold text-black">LOGO</h1>

            {showBoxes && (
                <div className="flex items-center gap-6">
                    <Link className="text-black hover:text-stone-500 font-bold hover:drop-shadow-xl" href="/contador-clicks">Click Counter</Link>
                    <Link className="text-black hover:text-stone-500 font-bold hover:drop-shadow-xl" href="/rectangulo">Colored Rectangle</Link>

                    {user ? (
                        <div className="flex items-center gap-4">
                            {user.email.endsWith("@gmail.com") && (
                                <Link href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                                        alt="Gmail"
                                        width={24}
                                        height={24}
                                        className="hover:opacity-80 hover:drop-shadow-xl transition-opacity duration-200"
                                        title="Open Gmail"
                                    />
                                </Link>
                            )}
                            <span className="text-black font-medium">Welcome, {user.name}</span>
                        </div>
                    ) : (
                        <Link className="text-black hover:text-stone-500 font-bold hover:drop-shadow-xl" href="/">Sign Up</Link>
                    )}
                </div>
            )}
        </div>
    );
}