import { useReducer } from "react";
import { v4 as uuid } from "uuid";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuid(),
      description:
        "Pendiente: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, optio.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuid(),
      description:
        "In-Progress: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, optio.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuid(),
      description:
        "Finished: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, optio.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuid(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };
    dispatch({ type: "[Entry] - Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] - Entry-Updated", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
