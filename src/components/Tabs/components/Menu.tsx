import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSound from 'use-sound';
import { useTranslation } from "react-i18next";
import { timerIsChanged, validate_sound } from "../../../lib/helper";
import { Time } from "../../../lib/types";
import Tab from "../../../assets/sounds/tab.mp3";

interface MenuProps{
  dataTimer: Time;
  currentTab: number;
  setCurrentTab: (Tab: number) => void;
}

export function Menu({ currentTab, dataTimer, setCurrentTab }: MenuProps){
  const { t } = useTranslation();
  const [playSound] = useSound(Tab);
  const [tabs, _] = useState([
    {name: t("pomodoro"), idx: 0},
    {name: t("short-break"), idx: 1},
    {name: t("long-break"), idx: 2}
  ]);
  
  const handleChangeTab = (tab: number) => {
    if(timerIsChanged(dataTimer, currentTab)){
      if(dataTimer.counting){
        toast.dismiss();
        toast.error(t('timer-in-progress'));
        setTimeout( () => toast(
          t('msg-time-in-progress'),
          {
            duration: 3000,
            position: "bottom-left",
            style: {textAlign: "start"}
          }
        ), 500);
      }else{
        toast.dismiss();
        setCurrentTab(tab);
        toast.success(t("msg-reset-timer"));
      }
    }else if(tab !== currentTab){
      setCurrentTab(tab);
    }
  }
  useEffect(() => {
    validate_sound(() => playSound())
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