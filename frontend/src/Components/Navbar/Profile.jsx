import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CgProfile, CgLogOut } from "react-icons/cg";
import { SiGmail } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { useAuth } from "../context/AllContext";
import { Link, useNavigate } from 'react-router-dom'

export default function Profile({ dark, setDark }) {

    const { Profile } = useAuth();
    const navigate = useNavigate();



    const menuLinks = [
        { name: "Settings", href: "/dashBoard", icon: FiSettings },
        {
            name: "Log out", href: "#", icon: CgLogOut, action: () => {
                setLogIn(false); localStorage.removeItem("token");
                if (!login) {
                    return
                    <Navigate to="/login" />;
                } navigate("/login");
            }
        },
    ];


    return (
        <div>
            <Menu as="div" className="relative ml-3">
                <MenuButton className="relative flex items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 hover:ring-2 hover:ring-red-500/50 transition-all">

                    {Profile?.profileImg ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-red-600/30 hover:ring-red-600/70 transition-all duration-300">
                            <img
                                alt="Profile"
                                src={Profile?.profileImg?.secure_url}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ) : (
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white font-bold uppercase">
                            {Profile?.name?.charAt(0) || "S"}
                        </div>
                    )}

                </MenuButton>


                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-3 w-56 origin-top-right rounded-xl bg-white dark:bg-zinc-900 py-2 shadow-2xl border border-gray-200 dark:border-zinc-700" >                    <div className="px-4 py-3 border-b border-gray-100 dark:border-zinc-700">

                        <div className='flex gap-3 items-center mb-2'>
                            <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/20">
                                <CgProfile className="text-red-600 dark:text-red-400 text-lg" />
                            </div>

                            <div>
                                <h1 className="font-semibold text-gray-900 dark:text-white">
                                    {Profile?.name || "John Doe"} </h1>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Premium Member </p>
                            </div>
                        </div>


                        <div className='flex gap-3 items-center'>
                            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                                <SiGmail className="text-blue-600 dark:text-blue-400 text-lg" />
                            </div>
                            <div>
                                <h1 className="text-sm text-gray-700 dark:text-gray-300">
                                    {Profile?.email || "john.doe@gmail.com"}
                                </h1>
                            </div>
                        </div>

                    </div>


                    {menuLinks.map((item, index) => (
                        <MenuItem key={index}>
                            {({ active }) => (item.action ? (
                                <button onClick={item.action}
                                    className={`flex items-center gap-3 w-full px-4 py-3 text-sm ${active ? 'bg-red-50 dark:bg-zinc-800 text-red-600' : 'text-gray-700 dark:text-gray-300'}`} >
                                    <item.icon className="text-lg" />
                                    <span className="font-medium">{item.name}</span>
                                </button>) : (


                                <Link to={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 text-sm ${active ? 'bg-red-50 dark:bg-zinc-800 text-red-600' : 'text-gray-700 dark:text-gray-300'}`} >
                                    <item.icon className="text-lg" />
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            )
                            )}
                        </MenuItem>
                    ))}

                </MenuItems>
            </Menu>
        </div>
    );
}