"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();
    const showBoxes = pathname === "/rectangulo" || pathname === "/contador-clicks";

    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-sm p-4 z-50 flex flex-wrap">
            <h1 className={"font-poppins text-xl font-bold text-black"}>LOGO</h1>

            {showBoxes && (
                <div className="flex gap-10 ml-auto">
                    <Link className="text-black hover:text-stone-500 font-bold hover:drop-shadow-xl" href="/contador-clicks">
                        Click Counter
                    </Link>
                    <Link className="text-black hover:text-stone-500 font-bold hover:drop-shadow-xl" href="/rectangulo">
                        Colored Rectangle
                    </Link>
                </div>
            )}
        </div>
    );
}