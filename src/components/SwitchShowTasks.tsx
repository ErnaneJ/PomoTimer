import { Switch } from "@headlessui/react";
import { useTranslation } from "react-i18next";

interface SwitchShowTasksProps {
  showTasks: boolean;
  setShowTasks: (status:boolean) => void
}

export function SwitchShowTasks({showTasks, setShowTasks}:SwitchShowTasksProps) {
  const { t } = useTranslation();

  return (
    <div
      className="w-full max-w-[95vw] mx-2 sm:mx-0 sm:max-w-5xl sm:w-[600px] flex gap-2 items-center justify-end mt-3 text-white font-semibold">
      <Switch
          checked={showTasks}
          onChange={setShowTasks}
          className={`${showTasks ? 'bg-white/60' : 'bg-white/20'}
            transition-all relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
        <span
          aria-hidden="true"
          className={`${showTasks ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch> 
      <p 
        className="cursor-pointer"
        onClick={() => setShowTasks(!showTasks)}>
        {t("switch-show-tasks")} 
      </p>
    </div>
  );
}