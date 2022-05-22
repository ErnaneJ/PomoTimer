import { CheckCircle, Circle, DotsThreeVertical, Trash } from "phosphor-react";
import { task } from "../../../lib/types";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface MenuTaskProps {
  detailColor: string;
  task: task;
  lastTask: boolean;
  deleteTask: (task:task) => void;
  setTask: (task:task, value:boolean, title?:string) => void;
}
export function MenuTask({ detailColor, lastTask, deleteTask, setTask, task }:MenuTaskProps) {

  const handleLastTask = () => {
    const panel = document.getElementById('tab-panel-tasks')?.parentElement
    setTimeout(() => {
      if(panel && lastTask) panel.scrollTo(0, panel.scrollHeight);
    }, 10);
  }
  return (
      <Menu as="div" className="relative inline-block text-left ">
        <div>
          <Menu.Button 
          onClick={handleLastTask}
          className="inline-flex w-full justify-center rounded-md text-black text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <DotsThreeVertical size={22} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 right-0 mt-2 w-56 origin-top-right bg-white rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setTask(task, !task.done)}
                    className={`text-gray-900 ${
                      active ? `bg-black/10 text-white` : 'text-gray-900'
                    } group flex w-full gap-2 items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {
                      task.done
                      ? <><Circle size={25} className={`min-w-fit text-${detailColor}`}/> Marcar como não feito</>
                      : <><CheckCircle size={25}  className={`min-w-fit text-${detailColor}`} /> Marcar como Feito</>
                    }
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => deleteTask(task)}
                    className={`text-gray-900 ${
                      active ? `bg-black/10 text-white` : 'text-gray-900'
                    } group flex w-full gap-2 items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Trash size={25} className={`min-w-fit text-${detailColor}`}/> Excluir
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}