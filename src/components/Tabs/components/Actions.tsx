import { useState, useEffect } from "react";
import { Time } from "../../../lib/types"
import { getInitialTimerByTagType, updateTimer, timerIsChanged, sounds } from "../../../lib/helper"
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

interface ActionsProps{
  currentTab: number;
  dataTimer: Time;
  setCurrentTab: (tab: number) => void;
  setDataTimer: (new_time: Time) => void;
}

export function Actions({ currentTab, dataTimer, setDataTimer, setCurrentTab }: ActionsProps ){
  const { t } = useTranslation();
  const [statusChangedTime, setStatusChangedTime] = useState(false);
  const [msgs, _] = useState({
    "end-interval": t("end-interval"),
    "end-25-minute-journey": t('end-25-minute-journey'),
    "notifies-end-journey": t('notifies-end-journey'),
    "notifies-end-25-minute-journey": t("notifies-end-25-minute-journey"),
    "notifies-end-interval": t("notifies-end-interval"),
    "msg-notifies-end-interval": t("msg-notifies-end-interval"),
  });

  const handleCounting = () => {
    sounds.switch();
    setDataTimer({...dataTimer, counting: !dataTimer.counting});
  }

  const handleReset = () => {
    if(dataTimer.counting) sounds.switch();
    toast.success(t("msg-reset-timer"));
    setDataTimer(getInitialTimerByTagType(currentTab));
  }

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    setStatusChangedTime(timerIsChanged(dataTimer, currentTab));
    if(dataTimer.counting) interval = setInterval(() => {
      updateTimer(msgs, dataTimer, currentTab, setCurrentTab, setDataTimer);
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
          {!dataTimer.counting ? t('start') : t('stop')}
      </button>

      <button type="button"
        onClick={handleReset}
        className={`text-white text-xl font-bold transition-all duration-500 ${statusChangedTime ? "" : "hide-button"}`}
      >
          {t('reset')}
      </button>
    </>
  );
}