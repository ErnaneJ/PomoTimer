import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { task, tasksType } from '../../lib/types';
import { classNames, filteredTasks, getItemToLocalStorage, setItemToLocalStorage } from '../../lib/helper';
import { Task } from './components/Task';
import { EndList } from './components/EndList';
import toast from 'react-hot-toast';
import { FormAddNewTask } from './components/FormAddNewTask';

interface TasksProps {
  currentTab: number;
}

const defaultTask = [
  {
    id: "0",
    title: 'Utilizar sistema de tarefas do PomoTimer!',
    done: false,
  },
]

export function Tasks({ currentTab }:TasksProps) {
  const localTasks = getItemToLocalStorage('tasks');
  const [colorsPerTab] = useState<string[]>(["tabMain", "tabShortTime", "tabLongTime"]);
  const [tasks, setTasks] = useState<task[]>(localTasks != null ? JSON.parse(localTasks) : defaultTask);
  const [selectedTab, setSelectedTab] = useState(0);
  const [tasksTypes, setTasksTypes] = useState<tasksType>(filteredTasks(tasks));

  const setTask = (task:task, value:boolean, title:string='') => {
    let updatedTasks = tasks.map(t => {
      if(t.id == task.id){ 
        t.done = value; 
        if(title != '') {t.title = title}; 
      }
      return t;
    });

    setTasks(updatedTasks);
    toast.dismiss();
    toast.success("Status da tarefa alterado!");
  }

  const deleteTask = (task:task) => {
    setTasks(tasks.filter(t => t.id != task.id) || []);
    toast.dismiss();
    toast.success("Tarefa excluída!");
  }

  const addNewTask = (task:task) => {
    setSelectedTab(0);
    setTasks([...tasks, task]);
    toast.dismiss();
    toast.success("Tarefa adicionada!");
  }

  useEffect(() => {
    setTasksTypes(filteredTasks(tasks));
    setItemToLocalStorage('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="group w-full h-full max-h-[45vh] transition-all overflow-hidden mx-2 sm:mx-0 sm:max-w-5xl sm:w-[600px] px-2 py-4 sm:px-0">
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Tab.List className="flex space-x-1 rounded-xl backdrop-blur-sm bg-white/20 p-1">
          {Object.values(tasksTypes).map((tasksType) => (
            <Tab
              key={tasksType.title}
              className={({ selected }) =>
                classNames(
                  `w-full rounded-lg py-2.5 text-sm font-bold leading-5`,
                  `ring-white ring-opacity-60 ring-offset-2 ring-${colorsPerTab[currentTab]} focus:outline-none focus:ring-2`,
                  selected
                    ? `bg-white shadow text-${colorsPerTab[currentTab]}`
                    : `text-white hover:bg-white/[0.12] hover:text-white`
                )
              }
            >
              {tasksType.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(tasksTypes).map((type, type_idx) => (
            <Tab.Panel
              key={type_idx}
              className={classNames(
                'rounded-xl bg-white px-3 py-4 h-full min-h-[100px] max-h-[30vh] scrollbar-def group-hover:scrollbar-thumb-gray-300',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-zinc-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul id="tab-panel-tasks">
                <FormAddNewTask addNewTask={addNewTask} detailColor={colorsPerTab[currentTab]}/>
                {
                  type.tasks.length > 0 
                  ? type.tasks.map((task, task_idx) => (
                    <>
                      <Task key={task_idx} task={task} lastTask={task_idx >= (type.tasks.length -2)} detailColor={colorsPerTab[currentTab]} deleteTask={deleteTask} setTask={setTask}/>
                    </>
                  ))
                  : <EndList sticker={2} message={"Nada aqui.. :("}/>
                }
                 {
                  type.tasks.length > 0 &&
                  (type_idx == 0 
                    ? <EndList sticker={1} message={"E essas aqui, vai fazer não?"}/>
                    : <EndList sticker={0} message={"Aeeeee, finalizou todas!"}/>
                  )
                }
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}