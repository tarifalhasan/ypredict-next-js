import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import { RiMenu2Line } from 'react-icons/ri';
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };
  return (
    <>
      <header className="main-container lg:hidden  py-6 ">
        <div className="flex justify-between">
          <div className="logo">
            <Image src={'/ypred-coin.png'} width={100} height={80} alt="logo" />
          </div>

          <RiMenu2Line
            onClick={toggleDrawer}
            size={25}
            className="block text-white"
          />
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className=""
        >
          <nav>
            <div className="m-6">
              <Link href={'/'}>
                <Image
                  src="/ypred-coin.png"
                  alt="logo"
                  width={100}
                  height={40}
                />
              </Link>
            </div>
            <ul className="flex mt-10 ml-6  flex-col items-start gap-y-8 nav-item">
              <li className="text-slate-100 ">
                <Link href={'/'}>Home</Link>
              </li>
              <li className="text-slate-100 ">
                <Link href={'/app'}>App</Link>
              </li>
              <li className="text-slate-100 ">
                <Link href={'/token'}>Token</Link>
              </li>
              <li className="text-slate-100 ">
                <Link href={'/community'}>Community</Link>
              </li>
              <li className="beta_btn  mt-48">
                <button className="text-skin-pink rounded-xl text-[1em] font-light border-2  border-skin-pink px-6 py-2">
                  Beta Access
                </button>
              </li>
            </ul>
          </nav>
        </Drawer>
      </header>
    </>
  );
};

export default MobileMenu;
