import Link from 'next/link';
import React from 'react'
import {BsChevronDown} from "react-icons/bs";

const data = [
    { id: 1, name: "HOME", url: "/" },
    { id: 2, name: "ABOUT US", url: "/about" },
    { id: 3, name: "ADMISSION", subMenu: true },
    { id: 4, name: "CONTACT US", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Courses Offered"},
    { id: 2, name: "Fee Structure"},
    { id: 3, name: "Admission Process"},
    { id: 4, name: "Scholarships" },
    { id: 4, name: "Rules For Cancellation" },
    { id: 4, name: "Ducument Required" },
    { id: 4, name: "Online Fees" },
    { id: 4, name: "Institute Level Seats" }
];

const Menu = ({showCatMenu,setShowCatMenu}) => {
  return (
    <div>
        <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li className='cursor-pointer flex items-center gap-2 relative' onMouseEnter={() => setShowCatMenu (true)} onMouseLeave={() => setShowCatMenu (false)}>
                                {item.name}
                                <BsChevronDown size = {14}/>
                                {showCatMenu && (
                                    <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg'>
                                        {subMenuData.map((subMenu) => {
                                           return(
                                            <Link key={subMenu.id} href={"/"}>
                                             <li className='h-12 flex items-center px-3 hover:bg-orange-200/[0.5] rounded-md '>
                                                {subMenu.name}
                                            </li>
                                            </Link>
                                           )
                                        })}
                                    </ul>
                                )}
                            </li>
                        ) : (<li className='cursor-pointer'>
                            <Link href={item.url} >{item.name}</Link>
                        </li>)}
                    </React.Fragment>
                )
            })}
        </ul>
    </div>
  )
}

export default Menu