import React, { useState } from "react";

const OurServices = () => {
  const imageUrl = [
    "https://plus.unsplash.com/premium_photo-1684348962044-f5831083f560?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682310169766-234aafa39c08?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1666739387940-67a2fd0d7359?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [Url, setImageUrl] = useState(imageUrl);
  return (
    <>
      <div className="flex relative mt-10 mb-12">
        <span className="absolute left-[28%] font-semibold text-[2rem]">Our Services</span>
      </div>
      <div className="w-full flex flex-row flex-wrap p-5 items-center justify-center gap-8 ">
        {Url.map((e, id) => {
          return (
            <img
              className="w-[13vw] h-[17vw] bg-red-400 object-cover object-center rounded "
              src={e}
              alt=""
            />
          );
        })}
      </div>
    </>
  );
};

export default OurServices;
