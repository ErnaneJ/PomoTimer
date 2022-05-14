import { useEffect, useState } from "react";
import { timerIsChanged, sounds } from "../../../lib/helper";
import { Time } from "../../../lib/types";
import { Popup } from "./Popup";

interface MenuProps{
  dataTimer: Time;
  currentTab: number;
  setCurrentTab: (Tab: number) => void;
}
const tabs = [
  {name: "Pomodoro", idx: 0},
  {name: "Intervalo Curto", idx: 1},
  {name: "Intervalo Longo", idx: 2}
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
  useEffect(() => {
    sounds.tab();
  }, [currentTab]);
  return (
    <>
    <Popup 
      title="⚠️ Oopss..!" 
      status={popupStatus} 
      setStatus={setPopupStatus} 
      currentTab={currentTab} 
      message="Cuidado! ao realizar essa ação o temporizador atual será reiniciado. Deseja continuar? 😰" 
      callback={() => setCurrentTab(tabToChanged)}
    />

    <nav className="w-full flex items-center justify-between py-2 sm:w-3/4">
      {tabs.map((tab, key)=>(
        <button type="button" 
          key={key}
          className={`text-sm md:text-md px-2 py-1 rounded text-white font-semibold ${currentTab == tab.idx ? "bg-black/25" : ""} hover:bg-black/25 transition-all duration-500`}
          onClick={() => handleChangeTab(tab.idx)}
        >
            {tab.name}
          </button>
      ))}
    </nav>
    </>
  );
}