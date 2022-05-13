import React from "react";
import { Time } from "./types";

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

  if (dataTimer.sec > 0) setDataTimer({
    ...dataTimer,
    sec: dataTimer.sec - 1
  });

  if (dataTimer.min == 0 && dataTimer.sec == 0 && currentTab == 0) {
    setCurrentTab(1); // short break
    setDataTimer(getInitialTimerByTagType(1));
  } else if ((currentTab != 0) && dataTimer.min == 0 && dataTimer.sec == 0) {
    setCurrentTab(0); // to restart the cycle
    setDataTimer(getInitialTimerByTagType(0));
  }
}

export function timerIsChanged(dataTimer: Time, currentTab: number):boolean{
  const defaultTimeByTag:Time = getInitialTimerByTagType(currentTab);
  return (defaultTimeByTag.min != dataTimer.min || defaultTimeByTag.sec != dataTimer.sec)
}