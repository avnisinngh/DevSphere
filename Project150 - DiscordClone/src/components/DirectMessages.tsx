import React from 'react';
import { User } from '../types';
import { users } from '../data';
import { Search, Plus } from 'lucide-react';

const DirectMessages: React.FC = () => {
  return (
    <div className="w-60 h-screen bg-discord-darker flex flex-col">
      <div className="p-4 border-b border-discord-darkest shadow-sm">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Find or start a conversation" 
            className="w-full bg-discord-darkest rounded p-1 px-2 text-sm text-discord-lighter outline-none"
          />
          <Search size={16} className="absolute right-2 top-1.5 text-discord-lighter" />
        </div>
      </div>
      
      <div className="p-2">
        <div className="channel">
          <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
            <path
              fill="currentColor"
              d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.486 17.514 2 12 2ZM12 18.5C8.467 18.5 5.5 15.533 5.5 12C5.5 8.467 8.467 5.5 12 5.5C15.533 5.5 18.5 8.467 18.5 12C18.5 15.533 15.533 18.5 12 18.5Z"
            />
            <path
              fill="currentColor"
              d="M12 6.5C9.014 6.5 6.5 9.014 6.5 12C6.5 14.986 9.014 17.5 12 17.5C14.986 17.5 17.5 14.986 17.5 12C17.5 9.014 14.986 6.5 12 6.5Z"
              className="text-discord-primary"
            />
          </svg>
          <span>Friends</span>
        </div>
        
        <div className="channel">
          <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
            <path
              fill="currentColor"
              d="M19.3 4.71a.996.996 0 00-1.41 0L7.29 15.3a.996.996 0 000 1.41l.3.3a.996.996 0 001.41 0L19.3 6.41a.996.996 0 000-1.41l-.3-.29zm-3.07 3.05a.996.996 0 00-1.41 0l-2.83 2.83a.996.996 0 000 1.41l.3.3a.996.996 0 001.41 0l2.83-2.83a.996.996 0 000-1.41l-.3-.3z"
            />
          </svg>
          <span>Nitro</span>
        </div>
      </div>
      
      <div className="px-2 mt-2">
        <div className="flex items-center justify-between text-xs font-semibold text-discord-lighter mb-1">
          <span>DIRECT MESSAGES</span>
          <Plus size={16} className="cursor-pointer" />
        </div>
        
        {users.slice(1, 5).map(user => (
          <div key={user.id} className="channel">
            <div className="relative mr-2">
              <img 
                src={user.avatar} 
                alt={user.username} 
                className="w-8 h-8 rounded-full"
              />
              <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-discord-darker
                ${user.status === 'online' ? 'bg-discord-success' : 
                  user.status === 'idle' ? 'bg-discord-warning' : 
                  user.status === 'dnd' ? 'bg-discord-danger' : 'bg-discord-light'}`}
              />
            </div>
            <span>{user.username}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-auto p-2 bg-discord-darkest flex items-center">
        <div className="flex-1 flex items-center">
          <div className="w-8 h-8 rounded-full bg-discord-primary mr-2 flex items-center justify-center">
            <span className="text-white font-medium">U</span>
          </div>
          <div>
            <div className="text-sm font-medium text-white">Username</div>
            <div className="text-xs text-discord-lighter">#1234</div>
          </div>
        </div>
        <div className="flex space-x-2">
          <svg width="20" height="20" viewBox="0 0 24 24" className="text-discord-lighter cursor-pointer">
            <path
              fill="currentColor"
              d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z"
            />
            <path
              fill="currentColor"
              d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z"
            />
            <path
              fill="currentColor"
              d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z"
            />
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" className="text-discord-lighter cursor-pointer">
            <path
              fill="currentColor"
              d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z"
            />
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" className="text-discord-lighter cursor-pointer">
            <path
              fill="currentColor"
              d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DirectMessages;