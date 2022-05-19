import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
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

function toastConfirmChangeTab(currentTab:number, tab:number, callback: (tab:number) => void){
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col items-end ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-full p-4">
        <div className="flex items-start">
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">
              ⚠️ Oopss..!
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Você tem certeza de que deseja reiniciar manualmente o temporizador atual? 🤔
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <button
          onClick={() => {callback(tab); toast.dismiss(t.id)}}
          className={`button-color-tab${currentTab == 0 ? "Main" : (currentTab == 1 ? "ShortTime" : "LongTime")} w-full border border-transparent rounded-none pb-4 pt-2 px-3 flex items-center justify-center text-sm font-medium`}
        >
          Confirmar
        </button>
        <button
          onClick={() => toast.dismiss(t.id)}
          className={`button-color-tab${currentTab == 0 ? "Main" : (currentTab == 1 ? "ShortTime" : "LongTime")} w-full border border-transparent rounded-none pb-4 pt-2 px-3 flex items-center justify-center text-sm font-medium`}
        >
          Fechar
        </button>
      </div>
    </div>
  ));
}

export function Menu({ currentTab, dataTimer, setCurrentTab }: MenuProps){
  const handleChangeTab = (tab: number) => {
    if(timerIsChanged(dataTimer, currentTab)){
      toastConfirmChangeTab(currentTab, tab, setCurrentTab);
    }else if(tab !== currentTab){
      setCurrentTab(tab);
    }
  }
  useEffect(() => {
    sounds.tab();
    toast.success('Tab changed!', {
      iconTheme: {
        primary: ["rgb(219,82,77)", "rgb(70,142,145)", "rgb(67,126,168)"][currentTab],
        secondary: "white"
      },
    });
  }, [currentTab]);
  return (
    <>
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