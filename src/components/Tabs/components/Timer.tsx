import { Time } from "../../../lib/types"
import { complementWithZeros } from "../../../lib/helper"
import { useEffect } from "react";

interface TimerProps{
  dataTimer: Time;
}

export function Timer({ dataTimer }:TimerProps){
  useEffect(() => {
    if(dataTimer.counting) {
      document.title = `${complementWithZeros(dataTimer.min)}:${complementWithZeros(dataTimer.sec)} - PomoTimer`;
    }else{
      document.title = "PomoTimer";
    }
  }, [dataTimer]);
  return (
    <div className="text-8xl sm:text-9xl text-white font-bold text-custom-shadow my-2">
      {complementWithZeros(dataTimer.min)}
      :
      {complementWithZeros(dataTimer.sec)}
    </div>
  );
}