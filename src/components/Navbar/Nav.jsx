import { BsSunFill } from 'react-icons/bs'
import { HiOutlineMenu } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import { useState, useEffect } from 'react'

const Nav = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav>
            <div className="flex items-center">
                <div className="flex items-center">
                    <div className="text-24 font-bold mr-2">NerdCart</div>
                    <BsSunFill size={"24px"} color={"yellow"} className="cursor-pointer" />
                </div>
                <ul className="ml-auto text-16 font-semibold">
                    {openMenu ?
                        <MdOutlineClose size={"24px"} className="cursor-pointer" onClick={() => handleMenu()} />
                        : (
                            <HiOutlineMenu size={"24px"} className="cursor-pointer" onClick={() => handleMenu()} />
                        )
                    }
                    {openMenu &&
                        <div className="absolute right-4 bg-white text-black w-2/4 h-1/2 text-13 rounded-lg">
                            <li className="bg-aqua cursor-pointer p-3 text-xl">Home Pages</li>
                            <li className="bg-aqua cursor-pointer p-3 text-xl">Menu</li>
                            <li className="bg-aqua cursor-pointer p-3 text-xl">Route</li>
                            <li className="bg-aqua cursor-pointer p-3 text-xl">Blogs</li>
                            <li className="bg-aqua cursor-pointer p-3 text-xl">Introduce</li>
                            <li className="bg-aqua cursor-pointer p-3 text-xl">Contact</li>
                            <li className="bg-aqua cursor-pointer p-3 text-xl">Exit</li>
                        </div>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Nav