import { Dialog } from '@headlessui/react';
import { X } from 'phosphor-react';
import { useState } from 'react';

interface PopupProps{
  message: string;
  callback: () => void;
}

export function Popup({ message, callback }: PopupProps){
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog className="absolute top-0" open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  )
}