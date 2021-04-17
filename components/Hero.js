import Image from 'next/image'

export default function Hero() {
    return (
        <div className="bg-white bg-karya h-screen w-full ">
            <div className="bg-indigo-900 w-full h-full bg-opacity-90 flex flex-col items-center justify-center">
                <div className="bg-white rounded-2xl overflow-hidden box-border shadow-xl">
                    <Image  src='/img/logo-2.png' width='200' height='200'/>
                </div>
                <h1 className='text-8xl text-white mt-10 font-bold'>Halo!</h1>
                <button className=' border-white border-2 py-5 px-4 text-2xl font-bold mt-10 rounded-xl text-white'>Kenalan yuk!</button>
            </div>
        </div>
    )
}
