import { createContext } from 'react';

export interface ContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;

  //Methods
  toogleSidebar: (isOpenSidebar: boolean) => void;
  setIsAddingEntry: (isAddingEntry: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);