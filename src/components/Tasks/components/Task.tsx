import { CheckCircle, Circle } from "phosphor-react";
import { classNames } from "../../../lib/helper";
import { task } from "../../../lib/types";
import { MenuTask } from "./MenuTask";

interface TaskProps{
  task: task;
  detailColor: string;
  lastTask: boolean;
  deleteTask: (task: task) => void;
  setTask: (task: task, value:boolean, title?:string) => void;
}

export function Task({ detailColor, lastTask, task, deleteTask, setTask}: TaskProps){
  return (
        <li
        className="relative group rounded-md py-3 pl-2 flex gap-2 transition-all items-start justify-between hover:bg-gray-100"
      >
        {
          task.done
          ? <CheckCircle size={30} className={`text-${detailColor} -translate-y-[.35rem]`}/>
          : <Circle size={30} className={`text-${detailColor} -translate-y-[.25rem]`}/>
        }                    
        <div className='w-full flex align-center justify-between'>
          <div>
            <h3 className={`text-sm leading-5 font-semibold ${task.done && "line-through opacity-60"}`}>
              {task.title}
            </h3>

            <button
              onClick={() => setTask(task, !task.done)}
              className={classNames(
                'absolute inset-0 rounded-md',
                `ring-${detailColor} focus:z-10 focus:outline-none focus:ring-2`
              )}
            />
          </div>
          <MenuTask detailColor={detailColor} lastTask={lastTask} deleteTask={deleteTask} task={task} setTask={setTask}/>
        </div>
      </li>
  );
}