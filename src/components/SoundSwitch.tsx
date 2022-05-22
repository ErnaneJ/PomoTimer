import { SpeakerSimpleHigh, SpeakerSlash } from "phosphor-react";
import { useEffect, useState } from "react";
import useSound from 'use-sound';
import { getItemToLocalStorage, setItemToLocalStorage, validate_sound } from "../lib/helper";
import Switch_clean from "../assets/sounds/switch_clean.mp3";

export function SoundSwitch(){
  const [playSound] = useSound(Switch_clean);
  const [soundOn, setSoundOn] = useState(JSON.parse(getItemToLocalStorage('soundOn') || 'true'));

  useEffect(() => {
    setItemToLocalStorage('soundOn', JSON.stringify(soundOn));
    validate_sound(() => playSound());
  },[soundOn]);

  return (
    <div className="transition-all relative mt-1">
      <button 
        onClick={() => {setSoundOn(!soundOn)}}
        className="h-10 rounded-lg backdrop-blur-sm bg-white/20 py-2 px-2 cursor-pointer text-left focus:outline-none sm:text-sm">
        {soundOn 
          ? <SpeakerSimpleHigh size={32} className="h-5 w-5 text-white"/>
          : <SpeakerSlash size={32} className="h-5 w-5 text-white"/>
        }
      </button>
    </div>
  );
}
