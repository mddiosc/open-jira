import { UIState } from "./";

type UIActionType =
  | { type: "UI - Toogle Sidebar", payload: boolean }
  | { type: "UI - Set Is Adding Entry"; payload: boolean };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Toogle Sidebar":
      return {
        ...state,
        sidemenuOpen: action.payload,
      };
    case "UI - Set Is Adding Entry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    default:
      return state;
  }
};
