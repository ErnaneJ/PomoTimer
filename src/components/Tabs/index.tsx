import { useEffect, useState } from "react";
import { Actions } from "./components/Actions";
import { Menu } from "./components/Menu";
import { Timer } from "./components/Timer";

import { Time } from "../../lib/types"
import { getInitialTimerByTagType } from "../../lib/helper";

interface TabsProps {
  currentTab: number;
  setCurrentTab: (tab: number) => void;
}

export function Tabs({ currentTab, setCurrentTab }: TabsProps){
  const [dataTimer, setDataTimer] = useState<Time>({
    min: 25,
    sec: 0,
    counting: false
  });

  useEffect(() => {
    setDataTimer(getInitialTimerByTagType(currentTab));
  }, [currentTab])

  return (
    <section className='max-w-5xl w-[600px] backdrop-blur-sm bg-white/20 rounded-xl drop-shadow-2xl px-4 py-2 flex flex-col items-center justify-center'>
      <Menu setCurrentTab={setCurrentTab} dataTimer={dataTimer} currentTab={currentTab} />
      <Timer dataTimer={dataTimer} />
      <Actions currentTab={currentTab} setCurrentTab={setCurrentTab} dataTimer={dataTimer} setDataTimer={setDataTimer}/>
    </section>
  );
}