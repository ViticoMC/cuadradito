
export function Obstaculo({ positionX, positionY }) {
    const imgURl = '/obstaculo2.jpg'

    return (
        <div
           className='absolute blur-[0.5px] rounded-[2px] shadow-2xl bg-black'
            style={{
                height: `20px`,
                width: `20px`,
                backgroundImage: `url(${imgURl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center ',
                position: 'absolute',
                top: `${positionY}px`,
                left: `${positionX}px`,
            }}
        >
        </div>
    )
}
