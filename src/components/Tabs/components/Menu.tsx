import { useEffect } from "react";
import toast from "react-hot-toast";
import { timerIsChanged, sounds } from "../../../lib/helper";
import { Time } from "../../../lib/types";

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
  const handleChangeTab = (tab: number) => {
    if(timerIsChanged(dataTimer, currentTab)){
      if(dataTimer.counting){
        toast.dismiss();
        toast.error("Temporizador em andamento");
        setTimeout( () => toast(
          "📌 Para alterar o tipo de temporizador, pare o que já estiver em execução e tente novamente.",
          {
            duration: 3000,
            position: "bottom-left",
            style: {textAlign: "start"}
          }
        ), 500);
      }else{
        toast.dismiss();
        setCurrentTab(tab);
        toast.success("Temporizador reiniciado");
      }
    }else if(tab !== currentTab){
      setCurrentTab(tab);
    }
  }
  useEffect(() => {
    sounds.tab();
  }, [currentTab]);
  return (
    <>
    <nav className="w-full flex items-center justify-between py-2 sm:w-3/4">
      {tabs.map((tab, key)=>(
        <button type="button" 
          key={key}
          className={`text-sm md:text-base px-2 py-1 rounded text-white font-semibold ${currentTab == tab.idx ? "bg-black/25" : ""} hover:bg-black/25 transition-all duration-500`}
          onClick={() => handleChangeTab(tab.idx)}
        >
            {tab.name}
          </button>
      ))}
    </nav>
    </>
  );
}