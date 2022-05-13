import { useEffect, useState } from "react"
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Tabs } from "./Tabs";

export function PomoTimer() {
  const [ currentTab, setCurrentTab ] = useState<number>(0);
  
  return (
    <section className={`bg-tab${currentTab == 0 ? "Main" : (currentTab == 1 ? "ShortTime" : "LongTime")} w-screen h-screen flex align-center flex-col justify-between font-mPlus font-w text-md transition-colors duration-1000`}>
      <Header title="PomoTimer"/>
      <main className="w-full h-full flex items-center justify-center">
        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      </main>
      <Footer/>
    </section>
    )
  }