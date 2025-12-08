import React, { FC } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 items-start">
          <div className="md:col-span-1">
            <Logo />
            <p className="text-xs font-medium text-grey dark:text-white/50 mt-4 max-w-xs">
              Sopu's Biryani House — home of authentic slow-cooked biryanis.
            </p>
          </div>

          <div className="md:col-span-2 flex items-center justify-end">
            <div className="hidden sm:flex md:items-center md:gap-4">
              <div className="flex gap-3">
                <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow p-2">
                  <Icon icon="fa6-brands:facebook-f" width="14" height="14" className="group-hover:text-white text-black" />
                </Link>
                <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow p-2">
                  <Icon icon="fa6-brands:instagram" width="14" height="14" className="group-hover:text-white text-black" />
                </Link>
                <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow p-2">
                  <Icon icon="fa6-brands:x-twitter" width="14" height="14" className="group-hover:text-white text-black" />
                </Link>
              </div>

              <div>
                <Link href="#" className="text-sm text-black/70 dark:text-white/70 px-3 hover:text-primary">Privacy policy</Link>
                <Link href="#" className="text-sm text-black/70 dark:text-white/70 px-3 hover:text-primary">Terms</Link>
              </div>
            </div>

            {/* On very small screens, show icons below description */}
            <div className="sm:hidden mt-4 flex gap-3">
              <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow p-2">
                <Icon icon="fa6-brands:facebook-f" width="14" height="14" className="group-hover:text-white text-black" />
              </Link>
              <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow p-2">
                <Icon icon="fa6-brands:instagram" width="14" height="14" className="group-hover:text-white text-black" />
              </Link>
              <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow p-2">
                <Icon icon="fa6-brands:x-twitter" width="14" height="14" className="group-hover:text-white text-black" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-grey/15 dark:border-white/15 py-10 flex justify-between items-center">
          <div>
            <p className="text-sm text-black/70 dark:text-white/70">©2025 Sopu's Biryani House</p>
          </div>

          <div className="ml-auto">
            <Link href="#" className="text-sm text-black/70 dark:text-white/70 px-5 border-r border-grey/15 dark:border-white/15 hover:text-primary dark:hover:text-primary">Privacy policy</Link>
            <Link href="#" className="text-sm text-black/70 dark:text-white/70 px-5 hover:text-primary dark:hover:text-primary">Terms & conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
