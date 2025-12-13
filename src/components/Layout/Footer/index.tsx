import React, { FC } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-16 pb-12 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1">
            <Logo />
            <p className="text-xs font-medium text-grey dark:text-white/50 mt-4 max-w-xs">
              Sopu's Cloud Kitchen — home of authentic slow-cooked biryanis.
            </p>
          </div>

          <div className="md:col-span-2 flex items-center justify-end">
            <div className="hidden sm:flex md:items-center md:gap-4">
              <div className="flex gap-3">
                <Link 
                  href="https://zomato.onelink.me/xqzv/m1g9ltnd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-red-500 hover:bg-red-600 rounded-full shadow-lg w-10 h-10 flex items-center justify-center transition-all duration-300"
                  title="Order on Zomato"
                >
                  <span className="text-white font-bold text-xl">Z</span>
                </Link>
                <Link 
                  href="https://www.swiggy.com/menu/1271738?source=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg w-10 h-10 flex items-center justify-center transition-all duration-300"
                  title="Order on Swiggy"
                >
                  <Icon icon="simple-icons:swiggy" width="20" height="20" className="text-white" />
                </Link>
                <Link 
                  href="https://maps.app.goo.gl/1U935c44DknKhRRs6?g_st=aw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg w-10 h-10 flex items-center justify-center transition-all duration-300"
                  title="View Location on Google Maps"
                >
                  <Icon icon="mdi:google-maps" width="20" height="20" className="text-white" />
                </Link>
              </div>
            </div>

            {/* On very small screens, show icons below description */}
            <div className="sm:hidden mt-4 flex gap-3">
              <Link 
                href="https://zomato.onelink.me/xqzv/m1g9ltnd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-red-500 hover:bg-red-600 rounded-full shadow-lg w-10 h-10 flex items-center justify-center transition-all duration-300"
                title="Order on Zomato"
              >
                <span className="text-white font-bold text-xl">Z</span>
              </Link>
              <Link 
                href="https://www.swiggy.com/menu/1271738?source=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg w-10 h-10 flex items-center justify-center transition-all duration-300"
                title="Order on Swiggy"
              >
                <Icon icon="simple-icons:swiggy" width="20" height="20" className="text-white" />
              </Link>
              <Link 
                href="https://maps.app.goo.gl/1U935c44DknKhRRs6?g_st=aw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg w-10 h-10 flex items-center justify-center transition-all duration-300"
                title="View Location on Google Maps"
              >
                <Icon icon="mdi:google-maps" width="20" height="20" className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
