import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { task, tasksType } from '../../lib/types';
import { classNames, filteredTasks } from '../../lib/helper';
import { Task } from './components/Task';

interface TasksProps {
  currentTab: number;
}

const mockTasks = [
  {
    id: "id_1",
    title: 'Does drinking coffee make you smarter?',
    done: true,
  },
  {
    id: "id_2",
    title: "So you've bought coffee... now what?",
    done: true,
  },
  {
    id: "id_3",
    title: 'Ask Me Anything: 10 answers to your questions about coffee',
    done: false,
  },
  {
    id: "id_4",
    title: "The worst advice we've ever heard about coffee",
    done: false,
  },
  {
    id: "id_5",
    title: 'Does drinking coffee make you smarter?',
    done: true,
  },
  {
    id: "id_6",
    title: "So you've bought coffee... now what?",
    done: true,
  },
  {
    id: "id_7",
    title: 'Ask Me Anything: 10 answers to your questions about coffee',
    done: false,
  },
  {
    id: "id_8",
    title: "The worst advice we've ever heard about coffee",
    done: false,
  },
  {
    id: "id_1",
    title: 'Does drinking coffee make you smarter?',
    done: true,
  },
  {
    id: "id_2",
    title: "So you've bought coffee... now what?",
    done: true,
  },
  {
    id: "id_3",
    title: 'Ask Me Anything: 10 answers to your questions about coffee',
    done: false,
  },
  {
    id: "id_4",
    title: "The worst advice we've ever heard about coffee",
    done: false,
  },
  {
    id: "id_5",
    title: 'Does drinking coffee make you smarter?',
    done: true,
  },
  {
    id: "id_6",
    title: "So you've bought coffee... now what?",
    done: true,
  },
  {
    id: "id_7",
    title: 'Ask Me Anything: 10 answers to your questions about coffee',
    done: false,
  },
  {
    id: "id_8",
    title: "The worst advice we've ever heard about coffee",
    done: false,
  }
]

export function Tasks({ currentTab }:TasksProps) {
  const [colorsPerTab] = useState<string[]>(["tabMain", "tabShortTime", "tabLongTime"]);
  const [tasks, setTasks] = useState<task[]>(mockTasks);
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
    setTasksTypes(filteredTasks(tasks));
  }

  return (
    <div className="group w-full h-full max-h-[45vh] transition-all overflow-hidden mx-2 sm:mx-0 sm:max-w-5xl sm:w-[600px] px-2 py-8 sm:px-0">
      <Tab.Group>
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
                'rounded-xl bg-white p-3 h-full max-h-[30vh] scrollbar-def group-hover:scrollbar-thumb-gray-300',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-zinc-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {
                  type.tasks.length > 0 
                  ? type.tasks.map((task, task_idx) => (
                    <Task task={task} detailColor={colorsPerTab[currentTab]} setTask={setTask}/>
                  ))
                  : "Nenhuma task para ser mostrada"
                }
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}