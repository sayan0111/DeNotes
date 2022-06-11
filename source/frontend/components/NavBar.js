import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <>
            <div className={`absolute z-10 top-0 left-0 h-screen w-screen bg-blue drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-slate-900 h-20 text-white"> {/*logo container*/}
                <li className='flex '>
                    <Link href='/'><ul className=' absolute left-0 top-0 px-20 py-6 text-2xl font-bold' >DeNotes</ul></Link>
                    <ul>Home</ul>
                    <ul>Home</ul>
                </li>
               
            </div>  
        </div>
    </>
  )
}

export default NavBar