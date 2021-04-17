import Image from 'next/image'

export default function Navbar() {
    return (
        <div className='bg-white shadow-lg'>
            <div className="container">
                <nav className='w-full'>
                    <div className="w-full justify-center py-5 flex items-center">
                        <Image src='/logo.png' width='40' height='40'/>
                        <h1 className="ml-4 font-bold">RSAD Design</h1>
                    </div>
                </nav>
            </div>
        </div>
    )
}
