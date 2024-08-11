import React from 'react';

const DiscordContainer = () => {
  return (
    <div className="w-[300px] bg-gradient-to-b from-[#161a27] to-[#1d2838] rounded-xl border-2 border-gray-700 p-6 flex flex-col items-center">

      <div className="mb-6">
        <img src="/rolliconwebp.png" alt="Dice Logo" className="w-24 h-24" />
      </div>

  
      <div className="flex items-center mb-6">
        <div className="h-px bg-gray-600 flex-grow"></div>
        <img src="/dice-icon.png" alt="Dice Icon" className="w-6 h-6 mx-2" />
        <span className="text-white text-sm font-bold uppercase">DICEBLOX.COM</span>
        <div className="h-px bg-gray-600 flex-grow"></div>
      </div>

  
      <div className="w-full bg-gradient-to-b from-[#17171f] to-[#171d29] rounded-md p-4 mb-4 border-b border-blue-400">
        <p className="text-gray-400 text-xs text-center uppercase mb-1">Main Bonus</p>
        <p className="text-white text-lg font-bold text-center uppercase">1 FREE BATTLE</p>
      </div>

      <div className="w-full bg-[#1a1f2e] rounded-md p-4 mb-4 border-b border-gray-600">
        <p className="text-gray-400 text-xs text-center uppercase mb-1">Extra</p>
        <p className="text-white text-sm text-center uppercase">+5% BONUS FOR EVERY DEPOSIT</p>
      </div>

      
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mb-4 uppercase font-bold hover:bg-blue-600 transition duration-300">
        Claim Bonus
      </button>

      <div className="flex items-center mb-2 relative">
        <img src="/question-mark.svg" alt="Question Mark" className="w-5 h-5 mr-2" />
        <span className="text-white text-sm uppercase">How to claim bonus</span>
        <div className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-white"></div>
      </div>

      <img src="/discord.png" alt="Discord" className="w-8 h-8" />
    </div>
  );
};

export default DiscordContainer;