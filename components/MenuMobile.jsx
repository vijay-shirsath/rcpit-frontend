/* in the frontend topics we copy the all code from Menu.jsx and paste this here so we can show in mobile diffferently */

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

const MenuMobile = ({showCatMenu,setShowCatMenu,setMobileMenu}) => {
  return (
    <div>
        <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black'>
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li className='cursor-pointer py-4 px-5 border-b flex flex-col' onClick={() => setShowCatMenu (!showCatMenu)}>
                                <div className='flex justify-between items-center'>
                                {item.name}
                                <BsChevronDown size = {14}/>
                                </div>
                                
                                {showCatMenu && (
                                    <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4'>
                                        {subMenuData.map((subMenu) => {
                                           return(
                                            <Link key={subMenu.id} href={"/"}
                                            onClick={() => {
                                                setShowCatMenu(false);
                                                setMobileMenu(false);
                                             }}
                                             >
                                             <li className='py-4 px-8 border-t flex ' >
                                                {subMenu.name}
                                            </li>
                                            </Link>
                                           )
                                        })}
                                    </ul>
                                )}
                            </li>
                        ) : (<li className='py-4 px-5 border-b'>
                            <Link href={item.url} onClick={() => setMobileMenu(false)}>{item.name}</Link>
                        </li>)}
                    </React.Fragment>
                )
            })}
        </ul>
    </div>
  )
}

export default MenuMobile