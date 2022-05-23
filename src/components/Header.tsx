import { Alarm } from "phosphor-react";
import { SoundSwitch } from "./SoundSwitch";
import { SetLocaleMenu } from "./Tabs/components/SetLocaleMenu";
import { DivFadeInDownContent } from './animations/genericAnimations';

interface HeaderProps {
  title: string;
  currentTab: number;
}

export function Header({ currentTab, title }: HeaderProps){
  return (
    <header className="z-20 w-full flex items-center justify-center flex-col  sm:py-5">
      <div className="w-full max-w-5xl border-b border-b-white-200 flex items-center justify-between">
        <DivFadeInDownContent> 
          <h1 className="font-semibold text-white flex items-center gap-2 text-4xl p-3">
            <Alarm size={32} /> {title}
          </h1>
        </DivFadeInDownContent>
        <DivFadeInDownContent className="flex gap-2 items-center">
          <SoundSwitch/>
          <SetLocaleMenu currentTab={currentTab}/>
        </DivFadeInDownContent>
      </div>
    </header>
  );
}