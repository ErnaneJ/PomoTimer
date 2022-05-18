import React from "react";
import { Time } from "./types";

import Switch from "../assets/sounds/switch.mp3";
import Alarm from "../assets/sounds/alarm.mp3";
import Tab from "../assets/sounds/tab.mp3";

import clock0 from "../assets/images/clock-0.png";
import clock1 from "../assets/images/clock-1.png";
import clock2 from "../assets/images/clock-2.png";

export function complementWithZeros(value: number):String{
  return ("00"+value).slice(-2);
}

export function getInitialTimerByTagType(tag: number):Time{
  return [
    { min: 25, sec: 0, counting: false }, // Tag 0 => Start
    { min: 5, sec: 0, counting: false }, // Tag 1 => Short break
    { min: 15, sec: 0, counting: false } // Tag 2 => Long break
  ][tag]
}

export function updateTimer(
  dataTimer: Time,
  currentTab: number,
  setCurrentTab: (tab: number) => void,
  setDataTimer: (updated_time: Time) => void ):void{
    
  if (dataTimer.sec <= 0 && dataTimer.min > 0) setDataTimer({
    ...dataTimer,
    min: dataTimer.min - 1,
    sec: 59
  });
  
  if (dataTimer.sec > 0){ 
    setDataTimer({
    ...dataTimer,
      sec: dataTimer.sec - 1
    });
  }
  
  if (dataTimer.min == 0 && dataTimer.sec == 0 && currentTab == 0) {
    setCurrentTab(1); // short break
    setDataTimer(getInitialTimerByTagType(1));
    notifications.sendNotification(
      "🕑 PomoTimer - Jornada finalizada",
      "Jornada de 25min concluída com sucesso! Uffa.. 😅 Descanse um pouco.",
      currentTab
    );
    sounds.alarm();
  } else if ((currentTab != 0) && dataTimer.min == 0 && dataTimer.sec == 0) {
    setCurrentTab(0); // to restart the cycle
    setDataTimer(getInitialTimerByTagType(0));
    notifications.sendNotification(
      "🕑 PomoTimer - Intervalo encerrado",
      `Opaaa.. 😎 Intervalo finalizado! Que tal mais um ciclo?? 💪`,
      currentTab
    );
    sounds.alarm();
  }
}
  
export function timerIsChanged(dataTimer: Time, currentTab: number):boolean{
  const defaultTimeByTag:Time = getInitialTimerByTagType(currentTab);
  return (defaultTimeByTag.min != dataTimer.min || defaultTimeByTag.sec != dataTimer.sec)
}

export const sounds = {
  switch: () =>{
    const audio = new Audio(Switch);
    audio.play();
  },
  alarm: () =>{
    const audio = new Audio(Alarm);
    audio.play();
  },
  tab: () =>{
    const audio = new Audio(Tab);
    audio.play();
  }
}

export const notifications = {
  requestPermission():void {
    if (window.Notification || Notification) {
      Notification.requestPermission();
    }
  },
  sendNotification(title: string, message: string, currentTab: number):void {
    if (window.Notification && Notification.permission != 'denied') {
      Notification.requestPermission(status => {
        const notification = new Notification(title, {
          body: message,
          icon: [clock0, clock1, clock2][currentTab]
        });
        notification.onclick = ():void => {window.focus(); sounds.tab();};
      });
    }
  }
}