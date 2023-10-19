import { t } from "i18next";
import { ListPlus, PlusCircle } from "phosphor-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { classNames } from "../../../lib/helper";
import { task } from "../../../lib/types";
import { InputShakeAnimation } from "../../animations/genericAnimations";

interface FormAddNewTaskProps {
  detailColor:string;
  addNewTask: (task:task) => void;
}

export function FormAddNewTask({ addNewTask, detailColor }:FormAddNewTaskProps){
  const { t } = useTranslation();

  const [taskTitle, setTaskTitle] = useState<string>('');
  const [invalidTaskTitle, setInvalidTaskTitle] = useState<boolean>(false);

  const handleCreateTask = (e:any) => {
    if(taskTitle != ''){
      addNewTask({id: String(new Date().getTime()), title: taskTitle, done: false});
      setTaskTitle('');
    }else{
      toast.error(t("add-valid-title"));
      setInvalidTaskTitle(true);
      setTimeout(() => {
        setInvalidTaskTitle(false);
        setTimeout(() => document.getElementById('task-title')?.focus(), 200);
      }, 600);
    }
  }

  const handleKeyDown = (e:any) => {
    if ((e.key === 'Enter')) handleCreateTask(e);
  }

  return (
    <li
        className="relative group rounded-md py-3 pl-2 flex gap-2 transition-all items-center justify-between hover:bg-gray-100"
      >
        <PlusCircle size={39} className={`text-${detailColor}`}/>
        <div className='w-full flex align-center h-9 justify-between'>
          {
            !invalidTaskTitle
            ? <input 
              id="task-title"
              type="text" 
              value={taskTitle}
              onChange={e => setTaskTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              className="block bg-transparent outline-none w-full h-full" 
              placeholder={t("placeholder-task-title")}/>
            : <InputShakeAnimation
              type="text" 
              value={taskTitle}
              onChange={e => setTaskTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              className="block bg-transparent outline-none w-full h-full" 
              placeholder={t("placeholder-task-title")}/>
          }
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