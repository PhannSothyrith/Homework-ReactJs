import { Star } from "lucide-react";
import React from "react";
import b from "../assets/Images/ppl1.jpg";

const CardSideBarComponent = (userInfor) => {
  console.log("user", userInfor);
  return (
    <div>
      {userInfor.userInfor.map((number) => (
        <div className="border-t-2 border-b-2 p-2 flex items-center gap-x-4">
          <div className="w-[50px] h-[50px]">
            <img src={number.img} alt="" />
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <p>{number.name}</p>
              <Star />
            </div>
            <div>{number.message}</div>
            <p className="text-end">{number.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSideBarComponent;
