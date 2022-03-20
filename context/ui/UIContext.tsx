import { createContext } from "react";

export interface ContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;

  //Methods
  toogleSidebar: (isOpenSidebar: boolean) => void;
  setIsAddingEntry: (isAddingEntry: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
