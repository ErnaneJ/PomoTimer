import { useEffect, useState } from "react";
import { Actions } from "./components/Actions";
import { Menu } from "./components/Menu";
import { Timer } from "./components/Timer";

import { Time } from "../../lib/types"
import { getInitialTimerByTagType } from "../../lib/helper";

import clock0 from "../../assets/images/clock-0.png";
import clock1 from "../../assets/images/clock-1.png";
import clock2 from "../../assets/images/clock-2.png";

interface TabsProps {
  currentTab: number;
  setCurrentTab: (tab: number) => void;
}

function getFaviconEl() {
  return document.getElementById("favicon") as HTMLLinkElement;
}

export function Tabs({ currentTab, setCurrentTab }: TabsProps){
  const [dataTimer, setDataTimer] = useState<Time>({
    min: 25,
    sec: 0,
    counting: false
  });

  useEffect(() => {
    const favicon = getFaviconEl();
    if(favicon != null) favicon.href = [clock0, clock1, clock2][currentTab];
    setDataTimer(getInitialTimerByTagType(currentTab));
  }, [currentTab])

  return (
    <section className='w-full max-w-[98vw] mx-2 sm:mx-0 sm:max-w-5xl sm:w-[600px] backdrop-blur-sm bg-white/20 rounded-xl drop-shadow-2xl px-4 py-2 flex flex-col items-center justify-center'>
      <Menu setCurrentTab={setCurrentTab} dataTimer={dataTimer} currentTab={currentTab} />
      <Timer dataTimer={dataTimer} />
      <Actions currentTab={currentTab} setCurrentTab={setCurrentTab} dataTimer={dataTimer} setDataTimer={setDataTimer}/>
    </section>
  );
}