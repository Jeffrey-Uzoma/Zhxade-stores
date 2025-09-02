'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { MdMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { Images } from '@/utils/images';

interface LocalUser {
  name?: string;
  email?: string;
  // Add other properties you store in localStorage
}

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [localUser, setLocalUser] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const user = localStorage.getItem('user');
    if (user) {
      try {
        setLocalUser(JSON.parse(user));
      } catch (error) {
        console.error('Failed to parse user data', error);
        setLocalUser(null);
      }
    }
  }, []);

  const logout = () => {
    if (session) {
      signOut();
    } else {
      localStorage.clear();
      router.push('/');
    }
  };

  const links = [
    { href: '/', label: 'Home' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' },
    { href: '/sign-up', label: 'Sign Up' },
  ];

  if (!isMounted) return null;

  return (
    <nav className="w-full px-6 md:px-24 py-4 shadow-md bg-white z-50 relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Zhxade Stores
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:hidden lg:flex gap-6 items-center">
          {links.map((link) => (
            <div key={link.href} className="relative group">
              <Link href={link.href} className="text-black">
                {link.label}
              </Link>
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full transition-all duration-300 
                  ${
                    pathname === link.href
                      ? 'bg-slate-700'
                      : 'bg-transparent group-hover:bg-slate-700'
                  }`}
              />
            </div>
          ))}
        </div>

        {/* Search + Icons */}
        <div className="hidden md:hidden lg:flex items-center gap-5">
          <div className="bg-slate-200 px-4 py-1 flex rounded-xl items-center gap-2">
            <input
              type="text"
              className="outline-none border-none bg-transparent text-sm"
              placeholder="What are you looking for?"
            />
            <Image src={Images.SearchIcon} alt="Search Icon" width={20} height={20} />
          </div>

          <div className="flex gap-6">
            <Link href="/favorite">
              <Image src={Images.FavoriteIcon} alt="Favorites" width={24} height={24} />
            </Link>
            <Link href="/cart">
              <Image src={Images.CartIcon} alt="Cart" width={24} height={24} />
            </Link>
          </div>

          {(session?.user || localUser) && (
            <div className="relative">
              <Image
                src={session?.user?.image || Images.Globe}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              />
              {isProfileDropdownOpen && (
                <div className="absolute right-0 top-[100%] mt-2 w-[160px] flex flex-col bg-white border rounded shadow-md z-50">
                  <Link 
                    href="/profile" 
                    className="px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsProfileDropdownOpen(false);
                    }}
                    className="px-4 py-2 text-left hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:flex lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <IoMdClose size={28} />
            ) : (
              <MdMenu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:flex flex flex-col lg:hidden mt-4 space-y-4 absolute bg-white w-full pt-[1.5em] left-0 px-[2em] pb-4 z-50 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 ${
                pathname === link.href ? 'text-slate-700 font-semibold' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-3 mt-4">
            <div className="flex-grow bg-slate-200 px-4 py-1 flex rounded-xl items-center gap-2">
              <input
                type="text"
                className="w-full outline-none border-none bg-transparent text-sm"
                placeholder="What are you looking for?"
              />
              <Image src={Images.SearchIcon} alt="Search Icon" width={20} height={20} />
            </div>
          </div>

          {(session || localUser) && (
            <div className="flex items-center gap-4 mt-4">
              <Link href="/favorite" onClick={() => setIsMobileMenuOpen(false)}>
                <Image src={Images.FavoriteIcon} alt="Favorites" width={24} height={24} />
              </Link>
              <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                <Image src={Images.CartIcon} alt="Cart" width={24} height={24} />
              </Link>
            </div>
          )}

          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full mt-2"
            />
          ) : localUser ? (
            <div className="flex items-center gap-2 mt-2">
              <Image
                src={Images.Globe}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>{localUser.name || localUser.email || 'User'}</span>
            </div>
          ) : (
            <Link href="/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src={Images.Google_image}
                alt="Profile"
                width={40}
                height={40}
                className="mt-2"
              />
            </Link>
          )}

          {(session || localUser) && (
            <button
              onClick={() => {
                logout();
                setIsMobileMenuOpen(false);
              }}
              className="text-red-600 text-sm mt-2 text-left"
            >
              Sign Out
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;