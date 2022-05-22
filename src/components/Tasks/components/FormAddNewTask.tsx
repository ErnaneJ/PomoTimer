import { ListPlus, PlusCircle } from "phosphor-react";
import { useState } from "react";
import { classNames } from "../../../lib/helper";
import { task } from "../../../lib/types";

interface FormAddNewTaskProps {
  detailColor:string;
  addNewTask: (task:task) => void;
}

export function FormAddNewTask({ addNewTask, detailColor }:FormAddNewTaskProps){
  const [taskTitle, setTaskTitle] = useState<string>('');

  const handleCreateTask = () => {
    addNewTask({id: String(new Date().getTime()), title: taskTitle, done: false});
    setTaskTitle('');
  }

  const handleKeyDown = (e:any) => {
    if (e.key === 'Enter') handleCreateTask();
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
            placeholder="Título da tarefa.."/>
        </div>
        <button
          className={classNames(
            `flex gap-2 items-center bg-${detailColor} text-white font-semibold`,
            "px-2 py-1 rounded-xl cursor-pointer",
            "disabled:opacity-50 disabled:cursor-not-allowed")}
          disabled={taskTitle == ''}
          onClick={handleCreateTask}
        >
          <ListPlus size={20} />
          Adicionar 
        </button>
      </li>
  )
}