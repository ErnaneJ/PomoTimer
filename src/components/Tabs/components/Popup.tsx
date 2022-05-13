import { Dialog } from '@headlessui/react';
import { X } from 'phosphor-react';

interface PopupProps{
  setStatus: (status: boolean) => void;
  status: boolean;
  message: string;
  title: string;
  currentTab: number;
  callback: () => void;
}

export function Popup({ status, setStatus, message, title, currentTab, callback }: PopupProps){
  const handleConfirmButton = () => {
    callback();
    setStatus(false)
  }
  return (
    <>
      <Dialog className="absolute top-6 h-full w-full flex items-start justify-center z-20" open={status} onClose={() => setStatus(false)}>
        <Dialog.Panel className="w-1/2 backdrop-blur-sm bg-white/80 rounded-xl drop-shadow-2xl px-4 py-6 flex flex-col items-center box-custom-shadow">
          <Dialog.Title className="w-full text-xl text-zinc-700 font-bold my-2 flex flex-row items-center justify-between">
            {title}
            <button type="button" onClick={() => setStatus(false)}>
              <X onClick={() => setStatus(false)} size={22} weight="bold"/>
            </button>
          </Dialog.Title>

          <Dialog.Description className="text-zinc-700 w-full text-md my-2 flex flex-row items-center justify-between">
            {message}
          </Dialog.Description>

          <div className="w-full flex items-center flex-row justify-end gap-2">
            <button 
              type="button" 
              onClick={handleConfirmButton}
              className={`button-color-tab${currentTab == 0 ? "Main" : (currentTab == 1 ? "ShortTime" : "LongTime")}
                bg-white text-md px-3 py-1 font-bold transition-color duration-500 rounded-lg 
              `}
            >
              Confirm
            </button>
            <button 
              type="button" 
              onClick={() => setStatus(false)}
              className={`bg-tab${currentTab == 0 ? "Main" : (currentTab == 1 ? "ShortTime" : "LongTime")}
              text-white text-md px-3 py-1 font-bold transition-color duration-500 rounded-lg opacity-100 hover:opacity-80 `}
            >
              Cancel
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}