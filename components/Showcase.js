
export default function Showcase() {
    return (
        <div className='flex flex-col mt-10 items-center justify-center'>
            <h1 className='text-3xl text-indigo-800 font-bold text-center'>Saya bisa membantu kamu untuk:</h1>

            <div className="flex flex-wrap justify-center items-center flex-col space-y-4 w-screen mb-10 mt-2 p-4">
                <div className="flex flex-col text-center w-full rounded-2xl items-center justify-center bg-indigo-800 sm:w-2/3 h-40 sm:h-96">
                    <h1 className='text-white font-bold text-xl'>Desain Poster</h1>
                    <h1 className='text-white italic'>untuk eventmu atau produkmu agar lebih menarik.</h1>
                </div>
                <div className="flex flex-col text-center w-full rounded-2xl items-center justify-center bg-indigo-800 sm:w-2/3 h-40 sm:h-96">
                    <h1 className='text-white font-bold text-xl'>Desain Konten Sosmed</h1>
                    <h1 className='text-white italic'>agar netizen kagum dengan kontenmu.</h1>
                </div>
                <div className="flex flex-col text-center w-full rounded-2xl items-center justify-center bg-indigo-800 sm:w-2/3 h-40 sm:h-96">
                    <h1 className='text-white font-bold text-xl'>Desain Ilustrasi</h1>
                    <h1 className='text-white italic'>agar visimu tersampaikan dengan mudah.</h1>

                </div>
            </div>
        </div>
    )
}
