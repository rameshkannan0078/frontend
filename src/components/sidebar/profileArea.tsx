import React, { useState } from 'react';
import Image from 'next/image';
import profile from '../../Assets/Navbar/profile.svg';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

interface DropdownContentProps {
    onLogoutClick: () => void;
}

const DropdownContent: React.FC<DropdownContentProps> = ({ onLogoutClick }) => (
    <div className='absolute mt-9 top-10 right-0 w-48 bg-white border border-gray-300 rounded shadow'>
        <ul className='py-2'>
            <li className='px-4 py-2 cursor-pointer hover:bg-blue-100'>Profile</li>
            <li className='px-4 py-2 cursor-pointer hover:bg-blue-100'>Settings</li>
            <li className='px-4 py-2 cursor-pointer hover:bg-blue-100' onClick={onLogoutClick}>Logout</li>
        </ul>
    </div>
);

const ProfileArea = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    const handleLogout = () => {
        Cookies.remove('x-access-token');
        router.push('/');
    };

    return (
        <div className="w-full h-[7rem] bg-white flex relative">
            <div className='w-[13rem] h-[4rem] mt-3 ml-auto mr-3  mb-3 rounded-full bg-[#EDF3FF] flex cursor-pointer' onClick={toggleDropdown}>
                <Image src={profile} alt='profile' className='h-full ml-2'></Image>
                <div className='ml-2'>
                    <label className='text-black font-semibold text-[18px] p-1 mt-2'>Username</label><br />
                    <label>user@gmail.com</label>
                </div>
            </div>
            {isDropdownOpen && <DropdownContent onLogoutClick={handleLogout} />}
        </div>
    );
};

export default ProfileArea;
