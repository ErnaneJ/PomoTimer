import { t } from "i18next";
import { ListPlus, PlusCircle } from "phosphor-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "../../../lib/helper";
import { task } from "../../../lib/types";

interface FormAddNewTaskProps {
  detailColor:string;
  addNewTask: (task:task) => void;
}

export function FormAddNewTask({ addNewTask, detailColor }:FormAddNewTaskProps){
  const { t } = useTranslation();

  const [taskTitle, setTaskTitle] = useState<string>('');

  const handleCreateTask = () => {
    addNewTask({id: String(new Date().getTime()), title: taskTitle, done: false});
    setTaskTitle('');
  }

  const handleKeyDown = (e:any) => {
    if ((e.key === 'Enter') && (taskTitle != '')) handleCreateTask();
  }

  return (
    <li
        className="relative group rounded-md py-3 pl-2 flex gap-2 transition-all items-center justify-between hover:bg-gray-100"
      >
        <PlusCircle size={39} className={`text-${detailColor}`}/>
        <div className='w-full flex align-center h-9 justify-between'>
          <input 
            type="text" 
            value={taskTitle}
            onChange={e => setTaskTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            className="block bg-transparent outline-none w-full h-full" 
            placeholder={t("placeholder-task-title")}/>
        </div>
        <button
          className={classNames(
            `flex gap-2 items-center bg-${detailColor} text-white font-semibold`,
            "px-2 py-1 rounded-xl cursor-pointer transition-all hover:opacity-90",
            "disabled:opacity-50 disabled:cursor-not-allowed")}
          disabled={taskTitle == ''}
          onClick={handleCreateTask}
        >
          <ListPlus size={20} />
          {t("button-add-new-task")} 
        </button>
      </li>
  )
}