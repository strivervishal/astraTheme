import { useState } from "react";
import React from "react";

const Entries = () => {
  const entries = [
    {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z'%3E%3C/path%3E%3C/svg%3E",
      name: "Local Business",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum!",
    },
    {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M6 10V20H19V10H6ZM18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16ZM7 11H9V13H7V11ZM7 14H9V16H7V14ZM7 17H9V19H7V17Z'%3E%3C/path%3E%3C/svg%3E",
      name: "Online Store",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum!",
    },
    {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11.2929 12.1213L15.5355 7.87868L16.9497 9.29289L11.2929 14.9497L7.40381 11.0607L8.81802 9.64645L11.2929 12.1213Z'%3E%3C/path%3E%3C/svg%3E",
      name: "Blogging",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum!",
    },
    {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z'%3E%3C/path%3E%3C/svg%3E",
      name: "Portfolio",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum!",
    },
  ];

  const [fit, setFit] = useState(entries);

  return (
    <div className="relative w-full flex flex-row flex-wrap mt-8 items-center justify-center gap-4">
      {fit.map((e, id) => (
        <div className="relative flex flex-col w-[20%]  p-5" key={id}>
          <img className="w-6 h-5 " src={e.url} alt="hello" />
          <h2 className="mt-2 mb-2 font-semibold ">{e.name}</h2>
          <p className="text-[#6f6d6dda] font-[400] ">{e.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Entries;
