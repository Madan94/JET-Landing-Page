"use client"; //default CLient Component

import { useEffect, useState } from "react";
import { AiOutlineTwitter,AiOutlineInstagram,AiOutlineLinkedin,AiOutlineMail} from "react-icons/ai";
import { FaGithub, FaBitcoin, FaMapMarkerAlt } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";

const socialIcons = [
    { icon: AiOutlineTwitter, link: "https://x.com/JET_ONDEMAND" },
    { icon: AiOutlineLinkedin, link:"https://www.linkedin.com/company/just-everything/posts/?feedView=all"},
    { icon: AiOutlineMail, link:"https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRCMhJCRGKLtkLHpQnqnZwDXFcXlMVZzNKkmDclVzGJmRvcVLQRQmNBjSXRGFgMFZKkvzp"},
];

const links = [
    ["Services", "JET Cargo Marketplace"],
    ["Quick links", "About us", "Contact us"],
];

export const Footer = () => {
    const [officeAddress, setOfficeAddress] = useState("Fetching office location...");
    const [officeName,setOfficeName]=useState("Fetching Copyright details....")

    useEffect(() => {
        fetch("https://ipinfo.io/json?token=4e88e85de43441")
            .then((response) => response.json())
            .then((data) => {
                const country = data.country; 

                if (country === "IN") {
                    setOfficeAddress("D46, CMDA, Truck Terminal, Madhavaram, Chennai 600110");
                    setOfficeName("© 2025 TeSys India Private Limited. All rights reserved.");
                } else if (country === "US") {
                    setOfficeAddress("Remote Tracking Solutions Inc, 2432W. Peoria Ave, Suite 1344, Phoenix, AZ 85029");
                    setOfficeName("© 2025 Remote Tracking Solutions Inc. All rights reserved.");
                } else {
                    setOfficeAddress("Remote Tracking Solutions Inc, 2432W. Peoria Ave, Suite 1344, Phoenix, AZ 85029");
                    setOfficeName("© 2025 Remote Tracking Solutions Inc. All rights reserved.");
                }
            })
            .catch(() => setOfficeAddress("Remote Tracking Solutions Inc, 2432W. Peoria Ave, Suite 1344, Phoenix, AZ 85029")); 
    }, []);

    return (
        <footer className="bg-blue-50">
          <div className="relative p-5 flex w-full flex-row gap-4 justify-between bg-gradient-to-b from-black to-[#5D2CA8]">
            {/* Left Section */}
            <div className="flex flex-col gap-4 min-w-[200px]">
                <h3 className="font-redzone font-extrabold text-3xl text-white">JET.</h3>
                {/* Social Icons */}
                <div className="flex gap-4">
                    {socialIcons.map(({ icon: Icon, link }, i) => (
                        <a
                            key={i}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 bg-white p-2 rounded-md"
                        >
                            <Icon size={18} color="black" />
                        </a>
                    ))}
                </div>
                {/* Office Address Based on User Location */}
                <span className="text-white text-base flex items-center gap-2">
                    <FaMapMarkerAlt size={16} /> {officeAddress}
                </span>
            </div>
            {/* Right Section */}
            <div className="flex flex-wrap gap-6 md:gap-12 pr-6">
                {links.map((group, idx) => (
                    <ul key={idx} className="flex flex-col gap-2">
                        {group.map((link, i) => (
                            <li key={link}>
                                {i === 0 ? (
                                    <span className="font-redzone mb-2 text-yellow-300">{link}</span>
                                ) : (
                                    <a
                                        href="#marketplace"
                                        className="font-nominee text-white text-sm hover:text-white"
                                    >
                                        {link}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
          </div>
          {/* Copyright Section */}
          <div className="copyright-message text-center py-2 bg-black">
                <span className="text-white text-sm">
                    {officeName}
                </span>
            </div>
        </footer>
    );
}
