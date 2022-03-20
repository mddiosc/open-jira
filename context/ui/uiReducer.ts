import { UIState } from "./";

type UIActionType =
  | { type: "UI - Toogle Sidebar"; payload: boolean }
  | { type: "UI - Set Is Adding Entry"; payload: boolean }
  | { type: "UI - Start Dragging" }
  | { type: "UI - End Dragging" };

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
    case "UI - Start Dragging":
      return {
        ...state,
        isDragging: true,
      };
    case "UI - End Dragging":
      return {
        ...state,
        isDragging: false,
      };
    default:
      return state;
  }
};
