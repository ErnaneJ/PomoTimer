import { useState } from "react";
import { timerIsChanged } from "../../../lib/helper";
import { Time } from "../../../lib/types";
import { Popup } from "./Popup";

interface MenuProps{
  dataTimer: Time;
  currentTab: number;
  setCurrentTab: (Tab: number) => void;
}
const tabs = [
  {name: "Pomodoro", idx: 0},
  {name: "Short Break", idx: 1},
  {name: "Long Break", idx: 2}
]
export function Menu({ currentTab, dataTimer, setCurrentTab }: MenuProps){
  const [popupStatus, setPopupStatus] = useState<boolean>(false);
  const [tabToChanged, setTabToChanged] = useState<number>(currentTab);

  const handleChangeTab = (tab: number) => {
    if(timerIsChanged(dataTimer, currentTab)){
      setTabToChanged(tab);
      setPopupStatus(true);
    }else if(tab !== currentTab){
      setCurrentTab(tab);
    }
  }
  return (
    <>
    <Popup 
      title="⚠️ Oopss..!" 
      status={popupStatus} 
      setStatus={setPopupStatus} 
      currentTab={currentTab} 
      message="Cuidado! ao realizar essa ação o timer atual será reiniciado. Deseja continuar? 😰" 
      callback={() => setCurrentTab(tabToChanged)}
    />

    <nav className="w-3/4 flex items-center justify-between py-2">
      {tabs.map((tab, key)=>(
        <button type="button" 
          key={key}
          className={`px-2 py-1 rounded text-white font-semibold ${currentTab == tab.idx ? "bg-black/25" : ""} hover:bg-black/25 transition-all duration-500`}
          onClick={() => handleChangeTab(tab.idx)}
        >
            {tab.name}
          </button>
      ))}
    </nav>
    </>
  );
}