import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-row flex-wrap w-full bg-black justify-center items-center p-6 ">
      <div className="flex flex-col w-[18%] ">
        <ul className="text-[#dadada] font-[300] capitalize ">
          <li>Home</li>
          <li>News</li>
          <li>Heading</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className="flex flex-col w-[18%] ">
        <ul className="text-[#dadada] font-[300] capitalize">
          <li>Showcase</li>
          <li>Theme</li>
          <li>Plugin</li>
          <li>Patterns</li>
        </ul>
      </div>
      <div className="flex flex-col w-[18%] ">
        <ul className="text-[#dadada] font-[300] capitalize">
          <li>Learn</li>
          <li>Documentation</li>
          <li>Developers</li>
          <li>WordPress</li>
        </ul>
      </div>
      <div className="flex flex-col w-[18%] ">
        <ul className="text-[#dadada] font-[300] capitalize">
          <li>get involved</li>
          <li>event</li>
          <li>donate</li>
          <li>swag store</li>
        </ul>
      </div>
      <div className="flex flex-col w-[18%] p-10">
        <ul className="text-[#dadada] font-[300] capitalize">
          <li>wordPress</li>
          <li>matt</li>
          <li>bbPress</li>
          <li>buddy press</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer