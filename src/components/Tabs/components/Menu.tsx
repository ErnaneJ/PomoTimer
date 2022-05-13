import { Popover } from '@headlessui/react';
import { Popup } from "./Popup";

interface MenuProps{
  currentTab: number;
  setCurrentTab: (Tab: number) => void;
}
const tabs = [
  {name: "Pomodoro", idx: 0},
  {name: "Short Break", idx: 1},
  {name: "Long Break", idx: 2}
]
export function Menu({ currentTab, setCurrentTab }: MenuProps){
  return (
    <>
    <Popup message="" callback={() => {}}/>
    <nav className="w-3/4 flex items-center justify-between py-2">
      {tabs.map((tab, key)=>(
        <button 
          key={key}
          className={`px-2 py-1 rounded text-white font-semibold ${currentTab == tab.idx ? "bg-black/25" : ""} hover:bg-black/25 transition-all duration-500`}
          onClick={() => setCurrentTab(tab.idx)}
        >
            {tab.name}
          </button>
      ))}
    </nav>
    </>
  );
}