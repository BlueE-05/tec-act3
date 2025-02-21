interface RectangleProps {
    color?: string;
}

export default function Rectangle({ color='bg-gray-500' }: RectangleProps) {
    return <div className={`w-full h-32 ${color}`}></div>
}