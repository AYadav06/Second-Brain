
import React from 'react';
import { Logo } from '../icons/Logo';
import { Button } from './Button';
import { ProfileCard } from './ProfileCard';
import { ShareIcon } from '../icons/ShareIcon';
import { AddMemory } from '../icons/AddMemory';

 export const DashNav: React.FC = () => {
  return (
    <nav className="sticky top-0 w-5xl flex items-center justify-between backdrop-blur-3xl border-2 border-gray-800 mt-2 mx-auto p-3 rounded-2xl">
      <div className="flex items-center gap-2">
        <Logo/>
        <span className="text-2xl font-bold">Mind-OS</span>
      </div>
      <div className="flex items-center gap-4">

        <Button startIcon={<AddMemory />} text='Add Memory'/>
        <Button startIcon={<ShareIcon />} text='Share'/>
        <ProfileCard />
        
      </div>
    </nav>
  );
};
