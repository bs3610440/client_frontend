import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Profile from "./Profile";
import { useAuth } from "../context/AllContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Trending", href: "/" },
  { name: "Fashion", href: "/" },
  { name: "Closure", href: "/" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { login } = useAuth();
  console.log(login)
  const [dark, setDark] = useState(false);

  return (
    <Disclosure
      as="nav"
      className={classNames(
        dark ? "bg-black" : "bg-gray-900",
        "shadow-md z-50 relative"
      )}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex h-20 items-center justify-between">

              {/* LEFT */}
              <div className="flex items-center">
                
                {/* MOBILE MENU BUTTON */}
                <div className="sm:hidden mr-2">
                  <DisclosureButton className="p-2 text-gray-300 hover:bg-gray-700 rounded">
                    {open ? (
                      <XMarkIcon className="h-6 w-6" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" />
                    )}
                  </DisclosureButton>
                </div>

                <h1 className="text-white font-bold text-lg italic">
                  SheSlay
                </h1>

                {/* DESKTOP MENU */}
                <div className="hidden sm:flex ml-6 space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center space-x-3">

                <button
                  onClick={() => setDark(!dark)}
                  className="text-gray-300 text-sm border px-2 py-1 rounded"
                >
                  {dark ? "Light" : "Dark"}
                </button>

                {login ? (
                  <Profile />
                ) : (
                  <div className="hidden md:flex space-x-2">
                    <Link
                      to="/login"
                      className="bg-indigo-600 text-white px-4 py-2 rounded"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="bg-indigo-600 text-white px-4 py-2 rounded"
                    >
                      Signup
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          <DisclosurePanel className="sm:hidden px-4 pb-4 space-y-2 bg-gray-900 border-t border-gray-700">
            
            {/* NAV LINKS */}
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
              >
                {item.name}
              </DisclosureButton>
            ))}

            {/* AUTH BUTTONS */}
            {login ? (
              <div className="pt-2">
                <Profile />
              </div>
            ) : (
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  to="/login"
                  className="bg-indigo-600 text-white px-4 py-2 rounded text-center"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-indigo-600 text-white px-4 py-2 rounded text-center"
                >
                  Signup
                </Link>
              </div>
            )}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}