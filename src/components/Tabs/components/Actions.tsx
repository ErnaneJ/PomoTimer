import { useState, useEffect } from "react";
import { Time } from "../../../lib/types"
import { getInitialTimerByTagType, updateTimer, timerIsChanged, sounds } from "../../../lib/helper"
import toast from "react-hot-toast";

interface ActionsProps{
  currentTab: number;
  dataTimer: Time;
  setCurrentTab: (tab: number) => void;
  setDataTimer: (new_time: Time) => void;
}

export function Actions({ currentTab, dataTimer, setDataTimer, setCurrentTab }: ActionsProps ){
  const [statusChangedTime, setStatusChangedTime] = useState(false);

  const handleCounting = () => {
    sounds.switch();
    setDataTimer({...dataTimer, counting: !dataTimer.counting});
  }

  const handleReset = () => {
    if(dataTimer.counting) sounds.switch();
    toast.success("Temporizador reiniciado");
    setDataTimer(getInitialTimerByTagType(currentTab));
  }

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    setStatusChangedTime(timerIsChanged(dataTimer, currentTab));
    if(dataTimer.counting) interval = setInterval(() => {
      updateTimer(dataTimer, currentTab, setCurrentTab, setDataTimer);
    }, 1000);
    return () => clearInterval(interval);
  }, [dataTimer]);

  return (
    <>
      <button type="button"
        onClick={handleCounting}
        className={`button-color-tab${currentTab == 0 ? "Main" : (currentTab == 1 ? "ShortTime" : "LongTime")}
          w-[200px] h-[55px] bg-white text-3xl uppercase font-bold mt-4 mb-3 transition-color duration-500 rounded-lg opacity-80 hover:opacity-100 box-shadow-button${dataTimer.counting ? "--active" : ""}
        `}
        >
          {!dataTimer.counting ? "Iniciar" : "Parar"}
      </button>

      <button type="button"
        onClick={handleReset}
        className={`text-white text-xl font-bold transition-all duration-500 ${statusChangedTime ? "" : "hide-button"}`}
      >
          reiniciar
      </button>
    </>
  );
}