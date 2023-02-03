import logo from  '../assets/img/logo-3.png'

export default function Navbar() {
    return (
        <>
        <section className="border-b-theme-1 border-b-2 px-8 py-3 flex justify-between items-center shadow-sm text-theme-2 ">
            <div className='w-32 cursor-pointer text-center'>
                <img src={logo} alt="esignee_logo" />
                <p className='text-xs font-semibold tracking-widest'>Digital Signature</p>
            </div>
            <div>
                <ul className='flex gap-1 tracking-wide'>
                    <li className='hover:bg-sky-50 px-4 py-2 rounded-xl cursor-pointer hover:font-semibold'>Dashboard</li>
                    <li className='hover:bg-sky-50 px-4 py-2 rounded-xl cursor-pointer hover:font-semibold'>Organization</li>
                    <li className='hover:bg-sky-50 px-4 py-2 rounded-xl cursor-pointer hover:font-semibold'>Contacts</li>
                    <li className='hover:bg-sky-50 px-4 py-2 rounded-xl cursor-pointer hover:font-semibold'>Settings</li>
                </ul>
            </div>
            <div className='flex items-center gap-2'>
                <div className='w-9 h-9 rounded-full bg-theme-3 flex items-center justify-center text-white'>
                    <p className='font-semibold'>JC</p>
                </div>
                <div>
                    <p className='font-semibold tracking-wide'>John Claymore</p>
                    <p className='text-xs'>Hacktiv 8</p>
                </div>
            </div>
        </section>

        </>
    )
}