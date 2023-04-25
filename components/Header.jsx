import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import { VscChromeClose } from 'react-icons/vsc';
import { BiMenuAltRight } from 'react-icons/bi';
import { useEffect } from 'react';

{/* dont show the navbar after scrolling some px and show the header when we scroll from botton to top */}

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <>
           
            <div className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
                <Wrapper className="h-[60px] flex justify-between items-center">
                    <Link href={"/"}>
                        <img src='/rcpitlogo.png' alt='rcpit logo ' className='rcp-logo w-14 ' ></img>
                    </Link>

                    <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
                    
                    {/* here that will show only when the mobile size appears else it will not */}

                    {mobileMenu && (
                        <MenuMobile showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu} />
                    )}

                    {/* icon start */}

                    <div className='flex items-center gap-2 text-black'>
                        {/*here starts the mobile icons last in the x-axix*/}
                        <div className='w-8 md:w-12 h-18 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2'>
                            {mobileMenu ? (
                                <VscChromeClose
                                    className='text-[16px]'
                                    onClick={() => setMobileMenu(false)}
                                />
                            ) : (
                                <BiMenuAltRight
                                    className='text-[16px]'
                                    onClick={() => setMobileMenu(true)}
                                />
                            )}
                        </div>
                    </div>

                </Wrapper>
            </div>

        </>
    )
}

export default Header