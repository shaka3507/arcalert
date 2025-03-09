"use client"
import React from 'react';
import { Home, ListCheck, AlertTriangle } from 'lucide-react'; // Using lucide-react for consistent icons
import { ThemeSwitcher } from "@/components/theme-switcher";

const BottomNavBar = () => {
    return (
      <div className="fixed bottom-0 left-0 right-0 md:hidden border-t border-white-600 bg-black">
        <div className="flex justify-around items-center h-16">
          <NavItem href="/protected/alert" label="alert" Icon={AlertTriangle} />
          <NavItem href="/protected" label="home" Icon={Home} />
          <NavItem href="/protected/prepare" label="prepare" Icon={ListCheck} />
        </div>
      </div>
    );
  };

const NavItem = ({ href, label, Icon }: { href: string, label: string, Icon: any}) => (
  <a href={href} className="flex flex-col items-center text-white-700 hover:text-blue-500">
    <Icon size={28} />
    <span className="text-md">{label}</span>
  </a>
);

export default BottomNavBar;