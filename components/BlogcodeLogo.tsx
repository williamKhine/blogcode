export default function BlogcodeLogo({size}: {size: number}) {
    const pixel = (size / 5)
    return (
        <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <rect width={size} height={size} rx={size*0.1} fill="black"/>
            <rect x={pixel} y={pixel} width={2*pixel} height={pixel} fill="white"/>
            <rect x={3*pixel} y={2*pixel} width={pixel} height={2*pixel} fill="gray"/>
        </svg>
    )
}