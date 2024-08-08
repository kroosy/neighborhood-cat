"use client";

import Link from "next/link";
import {
  HomeIcon,
  HomeFillIcon,
  SearchIcon,
  SearchFillIcon,
  UploadIcon,
  UploadFillIcon,
  CatIcon,
  CatFillIcon,
  ProfileIcon,
} from "./ui/icons/navigation";
import { usePathname } from "next/navigation";

const menu = [
  { href: "/", icon: <HomeIcon />, clickedIcon: <HomeFillIcon /> },
  { href: "/search", icon: <SearchIcon />, clickedIcon: <SearchFillIcon /> },
  { href: "/upload", icon: <UploadIcon />, clickedIcon: <UploadFillIcon /> },
  { href: "/cats", icon: <CatIcon />, clickedIcon: <CatFillIcon /> },
  { href: "/profile", icon: <ProfileIcon />, clickedIcon: <ProfileIcon /> },
];

export default function NavigationBar() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[600px] mx-auto border border-gray-200 bg-white">
      <div className="h-safe-area flex justify-around items-center">
        {menu.map(({ href, icon, clickedIcon }) => {
          return (
            <Link href={href} className="p-4" key={href}>
              {pathname === href ? clickedIcon : icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
