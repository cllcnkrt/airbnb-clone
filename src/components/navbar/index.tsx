"use client"

import React from 'react';
import { ClientContainer } from '../clientContainer';
import { Logo } from './logo';
import { Search } from './search';
import { UserMenu } from './userMenu';

export const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <ClientContainer>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </ClientContainer>
      </div>
    </div>
  );
};
