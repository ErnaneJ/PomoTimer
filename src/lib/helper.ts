import { task, tasksType, Time } from "./types";
import toast from "react-hot-toast";

import clock0 from "../assets/images/clock-0.png";
import clock1 from "../assets/images/clock-1.png";
import clock2 from "../assets/images/clock-2.png";

export const defaultDataCurrentTabSettings = {
  currentTab: 0,
  dataTimer: {
    min: 25,
    sec: 0,
    counting: false
  }
}

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
export type msgsType = {
  "end-25-minute-journey": string,
  "notifies-end-journey": string,
  "notifies-end-25-minute-journey": string,
  "notifies-end-interval": string,
  "end-interval": string,
  "msg-notifies-end-interval": string,
}

export function updateTimer(
  msgs: msgsType, 
  dataTimer: Time,
  currentTab: number,
  audio_alarm: () => void,
  audio_tab: () => void,
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
    toast.success(msgs['end-25-minute-journey'], {
      iconTheme: {
        primary: ["rgb(219,82,77)", "rgb(70,142,145)", "rgb(67,126,168)"][currentTab],
        secondary: "white"
      },
    });
    notifications.sendNotification(
      msgs['notifies-end-journey'],
      msgs["notifies-end-25-minute-journey"],
      currentTab
    );
    audio_alarm();
    audio_tab();
  } else if ((currentTab != 0) && dataTimer.min == 0 && dataTimer.sec == 0) {
    setCurrentTab(0); // to restart the cycle
    setDataTimer(getInitialTimerByTagType(0));
    toast.success(msgs["end-interval"], {
      iconTheme: {
        primary: ["rgb(219,82,77)", "rgb(70,142,145)", "rgb(67,126,168)"][currentTab],
        secondary: "white"
      },
    });
    notifications.sendNotification(
      msgs["notifies-end-interval"],
      msgs["msg-notifies-end-interval"],
      currentTab
    );
    audio_alarm();
    audio_tab();
  }
}

export function validate_sound(sound:()=>void):void {
  if(!JSON.parse(getItemToLocalStorage('soundOn') || 'true')) return;
  sound();
}
  
export function timerIsChanged(dataTimer: Time, currentTab: number):boolean{
  const defaultTimeByTag:Time = getInitialTimerByTagType(currentTab);
  return (defaultTimeByTag.min != dataTimer.min || defaultTimeByTag.sec != dataTimer.sec)
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
        notification.onclick = ():void => {window.focus();};
      });
    }
  }
}

export function setItemToLocalStorage(item:string, value:any){
  localStorage.setItem(item, value);
}

export function getItemToLocalStorage(item:string){
  return localStorage.getItem(item);
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function filteredTasks(tasks:task[], todo:string="To-do", done:string="Done", default_title_task:string=''):tasksType{
  if(default_title_task != '') tasks.forEach(t => t.id == "0" ? t.title = default_title_task : null);
  return {
    todo: {
      title: todo,
      tasks: tasks.filter((task) => !task.done)
    },
    done: {
      title: done,
      tasks: tasks.filter((task) => task.done)
    },
  };
}