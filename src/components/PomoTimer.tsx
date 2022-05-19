import { useEffect, useState } from "react"
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Tabs } from "./Tabs";
import { notifications } from "../lib/helper";

import clock from '../assets/images/clock.svg';
import { Toaster } from "react-hot-toast";

export function PomoTimer() {
  const [ currentTab, setCurrentTab ] = useState<number>(0);
  
  useEffect(() => notifications.requestPermission(), []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <section className={`bg-tab${currentTab == 0 ? "Main" : (currentTab == 1 ? "ShortTime" : "LongTime")} relative overflow-hidden w-screen h-screen flex align-center flex-col justify-between font-mPlus font-w text-md transition-colors duration-1000 select-none`}>
        <Header title="PomoTimer"/>
        <main className="w-full h-full flex items-center justify-center z-10">
          <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab}/>
        </main>
        <Footer/>
        <img src={clock} alt="Relógio analógico" width="512" height="512" className="absolute w-[100vw] h-[100vh] bottom-[-45vh] left-[-40vw] opacity-30 -z-9" />
        <img src={clock} alt="Relógio analógico" width="512" height="512" className="absolute w-[100vw] h-[100vh] top-[-45vh] right-[-40vw] opacity-30 -z-9" />
      </section>
    </>
    )
  }