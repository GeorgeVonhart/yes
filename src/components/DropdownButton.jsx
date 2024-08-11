import React, { useState } from 'react';

const DropdownButton = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className={`dropdown-wrapper relative w-[150px] ${isOpen ? 'open' : ''}`}>
      <div className="clash-regular dropdown-label absolute top-[-15px] left-[2px] px-1 text-[11px] text-ghostwhite-600 uppercase bg-[#17171F]s z-10 ">
        Show
      </div>
      <div
        className="dropdown-button border border-solid border-zinc-800 rounded-md bg-[#17171F] flex text-sm text-white cursor-pointer shadow-md overflow-hidden"
        onClick={handleToggle}
      >
        <div className="flex-1 pl-4 py-2 flex items-center">
          <div className="uppercase">{selectedOption}</div>
        </div>
        <div className={`dropdown-icon w-10 border-l border-solid border-zinc-800 flex items-center justify-center`}>
          <img 
            src={'/svgviewer-png-output.png'} 
            alt="Dropdown Icon" 
            className="w-4 h-4"
          />
        </div>
      </div>
      <ul className="absolute w-full mt-1 bg-[#17171F] border border-solid border-zinc-800 rounded-md shadow-lg z-10 list-none p-0 m-0">
        {options.map((option) => (
          <li
            key={option}
            className={`px-5 py-2 cursor-pointer text-white uppercase ${
              option === selectedOption ? 'selected' : ''
            }`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownButton;
