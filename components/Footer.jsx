import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            our Branches
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            sign up for email
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            send us institution feedback
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            student helpdesk
                        </div>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                Useful Links
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Approvals & Affiliation
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                TEQIP 3
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Swayam Registered Courses
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                NAAC Certificate
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                AICTE Feedback
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                            Anti-ragging Undertaking
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                            Mandatory Disclosure
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                            Mandatory Disclosure
                            </div> 
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                Important Links
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                DTE
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Careers
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                DBATU
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                MahaDBT
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Govt 0f India
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                            Govt 0f Maharashtra
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                            National Scholarship Portal
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                            NPTEL
                            </div>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaFacebookF size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaTwitter size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                Copyright © 2023 R. C. Patel Institute of Technology, Shirpur All Rights Reserved. Designed and Developed by Vijay Shirsath
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Guides
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                    director@rcpit.ac.in
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                    (02563) 259600, 801, 802.
                    </div>
                    
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;