import { useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
};

export const UIProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toogleSidebar = ( isOpenSidebar:boolean ) => {
    dispatch({ type: "UI - Toogle Sidebar", payload: isOpenSidebar });
  };

  const setIsAddingEntry = (isAddingEntry: boolean) => {
    dispatch({ type: "UI - Set Is Adding Entry", payload: isAddingEntry });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        //methods

        setIsAddingEntry,
        toogleSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
