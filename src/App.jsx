import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import LogicComponent from "./components/LogicComponent";



import CardSideBarComponent from "./components/CardSideBarComponent";
import CardCmponents from "./components/CardCmponents";

function App() {
  const [number, setNumber] = useState([{
    id: 1, 
    img: "ppl1.jpg",
    name: "David",
    message: "Hey tell me about progress of project? Waiting for your response",
    date:"21 July", 
    like: false
    },
    {
    id: 2, 
    img: "ppl2.jpg" ,
    name: "Stephanie",
    message: "I got your first assignment. It was quite good. You can start work on next assignment",
    date:"19 July", 
    like: true
    },
    {
    id: 3, 
    img: "ppl3.jpg" ,
    name: "William",
    message: "I want some changes in previous work you sent me. Waiting for your reply.",
    date:"17 July", 
    like: false
    },
    {
    id: 4 , 
    img: "ppl4.jpg",
    name: "Alona",
    message: "I am really impressed from your work. Keep doing great work",
    date:"15 July", 
    like: true
    },
    {
    id: 5, 
    img: "ppl5.jpg" ,
    name: "Hira",
    message: "When you start redesign of app? Previous project was perfect.",
    date:"13 July",
    like: false
    },
    {
    id: 6 , 
    img: "ppl6.jpg",
    name: "Ghulam",
    message: "I want to let you know I am agree on that project. Looking for anther good one.",
    date:"11 July", 
    like: false
    },
    {
    id: 7, 
    img: "ppl2.jpg" ,
    name: "Mina",
    message: "You did a great job for the previous project. Looking forward for another one next time.",
    date:"13 July", 
    like: true
    },
    {
    id: 8, 
    img: "ppl4.jpg" ,
    name: "Noona",
    message: "How is the project going? I'm waiting to see...",
    date:"13 July", 
    like: true
    }
    ]);
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#e5e7eb] ">
        <div className="w-[80%]  bg-white rounded-3xl ">
          <div className="navbar">
            <NavbarComponent />
          </div>
          <div className="grid grid-cols-12 h-[684px] ">
            <div className="col-span-1 ml-8 mt-5 ">
              <LogicComponent />
            </div>
            <div className="col-span-8 bg-[#f3f4f6] rounded-t-3xl  ">
              <div className="flex justify-between mt-8 mx-6">
                <div className="font-bold text-xl">Projects</div>
                <button
                  type="button "
                  className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-gray-400 rounded-lg border border-gray-200 hover:bg-blue-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  ADD NEW PROJECT
                </button>
              </div>
              <div>
                <CardCmponents />
              </div>
            </div>
            <div className="col-span-3 ">
              <div className="flex justify-between mt-4 mx-7 font-bold">
                <div>client message</div>
                <div>...</div>
              </div>
              <div className="mt-2">
                <CardSideBarComponent  userInfor={number} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
