import { Time } from "../../../lib/types"
import { complementWithZeros } from "../../../lib/helper"

interface TimerProps{
  dataTimer: Time;
}

export function Timer({ dataTimer }:TimerProps){
  return (
    <div className="text-9xl text-white font-bold text-shadow-timer my-6">
      {complementWithZeros(dataTimer.min)}
      :
      {complementWithZeros(dataTimer.sec)}
    </div>
  );
}